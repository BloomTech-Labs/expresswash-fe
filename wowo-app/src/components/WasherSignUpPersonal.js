import React from 'react';
import { MDBInput, MDBBtn } from "mdbreact";
import '../App.css';

export default function() {
  return (
    <span>
      <MDBInput name="fname" label="First Name" />
      <MDBInput name="lname" label="Last Name" />
      <MDBInput name="name" label="Email" />
      <MDBInput name="name" label="Password" />
      <div className="text-center">
        <MDBBtn color="primary">Continue</MDBBtn>
      </div>
    </span>
  );
};