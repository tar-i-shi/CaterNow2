import React, { useState } from 'react';
import './Style/Signup.css';
import { Link, useNavigate } from "react-router-dom";

function Signup() {
    const navigate = new useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        contact: '',
        address: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify(formData));
        // Check if password and confirmPassword match
        if (formData.password !== formData.confirmPassword) {
            alert("Password and Confirm Password feilds do not match!");
            return;
        }
        const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail\.com|hotmail\.com)$/;
        if (!emailPattern.test(formData.email)) {
            alert("Invalid email Id");
        }
        const phonePattern = /^[6-9]\d{9}$/;
        if (!phonePattern.test(formData.contact)) {
            alert("Invalid Contact no.");
            return;
        }
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
    };
    const handleBlur = (e) => {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail\.com|hotmail\.com)$/;
        if (!emailPattern.test(formData.email)) {
            setError((prev) => ({ ...prev, email: "Only Gmail and Hotmail emails are allowed!" }));
        } else {
            setError((prev) => ({ ...prev, email: '' }));
        }

        const phonePattern = /^[6-9]\d{9}$/;
        if (!phonePattern.test(formData.contact)) {
            setError((prev) => ({ ...prev, contact: "Invalid contact number!" }));
        } else {
            setError((prev) => ({ ...prev, contact: '' }));
        }
    };
    return (
        <div className="signup-container">
            <div className="signup-box">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="signup-form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Contact No (+91)</label>
                        <input
                            type="text"
                            name="contact"
                            value={formData.contact}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                    </div>
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