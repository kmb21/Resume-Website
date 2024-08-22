import React from 'react';
import ExperienceCard from './ExperienceCard';
import { experiences } from '../constants';
import "../styles/Experience.css";

const Experience = () => {
  return (
    <div className="experience-page">
    <div className="title">What I have done so far... <br /><div className="work-experience">Work Experience</div></div>
    <div className="experience-container">
      <div className="vertical-line"></div>
      {experiences.map((experience, index) => (
        <div className="experience-wrapper" key={index}>
          <div className="experience-card-icon">
            <img src={experience.icon} alt={experience.company_name} className="company-logo" />
          </div>
          <ExperienceCard experience={experience} index={index} />
        </div>
      ))}
    </div>
    <br />
    </div>
  );
}

export default Experience;
