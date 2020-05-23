import React from "react";
import { MDBIcon } from "mdbreact";

const EachVehicle = ({ vehicle, deleteToggle }) => {
  return (
    <p>
      {vehicle.year} - {vehicle.color} {vehicle.make} {vehicle.model} -{" "}
      {vehicle.licensePlate}{" "}
      <MDBIcon icon="times" onClick={() => deleteToggle(vehicle.carId)} />
    </p>
  );
};

export default EachVehicle;
