import { useLocation } from "react-router";

import { useListings } from "../../api/listingsApi";
import ListingCatalogItem from "../listings-catalog/listing-catalog-item/ListingCatalogItem";

export default function SearchResults() {
    const location = useLocation();
    const searchParams = location.state;
    const { listings } = useListings();

    //TODO: Make filtering on the server
    const filteredListings = listings.filter(bike => {
        return (
            (!searchParams.brand || bike.brand === searchParams.brand) &&
            (!searchParams.model || bike.model === searchParams.model) &&
            (!searchParams.year || bike.year === Number(searchParams.year)) &&
            (!searchParams.category || bike.category === searchParams.category) &&
            (!searchParams.type || bike.type === searchParams.type) &&
            (!searchParams.frameSize || bike.frameSize === searchParams.frameSize) &&
            (!searchParams.frameMaterial || bike.frameMaterial === searchParams.frameMaterial) &&
            (!searchParams.wheelSize || bike.wheelSize === searchParams.wheelSize) &&
            (!searchParams.condition || bike.condition === searchParams.condition) &&
            (!searchParams.location || bike.location === searchParams.location) &&
            (!searchParams.price || bike.price <= Number(searchParams.price)) &&
            (!searchParams.currency || bike.currency === searchParams.currency)
        );
    });

    return (
        <section id="search-results">
            <h1>Search Results</h1>
            {filteredListings.length > 0 ? (
                filteredListings.map(bike => (
                    <ListingCatalogItem key={bike._id} {...bike} />
                ))
            ) : (
                <h3 className="no-articles">No bike listings match your search criteria.</h3>
            )}
        </section>
    );
}
