import React from "react";

const EachVehicle = ({ vehicle }) => {
  return (
    <p>
      {vehicle.year} - {vehicle.color} {vehicle.make} {vehicle.model}
    </p>
  );
};

export default EachVehicle;
