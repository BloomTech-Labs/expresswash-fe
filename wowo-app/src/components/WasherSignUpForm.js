import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { MDBProgress } from 'mdbreact';
import WasherSignUpPersonal from './WasherSignUpPersonal.js';
// import WasherSignUpAddress from './WasherSignUpAddress.js';
// import WasherSignUpReview from './WasherSignUpReview.js';
import '../App.css';

export class WasherSignUpForm extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  }

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  }

  render() {
    return (
      <MDBContainer>
        <MDBRow center>
          <MDBCol md="6">
            <div className="form-group">
              <p className="h5 text-center mb-4">Sign up</p>
              <MDBProgress className="my-2" material value={33} color="info" />
              <WasherSignUpPersonal />
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
};

export default WasherSignUpForm;