import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { MDBProgress } from 'mdbreact';
import WasherSignUpPersonal from './WasherSignUpPersonal.js';
import WasherSignUpAddress from './WasherSignUpAddress.js';
// import WasherSignUpReview from './WasherSignUpReview.js';
import '../App.css';

export class WasherSignUpForm extends Component {
  state = {
    loadingBar: 33,
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }

  // Set loading bar
  setLoadingBar = step => {
    if(step === 1) {
      return 33;
    }
    if(step === 2) {
      return 66;
    }
    if(step === 3) {
      return 100;
    }
  }

  // Go to the next form step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
      loadingBar: this.setLoadingBar(step + 1)
    });
  }

  // Go back to prev form step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  }

  // Handle fields change
  handleChange = input => e => {
    this.setState({[input]: e.target.value});
  }

  render() {
    const { step, loadingBar } = this.state;
    const { firstName, lastName, email, password } = this.state;
    const values = { firstName, lastName, email, password };

    return (
      <MDBContainer>
        <MDBRow center>
          <MDBCol md="6">
            <div className="form-group">
              <p className="h5 text-center mb-4">Sign up</p>
              <MDBProgress className="my-2" material value={loadingBar} color="info" />
              {step === 1 &&
                <WasherSignUpPersonal
                  nextStep={this.nextStep}
                  handleChange={this.handleChange}
                  values={this.values}
                />
              }
              {step === 2 &&
                <WasherSignUpAddress
                  nextStep={this.nextStep}
                  handleChange={this.handleChange}
                  values={this.values}
                />
              }
              {step === 3 &&
                  <h1>You're on step 3</h1>
              }
              {step === 4 &&
                  <h1>You're on step 4</h1>
              }
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
};

export default WasherSignUpForm;