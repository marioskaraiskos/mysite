import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(""); // NEW

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      const response = await axios.post("http://localhost:5000/login", {
        username,
        password,
      });
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("loggedInUser", username); // Save to localStorage
      setSuccess(response.data.message || "Logged in successfully!");
      setLoggedInUser(username); // Set the logged-in user
      if (props.setLoggedInUser) props.setLoggedInUser(username); // Lift state up if function is provided
    } catch (err) {
      setError("Invalid credentials or server error.");
      console.error(err);
    }
  };

  // Get first and last letter for the circle
  const getInitials = (name) => {
    if (!name) return "";
    if (name.length === 1) return name[0].toUpperCase();
    return (name[0] + name[name.length - 1]).toUpperCase();
  };

  return (
    <div className="form-container">
      {/* Online user circle at top right */}
      {loggedInUser && (
        <div className="user-circle">
          {getInitials(loggedInUser)}
        </div>
      )}
      <div className="title-container">
        <h2>Login</h2>
      </div>
      <form onSubmit={handleLogin} className="auth-form">
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
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
        <button type="submit" className="btn-primary">Login</button>
      </form>
    </div>
  );
}

export default Login;
