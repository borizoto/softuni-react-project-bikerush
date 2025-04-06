export default function ListingCatalogItem({
    imageUrl1,
    category,
    brand,
    model,
    price,
    location,
    currency
}) {
    return (
        <div className="bikeListing">
            <div className="bike-info">
                <img src={imageUrl1} alt={`${brand} ${model}`} />
                <h6>{category}</h6>
                <h2>{brand} {model}</h2>
                <p>Price: {price} {currency}</p>
                <p>Location: {location}</p>
                <a href="#" className="details-button">
                    Details
                </a>
            </div>
        </div>
    );
}