import React from "react";
import { MDBRow, MDBCol, MDBInput } from "mdbreact";

export default function Address(props) {
  if (props.currentStep !== 3) {
    return null;
  }
  return (
    <div>
      <span>
        <MDBInput
          id="sAddress"
          name="sAddress"
          type="text"
          label="Street Address"
          value={props.sAddress}
          onChange={props.handleChange}
          required
        />
      </span>
      <MDBRow>
        <MDBCol md="6">
          <MDBInput
            id="sAddress2"
            name="sAddress2"
            type="text"
            value={props.sAddress2}
            onChange={props.handleChange}
            label="APT / SUITE / OTHER"
          />
        </MDBCol>
        <MDBCol md="6">
          <MDBInput
            id="zipcode"
            name="zipcode"
            type="number"
            value={props.zipcode}
            onChange={props.handleChange}
            label="ZIP Code"
          />
        </MDBCol>
        <MDBCol md="6">
          <MDBInput
            id="city"
            name="city"
            type="text"
            value={props.city}
            onChange={props.handleChange}
            label="City"
          />
        </MDBCol>
        <MDBCol md="6">
          <MDBInput
            id="state"
            name="state"
            type="text"
            value={props.state}
            onChange={props.handleChange}
            label="State"
          />
        </MDBCol>
      </MDBRow>
    </div>
  );
}
