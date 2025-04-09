import { UserContext } from "../contexts/UserContext";
import { usePersistedState } from "../hooks/usePersistedState";

export default function UserProvider({ children }) {
    const [authData, setAuthData] = usePersistedState('auth', null);

    const userLoginHandler = (resultData) => {
        setAuthData(resultData);
    }

    const userLogoutHandler = () => {
        setAuthData(null);
        sessionStorage.removeItem('auth');
    }

    return (
        <UserContext.Provider value={{ ...authData, userLoginHandler, userLogoutHandler }}>
            {children}
        </UserContext.Provider>
    )
}