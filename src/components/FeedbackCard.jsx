import React from "react";
import { motion } from "framer-motion";
import '../styles/FeedbackCard.css'; // Import the CSS file

import { fadeIn} from "../utils/motion";

const FeedbackCard = ({ index, testimonial, name, designation, company, image }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="feedback-card"
  >
    <p className="quote-symbol">"</p>

    <div className="testimonial-content">
      <p className="testimonial-text">{testimonial}</p>

      <div className="testimonial-author">
        <div className="author-info">
          <p className="author-name">
            <span className="blue-gradient">@</span> {name}
          </p>
          <p className="author-designation">
            {designation} at {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="author-image"
        />
      </div>
    </div>
  </motion.div>
);

export default FeedbackCard;
