import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { getOne } from "../../services/listingsService";

export default function ListingsDetails() {
    const { listingId } = useParams();

    const [listing, setListing] = useState({});

    useEffect(() => {
        getOne(listingId)
            .then(setListing)
    }, [])

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
                    <p className="frame-material">Frame Material: {listing.frameMaterial}</p>
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
                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {/* List all comments for this bike (If any) */}
                        <li className="comment">
                            <p>Content: This bike is amazing! Perfect for mountain trails.</p>
                        </li>
                        <li className="comment">
                            <p>Content: Great value for the price.</p>
                        </li>
                    </ul>
                    {/* Display paragraph: If there are no comments */}
                    <p className="no-comment">No comments yet.</p>
                </div>

                {/* Edit/Delete buttons (Only for the creator of this listing) */}
                <div className="buttons">
                    <a href="#" className="button">
                        Edit Listing
                    </a>
                    <a href="#" className="button">
                        Delete Listing
                    </a>
                </div>

                <span className="watching">
                    5 people watching
                </span>
            </div>

            {/* Add Comment (Only for logged-in users, excluding the creator of the current listing) */}

            <div className="watchlist">
                <button className="button">
                    Add to Watchlist
                </button>
            </div>

            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form">
                    <textarea
                        name="comment"
                        placeholder="Leave a comment..."
                        defaultValue={""}
                    />
                    <input
                        className="btn submit"
                        type="submit"
                        value="Add Comment"
                    />
                </form>
            </article>
        </section>
    );
}
