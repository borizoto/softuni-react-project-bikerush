import { useContext, useEffect } from "react";
import request from "../utils/requester.js";
import { UserContext } from "../contexts/UserContext.js";

const authUrl = 'http://localhost:3030/users';

export const useLogin = () => {
    const login = async (email, password) => {
        const result = await request('POST', `${authUrl}/login`, { email, password });

        return result;
    }

    return { login };
}

export const useRegister = () => {
    const register = async (email, password, username, phoneNumber) => {
        const result = await request('POST', `${authUrl}/register`, { email, password, username, phoneNumber });

        return result;
    }

    return { register }
}

export const useLogout = () => {
    const { accessToken, userLogoutHandler } = useContext(UserContext);

    useEffect(() => {
        if (!accessToken) {
            return;
        }

        request('GET', `${authUrl}/logout`, null, accessToken)
            .then(userLogoutHandler);

    }, [accessToken, userLogoutHandler])

    return { isLoggedOut: !!accessToken }
}