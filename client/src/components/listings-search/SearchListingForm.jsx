import { useState } from "react";

import { brandOptions, modelOptions } from "../../data/bikeData";
import { useNavigate } from "react-router";
export default function SearchListingForm() {
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        brand: "",
        model: "",
    });

    const changeHandler = (e) => {
        const { name, value } = e.target;

        setFormData((data) => ({
            ...data,
            [name]: value,
            ...(name === "brand" ? { model: "" } : {}),
        }));
    };

    const searchAction = (formData) => {
        const searchData = Object.fromEntries(formData);

        navigate("/search/results", { state: searchData });
    }

    return (
        <section id="create-page">
            <form id="create" action={searchAction}>
                <div className="container">
                    <h1>Search Bike Listing</h1>

                    {/* Brand select */}
                    <label htmlFor="brand">Bike Brand:</label>
                    <select
                        name="brand"
                        id="brand"
                        onChange={changeHandler}
                        value={formData.brand}
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
                    />

                    {/* Bike category */}
                    <label htmlFor="category">Bike category:</label>
                    <select name="category" id="category" defaultValue="">
                        <option value="" disabled hidden>
                            Choose a category
                        </option>
                        <option value="mtb" >MTB</option>
                        <option value="trekking">Trekking</option>
                        <option value="ebike">E-Bike</option>
                        <option value="roadbike">Roadbike</option>
                        <option value="gravel">Gravel</option>
                    </select>

                    {/* Bike type */}
                    <label htmlFor="type">Bike type:</label>
                    <select name="type" id="type" defaultValue="">
                        <option value="" disabled hidden>
                            Choose a type
                        </option>
                        <option value="fully">Full suspension</option>
                        <option value="hardtail">Hardtail</option>
                        <option value="rigid">Rigid</option>
                    </select>

                    {/* Frame size */}
                    <label htmlFor="frameSize">Frame size:</label>
                    <select name="frameSize" id="frameSize" defaultValue="">
                        <option value="" disabled hidden>
                            Choose frame size
                        </option>
                        <option value="xs">XS</option>
                        <option value="s">S</option>
                        <option value="m">M</option>
                        <option value="l">L</option>
                        <option value="xl">XL</option>
                    </select>

                    {/* Frame material */}
                    <label htmlFor="frameMaterial">Frame material:</label>
                    <select name="frameMaterial" id="frameMaterial" defaultValue="" >
                        <option value="" disabled hidden>
                            Choose frame material
                        </option>
                        <option value="aluminium">Aluminium</option>
                        <option value="titanium">Titanium</option>
                        <option value="carbon">Carbon</option>
                        <option value="steel">Steel</option>
                    </select>

                    {/* Wheel size */}
                    <label htmlFor="wheelSize">Wheel Size:</label>
                    <select name="wheelSize" id="wheelSize" defaultValue="" >
                        <option value="" disabled hidden>
                            Choose wheel size
                        </option>
                        <option value="20">20</option>
                        <option value="24">24</option>
                        <option value="26">26</option>
                        <option value="27.5">27.5</option>
                        <option value="29">29</option>
                        <option value="mullet">Mullet</option>
                    </select>

                    {/* Condition */}
                    <label htmlFor="condition">Condition:</label>
                    <select name="condition" id="condition" defaultValue="" >
                        <option value="" disabled hidden>
                            Choose bike condition
                        </option>
                        <option value="used">Used</option>
                        <option value="new">New</option>
                    </select>

                    {/* Location */}
                    <label htmlFor="location">Located in:</label>
                    <select name="location" id="location" defaultValue="" >
                        <option value="" disabled hidden>
                            Choose a city in which the bike is being sold
                        </option>
                        <option value="sofia">Sofia</option>
                        <option value="pleven">Pleven</option>
                        <option value="plovdiv">Plovdiv</option>
                        <option value="varna">Varna</option>
                        <option value="burgas">Burgas</option>
                        <option value="blagoevgrad">Blagoevgrad</option>
                    </select>

                    {/* Price */}
                    <label htmlFor="price">Price:</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        min={1}
                    />

                    {/* Currency */}
                    <label htmlFor="currency">Currency:</label>
                    <select name="currency" id="currency" defaultValue="" >
                        <option value="" disabled hidden>
                            Choose currency
                        </option>
                        <option value="bgn">лв.</option>
                        <option value="eur">EUR</option>
                        <option value="usd">USD</option>
                    </select>

                    <input className="btn submit" type="submit" value="Search Bikes" />
                </div>
            </form>
        </section>
    );
}