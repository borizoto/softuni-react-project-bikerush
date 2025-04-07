import request from "../utils/requester.js";

const authUrl = 'http://localhost:3030/users';

export const useLogin = () => {
    const login = async (email, password) => {
        const result = await request('POST', `${authUrl}/login`, {email, password});

        return result;
    }

    return { login };
}