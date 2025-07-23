import React, { useState } from "react";
import './Contact.css'; // ← NEW CSS FILE just for Contact component
import githublogoblack from "./img/github-mark-white.png";
import linkedin from "./img/linkedin.png";
import githublogowhite from "./img/github-mark.png";  
import email from "./img/email.png";
import phone from "./img/phone.png";

function Contact({ theme }) {
    const [showEmail, setShowEmail] = useState(false);
    const [showPhone, setShowPhone] = useState(false);

    return (
        <div className="contact-page">
            <div className="contact-item">
                <img src={theme === "light" ? githublogoblack : githublogowhite} alt="Github" className="contact-icon"/>
                <a href="https://github.com/marioskaraiskos" target="_blank" rel="noopener noreferrer" className="contact-link">
                    My Github
                </a>
            </div>
            <div className="contact-item">
                <img src={linkedin} alt="LinkedIn" className="contact-icon"/>
                <a href="https://www.linkedin.com/in/marios-karaiskos/" target="_blank" rel="noopener noreferrer" className="contact-link">
                    My LinkedIn
                </a>
            </div>
            <div className="contact-item" style={{ position: "relative" }}>
                <img src={phone} alt="Phone" className="contact-icon"/>
                <button type="button" className="contact-link" onClick={() => setShowPhone(!showPhone)}>
                    My Phone
                </button>
                {showPhone && (
                    <span className="contact-popup">6982096772</span>
                )}
            </div>
            <div className="contact-item" style={{ position: "relative" }}>
                <img src={email} alt="Email" className="contact-icon"/>
                <button type="button" className="contact-link" onClick={() => setShowEmail(!showEmail)}>
                    My Email
                </button>
                {showEmail && (
                    <span className="contact-popup">marioskaraiskosbusiness@gmail.com</span>
                )}
            </div>
        </div>
    );
}

export default Contact;
