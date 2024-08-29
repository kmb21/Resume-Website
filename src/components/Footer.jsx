// Footer.js
import React from 'react';
import '../styles/Footer.css'; // Assuming you'll create a CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section navigation">
          <a href="/#about" className="footer-link">About</a>
          <a href="/#contact" className="footer-link">Contact</a>
          <a href="/#works" className="footer-link">Works</a>
        </div>
        <div className="footer-section copyright">
          <p>&copy; 2024 Maxwell Kumbong. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
