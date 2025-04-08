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