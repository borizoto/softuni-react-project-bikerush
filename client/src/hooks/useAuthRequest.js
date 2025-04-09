import { useContext } from 'react'

import { UserContext } from '../contexts/UserContext'
import request from '../utils/requester';

export const useAuthRequest = () => {
    const { accessToken } = useContext(UserContext);

    const authRequest = (method, url, data) => {
        return request(method, url, data, accessToken);
    }

    const isAuthenticated = !!accessToken;

    return { authRequest, isAuthenticated };
}