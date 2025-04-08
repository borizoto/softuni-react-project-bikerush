import { Link } from "react-router";
import { useLatestListings } from "../../api/listingsApi";

export default function Home() {
    const { latestListings } = useLatestListings();

    return (
        <>
            {/* Hero Section */}
            <section className="hero">
                <h1>Welcome to BikeRush</h1>
                <p>
                    Discover, Buy & Sell Bicycles - The Ultimate Bike Marketplace for
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
                {latestListings.length > 0 ? (
                    <>
                        <h2>Latest Listings</h2>
                        {latestListings.map((listing) => (
                            <article className="bike" key={listing._id}>
                                <div className="image-wrap">
                                    <img src={listing.imageUrl1} />
                                </div>
                                <h3>
                                    <Link to={`/listings/${listing._id}/details`}>{listing.brand} {listing.model}</Link>
                                </h3>
                                <p>Category: {listing.category}</p>
                                <p>Bike Type: {listing.type}</p>
                                <p>Price: {listing.price} {listing.currency}</p>
                            </article>
                        ))}
                    </>
                ) : (
                    <h3 className="no-articles">No bike listings available.</h3>
                )}
            </section>
        </>
    );
}
