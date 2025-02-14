import React from "react";
import "./Style/PrivateCatering.css";
import PrivateCaterers from "../data/PrivateCatering.json"; // Import the JSON file
import CateringCard from "../components/CateringCard"; // Import the CateringCard component
import "../index.css";
const PrivateParties = () => {
    return (
        <div className="private-container">
            {/* Hero Section with Background Image */}
            <div className="hero-section">
                <h1>Private Catering Services</h1>
                <p>Make your Private Parties an unforgettable experience with our exquisite catering services.</p>
            </div>

            {/* Horizontal Caterers List */}
            <div className="caterers-list">
                {PrivateCaterers.map((caterer) => (
                    <CateringCard key={caterer.id} caterer={caterer} />
                ))}
            </div>

            {/* Contact Section */}
            <div className="contact-section-cater">
                <h2>Book Our Services</h2>
                <p>Contact us today to plan your dream parties!</p>
                <button className="contact-btn">Get a Quote</button>
            </div>
        </div>

    );


};

export default PrivateParties;
