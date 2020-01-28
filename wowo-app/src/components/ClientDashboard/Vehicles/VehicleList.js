import React from "react";
import EachVehicle from "./EachVehicle.js";

const VehicleList = props => {
  return (
    <div>
      <p>
        {props.vehicles.map(eachvehicle => (
          <EachVehicle eachvehicle={eachvehicle} />
        ))}
      </p>
    </div>
  );
};

export default VehicleList;
