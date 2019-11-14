import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { MDBCard, MDBCardTitle, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { MDBProgress } from 'mdbreact';
import WasherSignUpPersonal from './WasherSignUpPersonal.js';
import WasherSignUpAddress from './WasherSignUpAddress.js';
import WasherSignUpReview from './WasherSignUpReview.js';

export class WasherSignUpForm extends Component {
  state = {
    loadingBar: 25,
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    street: '',
    apt: '',
    zipCode: '',
    city: '',
    usState: ''
  }

  // Set loading bar
  setLoadingBar = step => {
    if(step === 1) {
      return 25;
    }
    if(step === 2) {
      return 50;
    }
    if(step === 3) {
      return 75;
    }
    if(step === 4) {
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
      step: step - 1,
      loadingBar: this.setLoadingBar(step - 1)
    });
  }

  // Handle fields change
  handleChange = input => e => {
    this.setState({[input]: e.target.value});
    console.log(this.state);
  }

  render() {
    const { step, loadingBar } = this.state;
    const { firstName, lastName, email, password, phone, street, apt, zipCode, city, usState } = this.state;
    const values = { firstName, lastName, email, password, phone, street, apt, zipCode, city, usState };

    return (
      <MDBContainer>
        <MDBRow center>
          <MDBCol md="6">
            <MDBCard className="card-body" style={{ width: "100%", marginTop: "1rem" }}>
            <div className="form-group">
              <MDBCardTitle>Washer Sign up</MDBCardTitle>
              <MDBProgress className="my-2" material value={loadingBar} color="info" />
              {step === 1 &&
                <WasherSignUpPersonal
                  nextStep={this.nextStep}
                  handleChange={this.handleChange}
                  values={values}
                />
              }
              {step === 2 &&
                <WasherSignUpAddress
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  handleChange={this.handleChange}
                  values={values}
                />
              }
              {step === 3 &&
                <WasherSignUpReview
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  handleChange={this.handleChange}
                  values={values}
                />
              }
              {step === 4 &&
                <span>
                  <h4>Thank you {values.firstName}!</h4>
                  <h5>You are now on your way to making some extra cash with Wo-Wo!</h5>
                  <p>Check your email for the activation letter!</p>
                </span>
              }
            </div>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
};

const mapStateToProps = (state) => ({
  signupLoading: state.signupLoading,
  signupError: state.signupError,
  signupData: state.signupData,
})

export default withRouter(
  connect(
    mapStateToProps,
  )(WasherSignUpForm)
);