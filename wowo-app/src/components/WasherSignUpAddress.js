import React from 'react';
import { MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import '../App.css';

export default function() {
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
        <MDBBtn color="primary">Continue</MDBBtn>
      </div>
    </span>
  );
};