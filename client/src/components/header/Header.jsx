import { useContext } from "react";
import { Link } from "react-router";

import { UserContext } from "../../contexts/UserContext";

export default function Header() {
    const { username } = useContext(UserContext);

    return (
        <header>
            <h1 className="headingLogo">
                BikeRush
            </h1>

            <nav>
                <Link to="/">Home</Link>
                <Link to="/search">Search</Link>
                <Link to="/listings">All Listings</Link>

                {username
                    ? (
                        <div id="user">
                            <Link to="/listings/create">Create Listing</Link>
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