import { BASE_URL } from "../config.js";

import request from "../utils/requester.js";

export const getAll = async () => {
    const result = await request('GET', `${BASE_URL}/listings`);

    const listings = Object.values(result);

    return listings;
}

export const getOne = (listingId) => request('GET', `${BASE_URL}/listings/${listingId}`);

export const create = (bikeData) => request('POST', `${BASE_URL}/listings`, bikeData);