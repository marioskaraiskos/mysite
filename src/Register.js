import React, { useState } from "react";
import axios from "axios";
import "./Register.css"; 

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage("");
    setIsSuccess(null);
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/register`, {
        username,
        password,
      });
      setMessage(response.data.message);
      setIsSuccess(true);
    } catch (err) {
      setMessage(
        err.response?.data?.message || "Registration failed. Try another username."
      );
      setIsSuccess(false);
    }
  };

  return (
    <div className="register-form-container">
      <div className="register-title">
        <h2>Register</h2>
      </div>
      <form onSubmit={handleRegister} className="register-auth-form">
        <div className="register-input-group">
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
        <div className="register-input-group">
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
          <p className={isSuccess ? "register-success" : "register-error"}>
            {message}
          </p>
        )}
        <button type="submit" className="register-btn">Register</button>
      </form>
    </div>
  );
}

export default Register;
