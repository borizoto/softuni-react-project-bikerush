import { useEffect, useState } from "react";
import { BASE_URL } from "../config";
import { useAuthRequest } from "../hooks/useAuthRequest";
import request from "../utils/requester";

export const useCreateWatchlisted = () => {
    const { authRequest } = useAuthRequest();

    const create = (listingId, brand, model, imageUrl1) => {
        return authRequest('POST', `${BASE_URL}/watchlist`, { listingId, brand, model, imageUrl1 });
    }

    return { create };
}

export const useAddedToWatchlist = (userId) => {
    const [addedToWatchlist, setAddedToWatchlist] = useState([]);

    useEffect(() => {
        const searchParams = new URLSearchParams({
            where: `_ownerId="${userId}"`
        })
        request('GET', `${BASE_URL}/watchlist?${searchParams.toString()}`)
            .then(setAddedToWatchlist)
    }, [userId])

    return { addedToWatchlist, setAddedToWatchlist };
}

export const useOwnWatchlist = (listingId, userId) => {
    const [ownWatchlist, setOwnWatchlist] = useState({});

    useEffect(() => {
        const searchParams = new URLSearchParams({
            where: `_ownerId="${userId}" AND listingId="${listingId}"`
        })
        request('GET', `${BASE_URL}/watchlist?${searchParams.toString()}`)
            .then(setOwnWatchlist)
    }, [listingId, userId])

    return { ownWatchlist, setOwnWatchlist };
}

export const useWatchlistedCount = (listingId) => {
    const [watchlisted, setWatchlisted] = useState([]);

    useEffect(() => {
        const searchParams = new URLSearchParams({
            where: `listingId="${listingId}"`
        })
        request('GET', `${BASE_URL}/watchlist?${searchParams.toString()}`)
            .then(setWatchlisted)
    }, [listingId])

    return { watchlisted }
}