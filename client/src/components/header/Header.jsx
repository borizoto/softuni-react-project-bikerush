
// import { Link } from "react-router";

export default function Header() {
    return (
        <header>
            <h1 className="headingLogo">
                BikeRush
            </h1>
            
            <nav>
                <a href="/">Home</a>
                <a href="/search">Search</a>
                <a href="/listings">All Listings</a>
                <div id="user">
                    <a href="/listings/create">Create Listing</a>
                    <a href="/logout">Logout</a>
                </div>

                <div id="guest">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>
            </nav>
        </header>
    );
}