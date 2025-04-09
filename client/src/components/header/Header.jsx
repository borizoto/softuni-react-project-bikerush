import { Link } from "react-router";

import { useAuthRequest } from "../../hooks/useAuthRequest";

export default function Header() {
    const { isAuthenticated } = useAuthRequest();

    return (
        <header>
            <h1 className="headingLogo">
                BikeRush
            </h1>

            <nav>
                <Link to="/">Home</Link>
                <Link to="/search">Search</Link>
                <Link to="/listings">All Listings</Link>

                {isAuthenticated
                    ? (
                        <div id="user">
                            <Link to="/listings/create">Create Listing</Link>
                            <Link to="/profile">Profile</Link>
                            <Link to="/logout">Logout</Link>
                        </div>
                    )
                    : (
                        <div id="guest">
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </div>
                    )
                }
            </nav>
        </header>
    );
}