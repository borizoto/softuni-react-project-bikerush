import { createContext } from "react";


export const UserContext = createContext({
    _id: '',
    email: '',
    username: '',
    phoneNumber: '',
    accessToken: '',
    userLoginHandler: () => null,
    userLogoutHandler: () => null
});