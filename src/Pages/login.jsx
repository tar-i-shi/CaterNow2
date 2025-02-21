import React, { useState } from "react";
import "./Style/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";

function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();

    // Single state object for email & password
    const [formData, setFormData] = useState({ email: "", password: "" });

    // Handle input changes dynamically
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Retrieve stored user from localStorage
        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (storedUser && storedUser.email === formData.email && storedUser.password === formData.password) {
            login(storedUser);  // Log in user
            navigate("/");  // Redirect to home
        } else {
            alert("Invalid email or password");
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="login-form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
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
                    <button type="submit">Login</button>
                </form>
                <p className="signup-link">
                    Don't have an account? <Link to="/signup">Sign up</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;