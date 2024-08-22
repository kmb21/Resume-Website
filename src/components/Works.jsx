import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import '../styles/Works.css'; // Import the CSS file
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { projects } from '../constants';

const Works = () => {
  return (
    <div className="works-container">
      <motion.div variants={textVariant()}>
        <p className="section-sub-text">My work</p>
        <h2 className="section-head-text">Projects.</h2>
      </motion.div>

      <div className="works-description">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="works-text"
        >
          Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      <br />
      <br />
    </div>
  );
};

export default SectionWrapper(Works, "work");
