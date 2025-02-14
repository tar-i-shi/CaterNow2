import React from "react";
import "./Style/BBQCatering.css";
import weddingCaterers from "../data/BBQCatering.json"; // Import the JSON file
import CateringCard from "../components/CateringCard"; // Import the CateringCard component
import "../index.css";
const BBQCatering = () => {
    return (
        <div className="wedding-container">
            {/* Hero Section with Background Image */}
            <div className="hero-section">
                <h1>BBQ Catering Services</h1>
                <p>Make your BBQ day unforgettable with our exquisite catering services.</p>
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
                <p>Contact us today to plan your dream BBQ feast!</p>
                <button className="contact-btn">Get a Quote</button>
            </div>
        </div>
    );
};



export default BBQCatering;
