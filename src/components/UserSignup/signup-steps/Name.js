import React from "react";
import { MDBRow, MDBCol, MDBInput } from "mdbreact";

export default function Name(props) {
  if (props.currentStep !== 2) {
    return null;
  }
  return (
    <div>
      <MDBRow>
        <MDBCol md="6">
          <MDBInput
            id="firstName"
            name="firstName"
            type="text"
            label="First Name"
            value={props.firstName}
            onChange={props.handleChange}
          />
        </MDBCol>
        <MDBCol md="6">
          <MDBInput
            id="lastName"
            name="lastName"
            type="text"
            label="Last Name"
            value={props.lastName}
            onChange={props.handleChange}
          />
        </MDBCol>
      </MDBRow>
      <div>
        <MDBRow>
          <MDBCol md="6">
            <MDBInput
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              label="Phone Number"
              value={props.phoneNumber}
              onChange={props.handleChange}
            />
          </MDBCol>
        </MDBRow>
      </div>
    </div>
  );
}
