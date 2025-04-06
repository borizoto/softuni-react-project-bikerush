import { Link } from "react-router";

export default function Header() {
    return (
        <header>
            <h1 className="headingLogo">
                BikeRush
            </h1>
            
            <nav>
                <Link to="/">Home</Link>
                <Link to="/search">Search</Link>
                <Link to="/listings">All Listings</Link>
                <div id="user">
                    <Link to="/listings/create">Create Listing</Link>
                    <Link to="/logout">Logout</Link>
                </div>

                <div id="guest">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            </nav>
        </header>
    );
}