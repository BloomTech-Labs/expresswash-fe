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
          type="text"
          onChange={handleChange('firstName')}
          label="First Name"
          value={values.firstName}
        />
        <MDBInput
          name="lastName"
          type="text"
          onChange={handleChange('lastName')}
          label="Last Name"
          value={values.lastName}
        />
        <MDBInput
          name="email"
          type="email"
          onChange={handleChange('email')}
          label="Email"
          value={values.email}
        />
        <MDBInput
          name="password"
          type="password"
          onChange={handleChange('password')}
          label="Password"
          value={values.password}
        />
        <div className="text-center">
          <MDBBtn color="info" onClick={nextBtn}>Continue</MDBBtn>
        </div>
      </span>
    );
  }
};

export default WasherSignUpPersonal;