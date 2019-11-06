import React, { Component } from "react";
import { MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";

class CheckInfo extends Component {
  render() {
    if (this.props.currentStep !== 4) {
      return null;
    }

    const {
      firstName,
      lastName,
      email,
      username,
      sAddress,
      phoneNumber,
      zipcode,
      sAddress2,
      city,
      state
    } = this.props;
    return (
      <div>
        <MDBInput label="Username" value={username} require />
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
        <MDBInput label="Street Address" value={sAddress} />
        <MDBRow>
          <MDBCol md="6">
            <MDBInput label="APT / SUITE / OTHER" value={sAddress2} />
          </MDBCol>
          <MDBCol md="6">
            <MDBInput label="zipcode" value={zipcode} />
          </MDBCol>
          <MDBCol md="6">
            <MDBInput label="city" value={city} />
          </MDBCol>
          <MDBCol md="6">
            <MDBInput label="state" value={state} />
          </MDBCol>
        </MDBRow>
        <div className="d-flex justify-content-center">
          <MDBBtn type="submit">submit</MDBBtn>
        </div>
      </div>
    );
  }
}

export default CheckInfo;
