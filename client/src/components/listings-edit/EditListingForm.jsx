import { useEffect, useState } from "react";

import { brandOptions, modelOptions } from "../../data/bikeData";
import { getOne } from "../../services/listingsService";
import { useParams } from "react-router";

export default function EditListingForm() {
    const { listingId } = useParams();

    const [formData, setFormData] = useState({
        brand: "",
        model: "",
    });

    const [listing, setListing] = useState({});

    useEffect(() => {
        getOne(listingId)
            .then((listingData) => {
                setListing(listingData);
                setFormData({
                    brand: listingData.brand,
                    model: listingData.model
                });
            })
    }, [])

    const changeHandler = (e) => {
        const { name, value } = e.target;

        setFormData((data) => ({
            ...data,
            [name]: value,
            ...(name === "brand" ? { model: "" } : {}),
        }));
    };

    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     const formData = new FormData(e.target);
    //     const data = Object.fromEntries(formData)
    // }

    return (
        <section id="create-page">
            <form id="create">
                <div className="container">
                    <h1>Create Bike Listing</h1>

                    {/* Brand select */}
                    <label htmlFor="brand">Bike Brand:</label>
                    <select
                        name="brand"
                        id="brand"
                        onChange={changeHandler}
                        value={formData.brand}
                        required
                    >
                        <option value="" disabled hidden>
                            Choose a brand
                        </option>
                        {brandOptions.map((brand) => (
                            <option value={brand} key={brand}>
                                {brand}
                            </option>
                        ))}
                    </select>

                    {/* Model select */}
                    <label htmlFor="model">Bike Model:</label>
                    <select
                        name="model"
                        id="model"
                        onChange={changeHandler}
                        value={formData.model}
                        required
                        disabled={!formData.brand}
                    >
                        <option value="" disabled hidden>
                            Choose a model
                        </option>
                        {modelOptions[formData.brand]?.map((model) => (
                            <option value={model} key={model}>
                                {model}
                            </option>
                        ))}
                    </select>

                    {/* Model year */}
                    <label htmlFor="year">Model year:</label>
                    <input
                        type="number"
                        id="year"
                        name="year"
                        min={1900}
                        max={2025}
                        defaultValue={listing.year}
                        required
                    />

                    {/* Bike category */}
                    <label htmlFor="category">Bike category:</label>
                    <select name="category" id="category" defaultValue={listing.category} required>
                        <option value="" disabled hidden>
                            Choose a category
                        </option>
                        <option value="Mountain Bike" >MTB</option>
                        <option value="Trekking">Trekking</option>
                        <option value="E-Bike">E-Bike</option>
                        <option value="Roadbike">Roadbike</option>
                        <option value="Gravel">Gravel</option>
                    </select>

                    {/* Bike type */}
                    <label htmlFor="type">Bike type:</label>
                    <select name="type" id="type" defaultValue={listing.type} required>
                        <option value="" disabled hidden>
                            Choose a type
                        </option>
                        <option value="Full-Suspension">Full suspension</option>
                        <option value="Hardtail">Hardtail</option>
                        <option value="Rigid">Rigid</option>
                    </select>

                    {/* Frame size */}
                    <label htmlFor="frameSize">Frame size:</label>
                    <select name="frameSize" id="frameSize" defaultValue={listing.frameSize} required>
                        <option value="" disabled hidden>
                            Choose frame size
                        </option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                    </select>

                    {/* Frame material */}
                    <label htmlFor="frameMaterial">Frame material:</label>
                    <select name="frameMaterial" id="frameMaterial" defaultValue={listing.frameMaterial} required>
                        <option value="" disabled hidden>
                            Choose frame material
                        </option>
                        <option value="Aluminium">Aluminium</option>
                        <option value="Titanium">Titanium</option>
                        <option value="Carbon">Carbon</option>
                        <option value="Steel">Steel</option>
                    </select>

                    {/* Wheel size */}
                    <label htmlFor="wheelSize">Wheel Size:</label>
                    <select name="wheelSize" id="wheelSize" defaultValue={listing.wheelSize} required>
                        <option value="" disabled hidden>
                            Choose wheel size
                        </option>
                        <option value="20">20</option>
                        <option value="24">24</option>
                        <option value="26">26</option>
                        <option value="27.5">27.5</option>
                        <option value="29">29</option>
                        <option value="Mullet">Mullet</option>
                    </select>

                    {/* Condition */}
                    <label htmlFor="condition">Condition:</label>
                    <select name="condition" id="condition" defaultValue={listing.condition} required>
                        <option value="" disabled hidden>
                            Choose bike condition
                        </option>
                        <option value="Used">Used</option>
                        <option value="New">New</option>
                    </select>

                    {/* Location */}
                    <label htmlFor="location">Located in:</label>
                    <select name="location" id="location" defaultValue={listing.location} required>
                        <option value="" disabled hidden>
                            Choose a city in which the bike is being sold
                        </option>
                        <option value="Sofia">Sofia</option>
                        <option value="Pleven">Pleven</option>
                        <option value="Plovdiv">Plovdiv</option>
                        <option value="Varna">Varna</option>
                        <option value="Burgas">Burgas</option>
                        <option value="Blagoevgrad">Blagoevgrad</option>
                    </select>

                    {/* Price */}
                    <label htmlFor="price">Price:</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        min={1}
                        defaultValue={listing.price}
                        required
                    />

                    {/* Currency */}
                    <label htmlFor="currency">Currency:</label>
                    <select name="currency" id="currency" defaultValue={listing.currency} required>
                        <option value="" disabled hidden>
                            Choose currency
                        </option>
                        <option value="лв.">лв.</option>
                        <option value="€">EUR</option>
                        <option value="$">USD</option>
                    </select>

                    <label htmlFor="information">Additional information:</label>
                    <textarea name="information" id="information" defaultValue={listing.information} />

                    <label htmlFor="imageUrl1">Image 1:</label>
                    <input
                        type="text"
                        id="imageUrl1"
                        name="imageUrl1"
                        defaultValue={listing.imageUrl1}
                        required
                    />

                    <label htmlFor="imageUrl2">Image 2:</label>
                    <input
                        type="text"
                        id="imageUrl2"
                        name="imageUrl2"
                        defaultValue={listing.imageUrl2}
                        required
                    />

                    <label htmlFor="imageUrl3">Image 3:</label>
                    <input
                        type="text"
                        id="imageUrl3"
                        name="imageUrl3"
                        defaultValue={listing.imageUrl3}
                        required
                    />

                    <input className="btn submit" type="submit" value="Create Listing" />
                </div>
            </form>
        </section>
    );
}