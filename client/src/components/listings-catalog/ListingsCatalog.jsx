import ListingCatalogItem from "./listing-catalog-item/ListingCatalogItem";

import { useListings } from "../../api/listingsApi";

export default function ListingsCatalog() {
    const { listings } = useListings();

    return (
        <section id="catalog-page">
            <h1>All Bike Listings</h1>
            {/* Display div: with information about every bike (if any) */}
            {listings.length > 0
                ? listings.map(bike => <ListingCatalogItem key={bike._id} {...bike} />)
                : <h3 className="no-articles">No bike listings available.</h3>
            }
        </section>
    );
}
