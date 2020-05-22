import React from "react";
import EachVehicle from "./EachVehicle.js";

const VehicleList = (props) => {
  return (
    <div>
      {!props.vehicles && <div>Please add a vehicle</div>}
      {props.vehicles.map((vehicle) => (
        <EachVehicle key={vehicle.carId} vehicle={vehicle} />
      ))}
    </div>
  );
};

export default VehicleList;
