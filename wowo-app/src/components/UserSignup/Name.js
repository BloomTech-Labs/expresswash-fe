import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";

export default function Name(props) {
  if (props.currentStep !== 2) {
    return null;
  }
  return (
    <div>
      <div className="d-flex justify-content-center p-3">
        <p>Whats Your Name?</p>
      </div>
      <div className="d-flex justify-content-center">
        <MDBCol center>
          <MDBInput
            id="email"
            name="email"
            type="text"
            label="Email"
            value={props.email}
            onChange={props.handleChange}
            className="p-2"
          />
          <MDBInput
            id="firstName"
            name="firstName"
            type="text"
            label="First Name"
            value={props.firstName}
            onChange={props.handleChange}
            className="p-2"
          />
          <MDBInput
            id="lastName"
            name="lastName"
            type="text"
            label="Last Name"
            value={props.lastName}
            onChange={props.handleChange}
            className="p-2"
          />
        </MDBCol>
      </div>
      <div className="d-flex justify-content-center"></div>
    </div>
  );
}
