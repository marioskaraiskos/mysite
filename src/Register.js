import React, { useState } from "react";
import axios from "axios";
import "./Register.css";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState(""); // new
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage("");
    setIsSuccess(null);

      if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      setIsSuccess(false);
      return; // stop submission
    }

    
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/register`, {
        username,
        email,
        password,
      });
      setMessage(response.data.msg || "Registration successful.");
      setIsSuccess(true);
    } catch (err) {
      setMessage(
        err.response?.data?.msg || "Registration failed. Try another email or username."
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
        <div className="register-input-group">
          <label htmlFor="password">Password</label>
          <input
  type={showPassword ? "text" : "password"}
  id="password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  placeholder="Enter your password"
  required
/>
<label htmlFor="confirmPassword">Confirm Password</label>
<input
  type={showPassword ? "text" : "password"}
  id="confirmPassword"
  value={confirmPassword}
  onChange={(e) => setConfirmPassword(e.target.value)}
  placeholder="Repeat your password"
  required
/>

          <label>
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />{" "}
            Show Password
          </label>
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
