import React, { Component } from 'react';
import { MDBInput, MDBBtn } from "mdbreact";
import '../App.css';

export class WasherSignUpPersonal extends Component {
  render() {
    const { values } = this.props;
    const nextBtn = () => this.props.nextStep();
    return (
      <span>
        <MDBInput name="fname" label="First Name" />
        <MDBInput name="lname" label="Last Name" />
        <MDBInput name="name" label="Email" />
        <MDBInput name="name" label="Password" />
        <div className="text-center">
          <MDBBtn color="primary" onClick={nextBtn}>Continue</MDBBtn>
        </div>
      </span>
    );
  }
};

export default WasherSignUpPersonal;