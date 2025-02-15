import React from "react";
import "./Style/BirthdayCatering.css";
import weddingCaterers from "../data/BirthdayCatering.json"; // Import the JSON file
import CateringCard from "../components/CateringCard"; // Import the CateringCard component
import "../index.css";
const BirthdayCatering = () => {
    return (
        <div className="birthday-container">
            {/* Hero Section with Background Image */}
            <div className="hero-section">
                <h1>Birthday Parties Catering Services</h1>
                <p>Make your Birthday unforgettable with our exquisite catering services.</p>
            </div>

            {/* Horizontal Caterers List */}
            <div className="caterers-list">
                {weddingCaterers.map((caterer) => (
                    <CateringCard key={caterer.id} caterer={caterer} />
                ))}
            </div>

            {/* Contact Section */}
            <div className="contact-section-cater">
                <h2>Book Our Services</h2>
                <p>Contact us today to plan your dream birthday!</p>
                <button className="contact-btn">Get a Quote</button>
            </div>
        </div>
    );
};

export default BirthdayCatering;