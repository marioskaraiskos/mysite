import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";

import "./App.css";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import Login from "./Login";
import Register from "./Register";

function App() {
  const [theme, setTheme] = useState("light");
  const [loggedInUser, setLoggedInUser] = useState(localStorage.getItem("loggedInUser") || "");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.body.setAttribute("data-theme", savedTheme);

    const handleStorage = () => {
      setLoggedInUser(localStorage.getItem("loggedInUser") || "");
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const getInitials = (name) => {
    if (!name) return "";
    if (name.length === 1) return name[0].toUpperCase();
    return (name[0] + name[name.length - 1]).toUpperCase();
  };

  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="navbar-container">
            <Link to="/" className="logo">
              {"MARIOS_KARAISKOS".split("").map((char, i) => (
                <span key={i} className="letter">{char}</span>
              ))}
            </Link>
            <div className="nav-links">
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
              <button className="theme-toggle-btn" onClick={toggleTheme}>
                {theme === "light" ? <FaMoon size={20} /> : <FaSun size={20} />}
              </button>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </div>
          </div>
        </nav>

        {loggedInUser && (
          <div className="user-circle" title={loggedInUser}>
            {getInitials(loggedInUser)}
          </div>
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login setLoggedInUser={setLoggedInUser} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
