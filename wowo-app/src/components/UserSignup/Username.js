import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";

export default function Username(props) {
  if (props.currentStep !== 1) {
    return null;
  }

  return (
    <div>
      <MDBContainer>
        <MDBCol center>
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
        </MDBCol>
      </MDBContainer>
    </div>
  );
}
