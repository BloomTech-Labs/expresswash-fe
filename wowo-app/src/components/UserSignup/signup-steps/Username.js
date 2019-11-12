import React from "./node_modules/react";
import { MDBInput } from "./node_modules/mdbreact";

export default function Username(props) {
  if (props.currentStep !== 1) {
    return null;
  }

  return (
    <div>
      <MDBInput
        id="username"
        name="username"
        type="text"
        label="Username"
        value={props.username}
        onChange={props.handleChange}
      />
      <MDBInput
        id="password"
        name="password"
        type="password"
        label="Password"
        value={props.password}
        onChange={props.handleChange}
      />
    </div>
  );
}
