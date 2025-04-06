export default function ListingsCatalog() {
    return (
        <section id="catalog-page">
            <h1>All Bike Listings</h1>
            {/* Display div: with information about every bike (if any) */}
            <div className="allBikes">
                <div className="bike-info">
                    <img src="./images/bike-1.jpg" alt="Trek Marlin" />
                    <h6>MTB</h6>
                    <h2>Trek Marlin</h2>
                    <p>Price: €600</p>
                    <p>Location: Sofia</p>
                    <a href="#" className="details-button">
                        Details
                    </a>
                </div>
            </div>
            <div className="allBikes">
                <div className="bike-info">
                    <img src="./images/bike-2.jpg" alt="Canyon Ultimate" />
                    <h6>Roadbike</h6>
                    <h2>Canyon Ultimate</h2>
                    <p>Price: €1500</p>
                    <p>Location: Plovdiv</p>
                    <a href="#" className="details-button">
                        Details
                    </a>
                </div>
            </div>
            <div className="allBikes">
                <div className="bike-info">
                    <img src="./images/bike-3.jpg" alt="Radon Slide" />
                    <h6>E-Bike</h6>
                    <h2>Radon Slide</h2>
                    <p>Price: €2200</p>
                    <p>Location: Varna</p>
                    <a href="#" className="details-button">
                        Details
                    </a>
                </div>
            </div>
            {/* Display paragraph: If there is no bike */}
            <h3 className="no-articles">No bike listings available</h3>
        </section>
    );
}
