import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { register } from '../../actions/washerSignupActions.js';
import { loginUser } from '../../actions/actionTypes.js';
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
    this.props.washerSignupReducer.washerSignupError = null;
  }

  // Handle fields change
  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  setAutoAddress = address => {
    this.setState({
      street: address.street,
      city: address.city,
      usState: address.usState,
      zipCode: address.zipCode
    })
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
        
        // console.log("here is what Cale's giving you to work with", washerSignupData);
        if(washerSignupData.payload.message === "user saved successfully") {
          console.log('user was created');
          this.nextStep();
          this.loginUser(email, password)
        } else {
          console.log('user was NOT created');
        }
      })
      .catch((err) => {
        console.error(err);
      })
  }

  loginUser = (email, password) => {
    this.props
      .loginUser(email, password)
      .then((res) => {
        console.log("logged in success");
      })
      .catch(err => {
        throw new Error(err);
      });
  };


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
                  setAutoAddress={this.setAutoAddress}
                />
              }
              {step === 3 &&
                ( washerSignupLoading
                ? <span><p>Loading..</p><i className="fas fa-spinner fa-pulse fa-5x"></i></span>
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
                  <Link to='/washerDash'><MDBBtn color="primary">Enter my Dashboard!</MDBBtn></Link>
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
  loginUser
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(WasherSignUpForm)
);