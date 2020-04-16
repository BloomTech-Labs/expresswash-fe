import React from "react";

const ProgressBarFiller = props => {
  return <div className="filler" style={{ width: `${props.percentage}%` }} />;
};

export default ProgressBarFiller;
