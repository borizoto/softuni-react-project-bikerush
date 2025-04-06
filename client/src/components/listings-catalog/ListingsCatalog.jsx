import { useEffect, useState } from "react";
import { getAll } from "../../services/listingsService";
import ListingCatalogItem from "./listing-catalog-item/ListingCatalogItem";

export default function ListingsCatalog() {
    const [bikes, setBikes] = useState([]);

    useEffect(() => {
        getAll()
            .then(setBikes)
    }, [])

    return (
        <section id="catalog-page">
            <h1>All Bike Listings</h1>
            {/* Display div: with information about every bike (if any) */}
            {bikes.length > 0 
            ? bikes.map(bike => <ListingCatalogItem key={bike._id} {...bike} />)
            : <h3 className="no-articles">No bike listings available.</h3>
        }
        </section>
    );
}
