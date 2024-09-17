import React from "react";
import imageComplete from "../assets/quiz-complete.png";
const Summary = () => {
  return (
    <div id="summary">
      <img src={imageComplete} alt="Trophy icon" />
      <h2>Quiz Completed</h2>
      <div id="summary-stats">
        <p>
          <span className="number">10%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">10%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">10%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        <li>
          <h3>2</h3>
          <p className="question">Question text</p>
          <p className="user-answer">user's answer</p>
        </li>
      </ol>
    </div>
  );
};

export default Summary;
