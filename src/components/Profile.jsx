import React from "react";
import "../styles/Profile.css"; // Ensure this matches your existing styles
import {logo} from "../assets"
import Footer from "./Footer";

import linkedin from "../assets/linkedin.webp"

import { github } from "../assets";

const Profile = () => {
  return (
    <div>
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
        <a href="https://github.com/kmb21" target="_blank" rel="noopener noreferrer">
            <img className="icons" src={github} alt="Github logo" />
        </a>
        <a href="https://www.linkedin.com/in/maxwell-kumbong/" target="_blank" rel="noopener noreferrer">
            <img className="icons" src={linkedin} alt="LinkedIn logo"/>
        </a>
        </div>

        <div className="profile-bio">
          <p>I'm a skilled software developer with experience in Python, JavaScript, C++, and more. Passionate about AI, machine learning, and building scalable applications.</p>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Profile;
