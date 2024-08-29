import React from "react";
import { ComputersCanvas } from "./canvas";
import "../styles/Hero.css"; // Import the CSS file

const Hero = () => {
  const [isArrowVisible, setArrowVisible] = React.useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setArrowVisible(true);  // Show the arrow when at the top
      } else if (window.scrollY > window.innerHeight / 2) {
        setArrowVisible(false); // Hide the arrow when scrolled past half the viewport height
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    setArrowVisible(false);
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="line-container">
          <div className="circle" />
          <div className="line line-sm" />
        </div>

        <div>
          <h1 className="hero-heading">
            Hi, I'm <span className="hero-highlight">Maxwell</span>
          </h1>
          <p className="hero-subheading">
            I develop 3D visuals, user <br className="sm:block hidden" />
            interfaces, web and mobile applications,<br /> and on a mission to advance AI
          </p>
        </div>
      </div>
      <div className="computerCanvas">
      <ComputersCanvas />
      </div>
      {isArrowVisible && (
        <div className="down-arrow" onClick={handleClick}>
          <img src="https://d35aaqx5ub95lt.cloudfront.net/images/a77fdd73877392e68bca0da5a2d72520.svg" alt="Down Arrow" />
        </div>
      )}

    </section>
  );
};

export default Hero;
