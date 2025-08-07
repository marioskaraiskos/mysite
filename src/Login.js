import React, { useState } from "react";
import "./Login.css";
import axios from "axios";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/login`, {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("loggedInUser", email);

      setSuccess("Logged in successfully!");
      setLoggedInUser(email);
      if (props.setLoggedInUser) props.setLoggedInUser(email);
    } catch (err) {
      setError("Invalid credentials or server error.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getInitials = (email) => {
    if (!email) return "";
    const namePart = email.split("@")[0];
    return (namePart[0] + namePart[namePart.length - 1]).toUpperCase();
  };

  return (
    <div className="login-form-container">
      {loggedInUser && (
        <div className="login-user-circle">{getInitials(loggedInUser)}</div>
      )}
      <div className="login-title">
        <h2>Login</h2>
      </div>
      <form onSubmit={handleLogin} className="login-auth-form">
        <div className="login-input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="login-input-group">
          <label htmlFor="password">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="login-input-group">
          <label>
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />{" "}
            Show Password
          </label>
        </div>

        {loading && <p style={{ color: "blue" }}>Connecting...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}

        <button type="submit" className="login-btn" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

export default Login;
