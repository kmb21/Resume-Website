import React from "react";
import { motion } from "framer-motion";
import FeedbackCard from "./FeedbackCard";
import '../styles/Feedback.css'; // Import the CSS file

import { testimonials } from "../constants";

import { textVariant } from "../utils/motion";

const Feedbacks = () => {
  return (
    <div className="feedbacks-container">
      <div className="feedbacks-header">
        <motion.div variants={textVariant()}>
          <p className="section-subtext">What others say</p>
          <h2 className="section-headtext">Testimonials.</h2>
        </motion.div>
      </div>
      <div className="feedback-cards">
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Feedbacks;
