import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./BillingInformation.css";

const BillingInformation = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { caterer, pkg, quantity, addons, totalPrice } = location.state;

    const advancePayment = totalPrice * 0.6; // 60% of the total price

    const handlePayment = () => {
        // Handle payment logic here
        alert("Proceeding to payment gateway...");
        // navigate("/payment-gateway"); // Redirect to payment gateway
    };

    return (
        <div className="billing-information-container">
            {/* Image on the left */}
            <div className="image-section">
                <img src={caterer.image} alt={caterer.name} className="caterer-image" />
            </div>

            {/* Billing information on the right */}
            <div className="billing-info-section">
                <h1>Billing Information</h1>

                {/* Display Caterer and Package Details */}
                <div className="details-section">
                    <h2>{caterer.name} - {pkg.name}</h2>
                    <p>Number of Plates: {quantity}</p>
                    <p>Total Price: ₹{totalPrice}</p>
                    <p>Advance Payment (60%): ₹{advancePayment.toFixed(2)}</p>
                </div>

                {/* Addons Details */}
                <div className="addons-section">
                    <h3>Selected Addons:</h3>
                    <ul>
                        {Object.entries(addons).map(([addon, details]) => (
                            details.count > 0 && (
                                <li key={addon}>
                                    {addon}: {details.count} x ₹{details.price} = ₹{details.count * details.price}
                                </li>
                            )
                        ))}
                    </ul>
                </div>

                {/* Form for Date, Time, and Venue */}
                <div className="form-section">
                    <h3>Event Details</h3>
                    <form>
                        <label>
                            Date:
                            <input type="date" required />
                        </label>
                        <label>
                            Time:
                            <input type="time" required />
                        </label>
                        <label>
                            Venue:
                            <input type="text" placeholder="Enter venue address" required />
                        </label>
                    </form>
                </div>

                {/* Payment Button */}
                <button className="payment-btn" onClick={handlePayment}>
                    Proceed to Pay ₹{advancePayment.toFixed(2)}
                </button>
            </div>
        </div>
    );
};

export default BillingInformation;