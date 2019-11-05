import React, { Component } from 'react';
import { MDBInput, MDBBtn } from "mdbreact";
import '../App.css';

export class WasherSignUpPersonal extends Component {
  render() {
    const { values, handleChange } = this.props;
    const nextBtn = () => this.props.nextStep();
    return (
      <span>
        <MDBInput
          name="firstName"
          onChange={handleChange('firstName')}
          label="First Name"
          defualtValue={values.firstName}
           />
        <MDBInput name="lastName" label="Last Name" />
        <MDBInput name="email" label="Email" />
        <MDBInput name="password" label="Password" />
        <div className="text-center">
          <MDBBtn color="primary" onClick={nextBtn}>Continue</MDBBtn>
        </div>
      </span>
    );
  }
};

export default WasherSignUpPersonal;