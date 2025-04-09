import { Link } from "react-router";

export default function ProfileListingItem({
    imageUrl1,
    brand,
    model,
    listingId
}) {

    return (
        <div className="bike-item">
            <img src={imageUrl1} alt="bike" />
            <p><strong>Brand:</strong> {brand}</p>
            <p><strong>Model:</strong> {model}</p>
            <Link to={`/listings/${listingId}/details`} className="details-btn">
                Details
            </Link>
        </div>
    );
}