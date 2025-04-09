import { Navigate, Outlet } from "react-router";
import { useAuthRequest } from "../hooks/useAuthRequest";

export default function NoAuthGuard() {
    const { isAuthenticated } = useAuthRequest();

    if (isAuthenticated) {
        return <Navigate to='/' />
    }

    return (
        <Outlet />
    );
}