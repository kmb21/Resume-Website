import React from "react";
import { motion } from "framer-motion";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import "../styles/About.css"; // Import the CSS file

const ServiceCard = ({ index, title, icon }) => {

  return (<motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.0001)}
    className="service-card"
    whileHover={{
      scale: 1.05,
      rotate: 2,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
      transition: { duration: 0.01 }, // Speed up the hover transition
    }}
    whileTap={{
      scale: 0.95,
      transition: { duration: 0.01 }, // Fast tap response
    }}
    whileFocus={{
      outline: "2px solid #ff6ec7",
      scale: 1.02,
      transition: { duration: 0.01 }, // Speed up the focus transition
    }}
  >
    <div className="service-card-inner">
      <img
        src={icon}
        alt={title}
        className="service-card-img"
      />
      <h3>{title}</h3>
    </div>
  </motion.div>);
};

const About = () => {


  return (
    <div className="about-container">
      <motion.div variants={textVariant()}>
        <div className="hr-position">
        <hr className="hr-line" />
        </div>
        <p className="section-sub-text">Introduction</p>
        <h2 className="section-head-text">Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="about-paragraph"
      >
I'm a skilled software developer with a strong foundation in Python, JavaScript, C++, Swift, SQL and expertise in frameworks like React, Node.js, and Django. With experience in TypeScript, HTML, CSS, Swift, MongoDB, DynamoDB and proficiency in object-oriented and functional programming paradigms, I create efficient, scalable, and user-friendly solutions. My toolset includes Git, GitHub, VSCode, and SQL/PostgreSQL, which I use to collaborate closely with clients, bringing ideas to life through innovative, real-world applications. Let's work together to turn your vision into reality!
      </motion.p>

      <div className="services-container">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default SectionWrapper(About, "about");
