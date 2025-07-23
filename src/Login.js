import React, { useState } from "react";
import "./Login.css"; // Only affects Login component
import axios from "axios";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loggedInUser, setLoggedInUser] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/login`, {
        username,
        password,
      });
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("loggedInUser", username);
      setSuccess(response.data.message || "Logged in successfully!");
      setLoggedInUser(username);
      if (props.setLoggedInUser) props.setLoggedInUser(username);
    } catch (err) {
      setError("Invalid credentials or server error.");
      console.error(err);
    }
  };

  const getInitials = (name) => {
    if (!name) return "";
    if (name.length === 1) return name[0].toUpperCase();
    return (name[0] + name[name.length - 1]).toUpperCase();
  };

  return (
    <div className="login-form-container">
      {loggedInUser && (
        <div className="login-user-circle">
          {getInitials(loggedInUser)}
        </div>
      )}
      <div className="login-title">
        <h2>Login</h2>
      </div>
      <form onSubmit={handleLogin} className="login-auth-form">
        <div className="login-input-group">
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
        <div className="login-input-group">
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
        <button type="submit" className="login-btn">Login</button>
      </form>
    </div>
  );
}

export default Login;
