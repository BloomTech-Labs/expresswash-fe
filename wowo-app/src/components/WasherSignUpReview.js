import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import { MDBProgress } from 'mdbreact';
import '../App.css';

export default function() {
  return (
    <MDBContainer>
      <MDBRow center>
        <MDBCol md="6">
          <div className="form-group">
            <p className="h5 text-center mb-4">Sign up</p>
            <MDBProgress className="my-2" material value={33} color="info" />            <MDBInput name="fname" label="First Name" />
            <MDBInput name="lname" label="Last Name" />
            <MDBInput name="name" label="Email" />
            <MDBInput name="name" label="Password" />
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
            <MDBInput label="I agree to the terms and conditions" filled type="checkbox" id="checkbox1" />
            <div className="text-center">
              <MDBBtn color="primary">Register</MDBBtn>
            </div>
          </div>

        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};