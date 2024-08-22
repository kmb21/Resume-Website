import React from "react";
import "../styles/Profile.css"; // Ensure this matches your existing styles
import Navbar from "./Navbar";
import {logo} from "../assets"

const Profile = () => {
  return (
    <div>
    <Navbar />
    <div className="profile-page">
      <div className="profile-container">
        <img
          src={logo}
          alt="Maxwell Kumbong"
          className="profile-pic"
        />
        <h1 className="profile-name">Maxwell Kumbong</h1>
        <p className="profile-pronouns">Pronouns: He/Him</p>
        
        <div className="profile-links">
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="profile-link">
            <img src="github-icon.png" alt="GitHub" className="social-icon" />
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="profile-link">
            <img src="linkedin-icon.png" alt="LinkedIn" className="social-icon" />
            LinkedIn
          </a>
          <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer" className="profile-link">
            <img src="twitter-icon.png" alt="Twitter" className="social-icon" />
            Twitter
          </a>
        </div>

        <div className="profile-bio">
          <p>I'm a skilled software developer with experience in Python, JavaScript, C++, and more. Passionate about AI, machine learning, and building scalable applications.</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Profile;
