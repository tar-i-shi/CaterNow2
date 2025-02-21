import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./PackageCustomization.css";

const PackageCustomization = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { caterer, pkg } = location.state;

    const [quantity, setQuantity] = useState(1);
    const [selectedItems, setSelectedItems] = useState(pkg.details.split(" + "));

    // State for addons
    const [addons, setAddons] = useState({
        drinks: { count: 0, price: 50 },
        starter: { count: 0, price: 70 },
        mainDish: { count: 0, price: 100 },
        dessert: { count: 0, price: 100 },
    });

    const handleQuantityChange = (e) => {
        setQuantity(parseInt(e.target.value, 10));
    };

    const handleAddonChange = (addon, action) => {
        setAddons((prev) => ({
            ...prev,
            [addon]: {
                ...prev[addon],
                count: action === "increment" ? prev[addon].count + 1 : Math.max(prev[addon].count - 1, 0),
            },
        }));
    };

    const calculateBasePrice = () => {
        return parseInt(pkg.price.replace(/[^0-9]/g, ""), 10) * quantity;
    };

    const calculateAddonsPrice = () => {
        return Object.values(addons).reduce((total, addon) => total + addon.count * addon.price, 0);
    };

    const calculateTotalPrice = () => {
        return calculateBasePrice() + calculateAddonsPrice();
    };

    return (
        <div className="package-customization">
            {/* Image on the left */}
            <img src={caterer.image} alt={caterer.name} className="caterer-image" />

            {/* Details on the right */}
            <div className="details-container">
                <h1>{caterer.name} - {pkg.name}</h1>

                {/* Package Items (Static Display) */}
                <div className="package-details">
                    <h3>Package Items:</h3>
                    <ul>
                        {selectedItems.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className="quantity-section">
                    <label>
                        Number of Plates :<span> </span>

                        <input
                            type="number"
                            value={quantity}
                            onChange={handleQuantityChange}
                            min="1"
                        />
                    </label>
                </div>

                {/* Addons Section */}
                <div className="addons-section">
                    <h3>Addons per Plate:</h3>
                    <div className="addon">
                        <span>Drinks (₹50 each):</span>
                        <button onClick={() => handleAddonChange("drinks", "decrement")}>-</button>
                        <span>{addons.drinks.count}</span>
                        <button onClick={() => handleAddonChange("drinks", "increment")}>+</button>
                    </div>
                    <div className="addon">
                        <span>Starter (₹70 each):</span>
                        <button onClick={() => handleAddonChange("starter", "decrement")}>-</button>
                        <span>{addons.starter.count}</span>
                        <button onClick={() => handleAddonChange("starter", "increment")}>+</button>
                    </div>
                    <div className="addon">
                        <span>Main Dish (₹100 each):</span>
                        <button onClick={() => handleAddonChange("mainDish", "decrement")}>-</button>
                        <span>{addons.mainDish.count}</span>
                        <button onClick={() => handleAddonChange("mainDish", "increment")}>+</button>
                    </div>
                    <div className="addon">
                        <span>Dessert (₹100 each):</span>
                        <button onClick={() => handleAddonChange("dessert", "decrement")}>-</button>
                        <span>{addons.dessert.count}</span>
                        <button onClick={() => handleAddonChange("dessert", "increment")}>+</button>
                    </div>
                </div>

                <div className="price-section">
                    <h3>Total Price: ₹{calculateTotalPrice()}</h3>
                </div>

                <button
                    className="confirm-booking-btn"
                    onClick={() =>
                        navigate("/billing-information", {
                            state: {
                                caterer,
                                pkg,
                                quantity,
                                addons,
                                totalPrice: calculateTotalPrice(),
                            },
                        })
                    }
                >
                    Confirm Booking
                </button>
            </div>
        </div>
    );
};

export default PackageCustomization;