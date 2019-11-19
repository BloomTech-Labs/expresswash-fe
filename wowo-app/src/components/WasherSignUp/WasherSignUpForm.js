import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../../actions/washerSignupActions.js';
import { MDBBtn, MDBCard, MDBCardTitle, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { MDBProgress } from 'mdbreact';
import WasherSignUpPersonal from './WasherSignUpPersonal.js';
import WasherSignUpAddress from './WasherSignUpAddress.js';
import WasherSignUpReview from './WasherSignUpReview.js';

export class WasherSignUpForm extends Component {
  constructor(props) {
    super(props);
    // create all the state needed for the form and loading components
    this.state = {
      washerSignupReducer: {},
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
  }

  handleSubmit = () => {
    const { firstName, lastName, email, password, phone, street, zipCode, city, usState } = this.state;
    // set up the payload to sent to back-end
    const payload = { email, firstName, lastName, password, phoneNumber: phone, streetAddress: street, city, state: usState, zip: zipCode };

    // invoke the action function for registration
    this.props.register(payload)
      .then(() => {
        // deconstruct the redux state variables
        const { washerSignupData } = this.props.washerSignupReducer;
        // check if the user was created to show confirmation
        
        if(washerSignupData.payload && washerSignupData.payload.user.length) {
          console.log('user was created');
          this.nextStep();
        } else {
          console.log('user was NOT created');
        }
      })
      .catch((err) => {
        console.error(err);
      })
  }

  render() {
    const { step, loadingBar } = this.state;
    const { firstName, lastName, email, password, phone, street, apt, zipCode, city, usState } = this.state;
    const values = { firstName, lastName, email, password, phone, street, apt, zipCode, city, usState };
    // deconstruct the redux state variables
    const { washerSignupError, washerSignupLoading } = this.props.washerSignupReducer;

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
                ( washerSignupLoading
                ? <span><p>Loading..</p><i class="fas fa-spinner fa-pulse fa-5x"></i></span>
                : 
                  <WasherSignUpReview
                  handleSubmit={this.handleSubmit}
                  prevStep={this.prevStep}
                  handleChange={this.handleChange}
                  values={values}
                  submitError={washerSignupError}
                  /> 
                )
              }
              {step === 4 &&
                <span>
                  <h4>Thank you {values.firstName}!</h4>
                  <h5>You are now on your way to making some extra cash with Wo-Wo!</h5>
                  <p>Check your email for the activation letter!</p>
                  <MDBBtn color="primary">Home Page</MDBBtn>
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
  washerSignupReducer: state.washerSignupReducer,
})

const mapDispatchToProps = {
  register,
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(WasherSignUpForm)
);