import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";

import { deleteListing, getOne } from "../../services/listingsService";
import { getAll } from "../../services/commentsService";
import { UserContext } from "../../contexts/UserContext";

import CommentsDetails from "../comments-details/CommentsDetails";
import CommentsCreate from "../comments-create/CommentsCreate";

export default function ListingsDetails() {
    const navigate = useNavigate();

    const { listingId } = useParams();

    const [listing, setListing] = useState({});
    const [comments, setComments] = useState([]);

    const { email } = useContext(UserContext);

    useEffect(() => {
        getOne(listingId)
            .then(setListing);

        getAll(listingId)
            .then(setComments);
    }, [listingId]);

    const deleteClicikHandler = async () => {
        const isConfirmed = confirm(`Are you sure you want to delete ${listing.brand} ${listing.model} listing?`);

        if (!isConfirmed) {
            return;
        }

        await deleteListing(listingId);

        navigate('/listings');
    }

    return (
        <section id="bike-details">
            <h1>Bike Listing Details</h1>
            <div className="info-section">
                <div className="bike-header">
                    <img className="bike-img" src={listing.imageUrl1} alt={`${listing.brand} ${listing.model}`} />
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
                <div className="bike-images">
                    <h2>Gallery:</h2>
                    <img src={listing.imageUrl1} alt={`${listing.brand} ${listing.model} Side View`} />
                    <img src={listing.imageUrl2} alt={`${listing.brand} ${listing.model} Close-Up`} />
                    <img src={listing.imageUrl3} alt={`${listing.brand} ${listing.model} Detail`} />
                </div>

                {/* Comments Section */}
                <CommentsDetails comments={comments} />

                {/* Edit/Delete buttons (Only for the creator of this listing) */}
                <div className="buttons">
                    <Link to={`/listings/${listingId}/edit`} className="button">
                        Edit Listing
                    </Link>
                    <button onClick={deleteClicikHandler} className="button">
                        Delete Listing
                    </button>
                </div>

                <span className="watching">
                    5 people watching
                </span>
            </div>

            {/* Add Comment (Only for logged-in users, excluding the creator of the current listing) */}
            {email && (
                <>
                    <CommentsCreate email={email} setComments={setComments} />

                    <div className="watchlist">
                        <button className="button">
                            Add to Watchlist
                        </button>
                    </div>
                </>
            )}

        </section>
    );
}
