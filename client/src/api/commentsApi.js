import { useEffect, useState } from "react"

import request from "../utils/requester";
import { useAuthRequest } from "../hooks/useAuthRequest";

import { BASE_URL } from "../config";

export const useComments = (listingId) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const searchParams = new URLSearchParams({
            where: `listingId="${listingId}"`
        })
        request('GET', `${BASE_URL}/comments?${searchParams.toString()}`)
            .then(setComments)
    }, [listingId])

    return { comments, setComments }
}

export const useCreateComment = () => {
    const { authRequest } = useAuthRequest();

    const create = (commentData, listingId, email) => authRequest('POST', `${BASE_URL}/comments`, { comment: commentData, listingId: listingId, email });

    return { create }
}