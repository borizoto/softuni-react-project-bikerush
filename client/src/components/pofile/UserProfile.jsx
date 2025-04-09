import { useContext } from "react";
import ProfileListingItem from "./profile-listing-item/ProfileListingItem";
import { UserContext } from "../../contexts/UserContext";
import { useOwnListings } from "../../api/listingsApi";
import { useAddedToWatchlist } from "../../api/watchlistApi";

export default function UserProfile() {
    const { username, email, _id } = useContext(UserContext)
    const { ownListings } = useOwnListings(_id);
    const { addedToWatchlist } = useAddedToWatchlist(_id);

    return (
        <>
            <section className="profile-hero">
                <div className="container">
                    <h2>User Profile</h2>
                    <p>
                        Welcome back, <span id="username">{username}</span> <strong id="email">{email}</strong>
                    </p>
                </div>
            </section>

            <section className="created-listings">
                <div className="container">
                    <h3>Created Bikes</h3>
                    <div className="bike-list">
                        {ownListings?.length > 0 ? (
                            ownListings.map((bike) => <ProfileListingItem key={bike._id} {...bike} />)
                        ) : (
                            <p className="no-post">You haven't created a bike listing yet.</p>
                        )}
                    </div>
                </div>
            </section>

            <section className="watchlisted-bikes">
                <div className="container">
                    <h3>Watchlisted Bikes</h3>
                    <div className="bike-list">
                        {addedToWatchlist?.length > 0 ? (
                            addedToWatchlist.map((bike) => <ProfileListingItem key={bike._id} {...bike} />)
                        ) : ( // ownerId = userId
                            <p className="no-post">You don't have any bike listings in your watchlist yet.</p> //make post request and to data/watchlisted with 
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}