import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

import "../styles/Tech.css"

const Tech = () => {
  return (
    <div className="tech-page">
      <div className="hr-position">
      <hr className="hr-line" />
      </div>
    <div className="tech-title">Technical Skills and Technologies</div>
    <div className='tech-container'>
      {technologies.map((technology) => (
        <div className='tech-item' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    <br />

    </div>
  );
};


export default SectionWrapper(Tech, "");