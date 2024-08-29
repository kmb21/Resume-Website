import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import '../styles/ProjectCard.css'; // Import the CSS file
import { github } from '../assets';

import { fadeIn } from '../utils/motion';

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div className="project-card" variants={fadeIn("up", "spring", index * 0.5, 0.75)} onClick={() => window.open(source_code_link, "_blank")} whileHover={{ scale: 1.1, cursor: "pointer" }}>
      <Tilt
        className="tilt-container"
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
      >
        <div className="image-container">
          <img src={image} alt="project_image" className="project-image" />

          <div className="image-overlay">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="github-icon-container"
            >
              <img src={github} alt="source code" className="github-icon" />
            </div>
          </div>
        </div>

        <div className="project-details">
          <h3 className="project-title">{name}</h3>
          <p className="project-description">{description}</p>
        </div>

        <div className="tags-container">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`tag ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
