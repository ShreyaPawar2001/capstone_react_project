import './login.css';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext"; // Ensure this is imported correctly

const LoginPage = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const { login } = useAuth();  // Destructuring login function
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData); // Pass the whole user object to login
    navigate("/");   // Redirect to home page after login
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#f0f0f0" }}>
      <form onSubmit={handleSubmit} style={{ background: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
        <h2>Sign In</h2>
        <input className="login-in" type="text" name="username" placeholder="Username" value={formData.username} onChange={handleInputChange} />
        <input className="login-in" type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
        <input className="login-in" type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} />
        <button className="button-login" type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default LoginPage;
