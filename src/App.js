import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";

import './App.css';
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

    // Listen for login changes from Login component
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

  // Helper for initials
  const getInitials = (name) => {
    if (!name) return "";
    if (name.length === 1) return name[0].toUpperCase();
    return (name[0] + name[name.length - 1]).toUpperCase();
  };

  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="container-fluid justify-content-start">
            <div className="buttonContainer">
              <div className="left">
                <Link to="/" className="marioskaraiskos">
                  {"MARIOS_KARAISKOS".split("").map((char, i) => (
                    <span key={i} className="letter">{char}</span>
                  ))}
                </Link>
              </div>
              <div className="right">
                <Link to="/projects" className="projects">Projects</Link>
                <Link to="/contact" className="contact">Contact</Link>
                <button className="theme-toggle-btn" onClick={toggleTheme}>
                  {theme === "light" ? <FaMoon size={24} /> : <FaSun size={24} />}
                </button>
                <Link to="/login" className="login">Login</Link>
                <Link to="/register" className="register">Register</Link>
              </div>
            </div>
          </div>
        </nav>

        {/* User circle always visible if logged in */}
        {loggedInUser && (
          <div className="user-circle">{getInitials(loggedInUser)}</div>
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
