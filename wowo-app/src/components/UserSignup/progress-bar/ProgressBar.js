import React from "react";
import ProgressBarFiller from "./ProgressBarFiller.js";
import "./UserSignup.css";

const ProgressBar = props => {
  return (
    <div className="usersignup-progress">
      <ProgressBarFiller percentage={props.percentage} />
    </div>
  );
};

export default ProgressBar;
