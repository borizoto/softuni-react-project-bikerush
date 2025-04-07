export default function ListingsDetails() {
    return (
        <section id="bike-details">
            <h1>Bike Listing Details</h1>
            <div className="info-section">
                <div className="bike-header">
                    <img className="bike-img" src="images/trek-marlin.jpg" alt="Trek Marlin" />
                    <h1>Trek Marlin 7</h1>
                    <span className="year">Model Year: 2022</span>
                    <p className="category">Category: MTB</p>
                    <p className="frame-material">Frame Material: Aluminium</p>
                    <p className="price">Price: €600</p>
                    <p className="location">Location: Sofia</p>
                </div>
                <p className="information">
                    A great mountain bike perfect for both trails and rough terrains. Equipped with high-quality components and designed to handle tough rides.
                    Ideal for beginners and intermediate riders looking for a reliable bike.
                </p>
                <div className="bike-images">
                    <h2>Gallery:</h2>
                    <img src="images/bike-1-1.jpg" alt="Trek Marlin Side View" />
                    <img src="images/bike-1-2.jpg" alt="Trek Marlin Close-Up" />
                    <img src="images/bike-1-3.jpg" alt="Trek Marlin Detail" />
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
