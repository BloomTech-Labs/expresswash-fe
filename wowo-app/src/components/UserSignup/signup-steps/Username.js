import React from "react";
import { MDBInput } from "mdbreact";

export default function Username(props) {
  if (props.currentStep !== 1) {
    return null;
  }

  return (
    <div>
      <MDBInput
        id="email"
        name="email"
        type="text"
        label="Email"
        value={props.email}
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
