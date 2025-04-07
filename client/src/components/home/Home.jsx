import { Link } from "react-router";

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section className="hero">
                <h1>Welcome to BikeRush</h1>
                <p>
                    Discover, Buy &amp; Sell Bicycles - The Ultimate Bike Marketplace for
                    Riders! Find the perfect bike for your next adventure or list yours for
                    sale today and connect with buyers near you!
                </p>
                <div className="hero-buttons">
                    <Link to="/listings" className="btn">
                        Browse Listings
                    </Link>
                    <Link to="/listings/create" className="btn">
                        Sell Your Bike
                    </Link>
                </div>
            </section>
            {/* Latest Listings Section */}
            <section className="bike-listings">
                <h2>Latest Listings</h2>
                <article className="bike">
                    <img src="bike1.jpg" alt="Mountain Bike" />
                    <h3>
                        <a href="bike-details.html">Specialized Rockhopper</a>
                    </h3>
                    <p>Category: Mountain Bike</p>
                    <p>Price: $800</p>
                </article>
                <article className="bike">
                    <img src="bike2.jpg" alt="Road Bike" />
                    <h3>
                        <a href="bike-details.html">Trek Domane SL5</a>
                    </h3>
                    <p>Category: Road Bike</p>
                    <p>Price: $1,500</p>
                </article>
                <article className="bike">
                    <img src="bike3.jpg" alt="City Bike" />
                    <h3>
                        <a href="bike-details.html">Cannondale Quick 3</a>
                    </h3>
                    <p>Category: City Bike</p>
                    <p>Price: $600</p>
                </article>
            </section>
        </>
    );
}