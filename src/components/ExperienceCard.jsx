import React, { useState } from 'react';
import { motion } from "framer-motion";
import "../styles/Experience.css";
import { fadeIn} from "../utils/motion";
const ExperienceCard = ({ experience, index }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  return (
    <motion.div
      className={`experience-card ${expanded ? 'expanded' : ''}`}
      variants={fadeIn("right", "spring", index * 0.3, 0.75)}
      initial="hidden"
      animate="show"
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
        transition: { duration: 0.3 },
      }}
      whileTap={{
        scale: 0.95,
        transition: { duration: 0.2 },
      }}
    >
      <h3 className="experience-card-title">{experience.title}</h3>
      <p className="experience-card-date">{experience.date}</p>
      <div className={`experience-card-content ${expanded ? 'expanded' : ''}`}>
        <ul>
          {experience.points.map((point, i) => (
            <li key={i} style={{ marginBottom: '10px' }}>{point}</li>
          ))}
        </ul>
      </div>
      <span className="experience-see-more" onClick={toggleExpanded}>
        {expanded ? "See Less" : "See More"}
      </span>
    </motion.div>
  );
};


export default ExperienceCard;
