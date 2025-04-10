import { useEffect, useState } from "react"
import { BASE_URL } from "../config";
import request from "../utils/requester";
import { useError } from "../hooks/useError";
import { useAuthRequest } from "../hooks/useAuthRequest";

export const useListings = () => {
    const [listings, setListings] = useState([]);

    useEffect(() => {
        request('GET', `${BASE_URL}/listings`)
            .then(setListings)
            .catch(err => {
                console.error('Error fetching listings:', err.message);
            })
    }, [])

    return { listings }  
}

//TODO: Fix filtering to be on the server with this hook
// export const useSearchedListings = (searchData) => {
//     const [foundListings, setFoundListings] = useState([]);

//     useEffect(() => {
//         const conditions = [];

//         if (searchData.brand) {
//             conditions.push(`brand="${searchData.brand}"`);
//         }
//         if (searchData.model) {
//             conditions.push(`model="${searchData.model}"`);
//         }
//         if (searchData.year && searchData.year !== '') { 
//             conditions.push(`year="${searchData.year}"`);
//         }
//         if (searchData.category) {
//             conditions.push(`category="${searchData.category}"`);
//         }
//         if (searchData.type) {
//             conditions.push(`type="${searchData.type}"`);
//         }
//         if (searchData.frameSize) {
//             conditions.push(`frameSize="${searchData.frameSize}"`);
//         }
//         if (searchData.frameMaterial) {
//             conditions.push(`frameMaterial="${searchData.frameMaterial}"`);
//         }
//         if (searchData.wheelSize) {
//             conditions.push(`wheelSize="${searchData.wheelSize}"`);
//         }
//         if (searchData.condition) {
//             conditions.push(`condition="${searchData.condition}"`);
//         }
//         if (searchData.location) {
//             conditions.push(`location="${searchData.location}"`);
//         }
//         if (searchData.price && searchData.price !== '') {  // Only add if it's not an empty string
//             conditions.push(`price="${searchData.price}"`);
//         }
//         if (searchData.currency) {
//             conditions.push(`currency="${searchData.currency}"`);
//         }

//         const whereClause = conditions.length > 0 ? conditions.join(' AND ') : '';

//         const url = whereClause
//             ? `${BASE_URL}/listings?where=${encodeURIComponent(whereClause)}`
//             : `${BASE_URL}/listings`; // No filters if no conditions

//         console.log('Request URL:', url); // For debugging

//         request('GET', url)
//             .then(setFoundListings);
//     }, [searchData]);

//     return { foundListings };
// }

export const useListing = (listingId) => {
    const [listing, setListing] = useState({});
    const { error, setError } = useError();

    useEffect(() => {
        request('GET', `${BASE_URL}/listings/${listingId}`)
            .then(setListing)
            .catch(err => {
                console.error('Error fetching listing:', err.message);
                setError("Failed to load listing. Please try again later");
            })
    }, [listingId, setError])

    return { listing, error };
}

export const useDeleteListing = () => {
    const { authRequest } = useAuthRequest();

    const deleteListing = (listingId) => {
        return authRequest('DELETE', `${BASE_URL}/listings/${listingId}`)
    }

    return { deleteListing }
}

export const useCreateListing = () => {
    const { authRequest } = useAuthRequest();

    const create = (bikeData) => {
        return authRequest('POST', `${BASE_URL}/listings`, bikeData);
    }

    return { create };
}

export const useEditListing = () => {
    const { authRequest } = useAuthRequest();

    const edit = (listingId, bikeData) => {
        return authRequest('PUT', `${BASE_URL}/listings/${listingId}`, bikeData)
    }

    return { edit };
}

export const useLatestListings = () => {
    const [latestListings, setLatestListings] = useState([]);

    useEffect(() => {
        const searchParams = new URLSearchParams({
            sortBy: '_createdOn desc',
            pageSize: 5
        });

        request('GET', `${BASE_URL}/listings?${searchParams.toString()}`)
            .then(setLatestListings)
    }, [])

    return { latestListings }
}

export const useOwnListings = (userId) => {
    const [ownListings, setOwnListings] = useState([]);

    useEffect(() => {
        const searchParams = new URLSearchParams({
            where: `_ownerId="${userId}"`
        })
        request('GET', `${BASE_URL}/listings?${searchParams.toString()}`)
            .then(setOwnListings)
    }, [userId])

    return { ownListings };
}