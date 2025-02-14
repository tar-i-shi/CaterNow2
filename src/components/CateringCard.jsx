import React from "react";
import "./CateringCard.css"; // Optional: Add specific styles for the card

const CateringCard = ({ caterer }) => {
    const { name, rating, location, image, description } = caterer;

    return (
        <div className="caterer-card">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p className="rating">⭐️ {rating}</p>
            <p className="location">{location}</p>

            {/* Hover Overlay */}
            <div className="card-overlay">
                <p className="description">{description}</p>
                <button className="book-now-btn">Book Now</button>
            </div>
        </div>
    );
};

export default CateringCard;