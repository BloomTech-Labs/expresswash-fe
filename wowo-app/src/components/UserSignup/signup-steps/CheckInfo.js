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
      State
    } = this.props;
    return (
      <div>
        <MDBRow>
          <MDBCol md="6">
            <MDBInput label="First name" value={firstName} />
          </MDBCol>
          <MDBCol md="6">
            <MDBInput label="Last Name" value={lastName} />
          </MDBCol>
          <MDBCol md="6">
            <MDBInput label="Phone Number" value={phoneNumber} />
          </MDBCol>
        </MDBRow>
        <MDBInput label="Email" value={email} />
        <MDBInput label="Street Address" value={streetAddress} />
        <MDBRow>
          <MDBCol md="6">
            <MDBInput label="APT / SUITE / OTHER" value={sAddress2} />
          </MDBCol>
          <MDBCol md="6">
            <MDBInput label="Zipcode" value={zip} />
          </MDBCol>
          <MDBCol md="6">
            <MDBInput label="City" value={city} />
          </MDBCol>
          <MDBCol md="6">
            <MDBInput label="State" value={State} />
          </MDBCol>
        </MDBRow>
      </div>
    );
  }
}

export default CheckInfo;
