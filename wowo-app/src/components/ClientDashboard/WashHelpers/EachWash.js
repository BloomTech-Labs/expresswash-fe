import React from "react";

const EachWash = props => {
  return (
    <div style={{ borderBottom: "2px dotted grey" }}>
      <p>Address: {props.eachwash.washAddress}</p>
      <p>Paid: {props.eachwash.paid}</p>
      <p>Vehicle: {props.eachwash.clientCarId}</p>
      <p>Date: {props.eachwash.creationDate.toString()}</p>
    </div>
  );
};

export default EachWash;
