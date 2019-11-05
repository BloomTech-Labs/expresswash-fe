import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import '../App.css';

export class WasherSignUpAddress extends Component {
  render() {
    const { values } = this.props;
    const nextBtn = () => this.props.nextStep();
    const prevBtn = () => this.props.prevStep();
    return (
      <span>
        <MDBInput name="name" label="Phone Number" />
        <MDBInput name="name" label="Street Address" />
        <MDBRow>
          <MDBCol md="6">
          <MDBInput name="name" label="Apt / Suite / Other" />
        </MDBCol>
        <MDBCol md="6">
          <MDBInput name="name" label="Zip code" />
        </MDBCol>
        <MDBCol md="6">
          <MDBInput name="name" label="City" />
        </MDBCol>
        <MDBCol md="6">
          <MDBInput name="name" label="State" />
        </MDBCol>
        </MDBRow>
        <div className="text-center">
          <MDBBtn color="info" onClick={prevBtn}>Back</MDBBtn>
          <MDBBtn color="primary" onClick={nextBtn}>Continue</MDBBtn>
        </div>
      </span>
    );
  }
};

export default WasherSignUpAddress;