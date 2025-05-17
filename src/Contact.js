import React, { useState } from "react";
import './App.css';
import githublogoblack from "./img/github-mark-white.png";
import linkedin from "./img/linkedin.png";
import githublogowhite from "./img/github-mark.png";  
import email from "./img/email.png";
import phone from "./img/phone.png";

function Contact({theme}) {
    const [showEmail, setShowEmail] = useState(false);
    const [showPhone, setShowPhone] = useState(false);

    return (
        <div className="contact-page">
            <div className="github-container">
                <img src={theme === "light" ? githublogoblack : githublogowhite} alt="Github" className="icon"/>
                <a href="https://github.com/marioskaraiskos" target="_blank" rel="noopener noreferrer" className="github">
                    My Github
                </a>
            </div>
            <div className="linkedin-container">
                <img src={linkedin} alt="LinkedIn" className="icon"/>
                <a href="https://www.linkedin.com/in/marios-karaiskos/" target="_blank" rel="noopener noreferrer" className="github">
                    My LinkedIn
                </a>
            </div>
            
            <div className="phone-container" style={{ position: "relative" }}>
                <img src={phone} alt="Phone" className="icon"/>
                <button
                  type="button"
                  className="github"
                  onClick={() => setShowPhone(!showPhone)}
                  style={{ cursor: "pointer" }}
                >
                  My Phone
                </button>
                {showPhone && (
                  <span
                    style={{
                      position: "absolute",
                      left: "160px", // was 100px
                      top: "50%",
                      transform: "translateY(-50%)",
                      background: "#f3f3f3",
                      color: "#222",
                      padding: "2px 8px",
                      borderRadius: "6px",
                      fontWeight: "bold",
                      whiteSpace: "nowrap",
                      zIndex: 1
                    }}
                  >
                    6982096772
                  </span>
                )}
            </div>
            <div className="email-container" style={{ position: "relative" }}>
                <img src={email} alt="Email" className="icon"/>
                <button
                  type="button"
                  className="github"
                  onClick={() => setShowEmail(!showEmail)}
                  style={{ cursor: "pointer" }}
                >
                  My Email
                </button>
                {showEmail && (
                  <span
                    style={{
                      position: "absolute",
                      left: "160px", // was 100px
                      top: "50%",
                      transform: "translateY(-50%)",
                      background: "#f3f3f3",
                      color: "#222",
                      padding: "2px 8px",
                      borderRadius: "6px",
                      fontWeight: "bold",
                      whiteSpace: "nowrap",
                      zIndex: 1
                    }}
                  >
                    marioskaraiskosbusiness@gmail.com
                  </span>
                )}
            </div>
        </div>
    );
}

export default Contact;