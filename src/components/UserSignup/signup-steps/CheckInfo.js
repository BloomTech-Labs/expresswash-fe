import React, { Component } from "react";
import { MDBRow, MDBCol, MDBInput } from "mdbreact";

class CheckInfo extends Component {
  render() {
    if (this.props.currentStep !== 4) {
      return null;
    }

    const {
      firstName,
      lastName,
      email,
      streetAddress,
      phoneNumber,
      zip,
      sAddress2,
      city,
      state
    } = this.props;
    return (
      <div>
        <MDBRow>
          <MDBCol md="6">
            <MDBInput label="First name" value={firstName} required />
          </MDBCol>
          <MDBCol md="6">
            <MDBInput label="Last Name" value={lastName} required />
          </MDBCol>
          <MDBCol md="6">
            <MDBInput label="Phone Number" value={phoneNumber} required />
          </MDBCol>
        </MDBRow>
        <MDBInput label="Email" value={email} />
        <MDBInput label="Street Address" value={streetAddress} required />
        <MDBRow>
          <MDBCol md="6">
            <MDBInput label="APT / SUITE / OTHER" value={sAddress2} />
          </MDBCol>
          <MDBCol md="6">
            <MDBInput label="Zipcode" value={zip} required />
          </MDBCol>
          <MDBCol md="6">
            <MDBInput label="City" value={city} required />
          </MDBCol>
          <MDBCol md="6">
            <MDBInput label="State" value={state} required />
          </MDBCol>
        </MDBRow>
      </div>
    );
  }
}

export default CheckInfo;
