import React from "react";
import EachVehicle from "./EachVehicle.js";

const VehicleList = (props) => {
  return (
    <div>
      {!props.vehicles[0] && <div>Please add a vehicle</div>}
      {props.vehicles &&
        props.vehicles.map((vehicle) => (
          <EachVehicle
            key={vehicle.carId}
            vehicle={vehicle}
            deleteToggle={props.deleteToggle}
          />
        ))}
    </div>
  );
};

export default VehicleList;
