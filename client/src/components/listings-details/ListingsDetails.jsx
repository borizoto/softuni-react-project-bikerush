import { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router";

import { UserContext } from "../../contexts/UserContext";

import CommentsDetails from "../comments-details/CommentsDetails";
import CommentsCreate from "../comments-create/CommentsCreate";
import { useListing, useDeleteListing } from "../../api/listingsApi";
import { useError } from "../../hooks/useError";
import { useComments } from "../../api/commentsApi";

export default function ListingsDetails() {
    const navigate = useNavigate();

    const { listingId } = useParams();
    const { setError } = useError();
    const { listing, error } = useListing(listingId)
    const { deleteListing } = useDeleteListing();

    const { email, _id, phoneNumber, username } = useContext(UserContext);

    const isOwner = listing._ownerId === _id;

    const { comments, setComments } = useComments(listingId);

    console.log(listing)

    const deleteClicikHandler = async () => {
        const isConfirmed = confirm(`Are you sure you want to delete ${listing.brand} ${listing.model} listing?`);

        if (!isConfirmed) {
            return;
        }

        try {
            await deleteListing(listingId);

            navigate('/listings');
        } catch (err) {
            console.error('Error logging in:', err.message)
            setError(err.message);
        }
    }

    return (
        <>
            {error
                ? (<div className="error">
                    <h2>Something went wrong</h2>
                    <p>{error}</p>
                    <Link to="/listings">Go back to listings</Link>
                </div>)
                : (<section id="bike-details">
                    <h1>Bike Listing Details</h1>
                    <div className="info-section">
                        <div className="bike-header">
                            <img className="bike-img" src={listing.imageUrl1} alt={`${listing.brand} ${listing.model}`} />
                            <div className="bike-images">
                                <h2>Gallery:</h2>
                                <img src={listing.imageUrl2} alt={`${listing.brand} ${listing.model} Close-Up`} />
                                <img src={listing.imageUrl3} alt={`${listing.brand} ${listing.model} Detail`} />
                            </div>
                            <h1>{listing.brand} {listing.model}</h1>
                            <span className="year">Model Year: {listing.year}</span>
                            <p className="category">Category: {listing.category}</p>
                            <p className="category">Bike Type: {listing.type}</p>
                            <p className="frame-material">Frame Size: {listing.frameSize}</p>
                            <p className="frame-material">Frame Material: {listing.frameMaterial}</p>
                            <p className="frame-material">Wheel Size: {listing.wheelSize}</p>
                            <p className="frame-material">Bike Condition: {listing.condition}</p>
                            <p className="price">Price: {listing.price} {listing.currency}</p>
                            <p className="location">Location: {listing.location}</p>
                        </div>
                        <p className="information">{listing.information}</p>

                        <div className="seller-contacts">
                            <h3>Seller's Contact:</h3>
                            <p><strong>Username:</strong> {username}</p>
                            <p><strong>Email:</strong> {email}</p>
                            <p><strong>Phone Number:</strong> {phoneNumber}</p>
                        </div>

                        {/* Comments Section */}
                        <CommentsDetails comments={comments} />

                        {/* Edit/Delete buttons (Only for the creator of this listing) */}
                        {isOwner && (<div className="buttons">
                            <Link to={`/listings/${listingId}/edit`} className="button">
                                Edit Listing
                            </Link>
                            <button onClick={deleteClicikHandler} className="button">
                                Delete Listing
                            </button>
                        </div>)}

                        <span className="watching">
                            In 5 people’s watchlists.
                        </span>
                    </div>

                    {/* Add Comment (Only for logged-in users, excluding the creator of the current listing) */}
                    {email && (
                        <>
                            <CommentsCreate setComments={setComments} />

                            <div className="watchlist">
                                <button className="button">
                                    Add to Watchlist
                                </button>
                            </div>
                        </>
                    )}

                </section>)
            }
        </>
    );
}
