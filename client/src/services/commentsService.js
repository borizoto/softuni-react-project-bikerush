import { BASE_URL } from "../config.js";
import request from "../utils/requester.js";

export const getAll = async (listingId) => {
    const result = await request('GET', `${BASE_URL}/comments`);

    const comments = Object.values(result).filter(comment => comment.listingId === listingId);

    return comments;
};

export const getOne = (listingId) => request('GET', `${BASE_URL}/comments/${listingId}`);

export const create = (commentData, listingId, email) => request('POST', `${BASE_URL}/comments`, { comment: commentData, listingId, email });