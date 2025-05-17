import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(null); // Track message type

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage("");
    setIsSuccess(null);
    try {
      const response = await axios.post("http://localhost:5000/register", {
        username,
        password,
      });
      setMessage(response.data.message);
      setIsSuccess(true); // Success
      // Optionally, redirect to login page:
      // window.location.href = "/mysite#/login";
    } catch (err) {
      setMessage(
        err.response?.data?.message || "Registration failed. Try another username."
      );
      setIsSuccess(false); // Error
    }
  };

  return (
    <div className="form-container">
      <div className="title-container">
        <h2>Register</h2>
      </div>
      <form onSubmit={handleRegister} className="auth-form">
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        {message && (
          <p style={{ color: isSuccess ? "green" : "red" }}>{message}</p>
        )}
        <button type="submit" className="btn-primary">Register</button>
      </form>
    </div>
  );
}

export default Register;
