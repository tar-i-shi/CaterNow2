import React, { useState } from 'react';
import './Style/Signup.css';
import { Link, useNavigate } from "react-router-dom";

function Signup() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        contact: '',
        address: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;

        let errorMsg = "";

        if (name === "email") {
            const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail\.com|hotmail\.com)$/;
            if (!emailPattern.test(value)) {
                errorMsg = "Only Gmail and Hotmail emails are allowed!";
            }
        }

        if (name === "contact") {
            const phonePattern = /^[6-9]\d{9}$/;
            if (!phonePattern.test(value)) {
                errorMsg = "Invalid contact number!";
            }
        }

        if (name === "confirmPassword") {
            if (value !== formData.password) {
                errorMsg = "Password and Confirm Password fields do not match!";
            }
        }

        setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMsg }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Ensure no errors exist before proceeding
        if (Object.values(errors).some((error) => error) ||
            Object.values(formData).some((field) => field === "")) {
            alert("Please fix all errors before submitting.");
            return;
        }

        localStorage.setItem("user", JSON.stringify(formData));
        navigate("/login");

        console.log('Signup submitted:', formData);

        // Clear form after submission
        setFormData({
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            contact: '',
            address: ''
        });
        setErrors({});
    };

    return (
        <div className="signup-container">
            <div className="signup-box">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    {Object.keys(formData).map((key) => (
                        <div className="form-group" key={key}>
                            <label>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                            <input
                                type={key.includes("password") ? "password" : "text"}
                                name={key}
                                value={formData[key]}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                            />
                            {errors[key] && <p className="error-msg">{errors[key]}</p>}
                        </div>
                    ))}
                    <button type="submit">Sign Up</button>
                </form>
                <p className="signup-link">
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </div>
        </div>
    );
}

export default Signup;
