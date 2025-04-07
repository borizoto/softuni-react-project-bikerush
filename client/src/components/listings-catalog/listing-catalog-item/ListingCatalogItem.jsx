import {Link} from 'react-router'

export default function ListingCatalogItem({
    imageUrl1,
    category,
    brand,
    model,
    price,
    location,
    currency,
    _id
}) {
    return (
        <div className="bikeListing">
            <div className="bike-info">
                <img src={imageUrl1} alt={`${brand} ${model}`} />
                <h6>{category}</h6>
                <h2>{brand} {model}</h2>
                <p>Price: {price} {currency}</p>
                <p>Location: {location}</p>
                <Link to={`/listings/${_id}/details`} className="details-btn">
                    Details
                </Link>
            </div>
        </div>
    );
}