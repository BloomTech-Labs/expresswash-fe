import React, { Component } from "react";
import Username from "./signup-steps/Username.js";
import Name from "./signup-steps/Name.js";
import Address from "./signup-steps/Address.js";
import CheckInfo from "./signup-steps/CheckInfo.js";
import ProgressBar from "./progress-bar/ProgressBar.js";
import FillerPage from "./FillerPage.js";

import { MDBContainer, MDBCol, MDBBtn, MDBCard, MDBRow } from "mdbreact";
import { MdChevronLeft } from "react-icons/md";
import "mdbreact/dist/css/mdb.css";

class UserSignup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      percentage: 25.0,
      currentStep: 1,
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      username: "",
      phoneNumber: "",
      sAddress: "",
      sAddress2: "",
      zipcode: "",
      city: "",
      state: ""
    };
    this.nextStep = this.nextStep.bind(this);
    this.prevStep = this.prevStep.bind(this);
  }

  nextStep() {
    let currentStep = this.state.currentStep;

    currentStep = currentStep >= 3 ? 4 : currentStep + 1;
    this.setState({ currentStep: currentStep });

    if (this.state.percentage === 100) return;
    this.setState(prevState => ({ percentage: prevState.percentage + 25.0 }));
  }

  prevStep() {
    let currentStep = this.state.currentStep;

    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({ currentStep: currentStep });

    if (this.state.percentage === 0) return;
    this.setState(prevState => ({ percentage: prevState.percentage - 25.0 }));
  }

  get getPrevStep() {
    let currentStep = this.state.currentStep;

    if (currentStep !== 1) {
      return <MdChevronLeft onClick={this.prevStep} />;
    }
    return null;
  }

  get getNextStep() {
    let currentStep = this.state.currentStep;

    if (currentStep === 1) {
      return (
        <div>
          <MDBCol>
            <div className="d-flex justify-content-center">
              <MDBBtn
                type="button"
                onClick={this.nextStep}
                color="primary"
                size="lg"
              >
                register
              </MDBBtn>
            </div>
            <p class="text-center">
              By tapping on register button you agree to our
              <br /> <strong>Terms & Conditions</strong>{" "}
            </p>
          </MDBCol>
        </div>
      );
    } else if (currentStep === 2 || currentStep === 3) {
      return (
        <div className="d-flex justify-content-center">
          <MDBBtn
            type="button"
            onClick={this.nextStep}
            size="lg"
            color="primary"
          >
            next
          </MDBBtn>
        </div>
      );
    } else if (currentStep === 4) {
      return;
    }
  }

  get registerText() {
    let currentStep = this.state.currentStep;

    if (currentStep === 1) {
      return <p>Register</p>;
    } else if (currentStep === 2) {
      return <p>What's your name?</p>;
    } else if (currentStep === 3) {
      return <p>Finish your profile</p>;
    } else if (currentStep === 4) {
      return <p>Check your information</p>;
    }
  }

  handleChange = evt => {
    evt.preventDefault();
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleSubmit = async evt => {
    evt.preventDefault();
    const {
      email,
      firstName,
      lastName,
      password,
      username,
      phoneNumber,
      address
    } = this.state;
    const newUserPackage = {
      email,
      firstName,
      lastName,
      password,
      username,
      phoneNumber,
      address
    };

    this.setState({
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      username: "",
      phoneNumber: "",
      sAddress: "",
      sAddress2: "",
      city: "",
      state: "",
      zipcode: "",
      currentStep: 1
    });
  };

  render() {
    return (
      <div class="card weather-card" style={{ height: "100vh" }}>
        <MDBContainer style={{ height: "100%" }}>
          <MDBRow>
            <MDBCol>
              <MDBCard
                className="card-body"
                style={{
                  width: "100%",
                  marginTop: "1rem",
                  marginBottom: "1rem",
                  height: "374px"
                }}
              >
                <div class="d-flex justify-content-center align-items-center h-100">
                  <FillerPage currentStep={this.state.currentStep} />
                </div>
              </MDBCard>
            </MDBCol>
            <MDBCol>
              <MDBCard
                className="card-body"
                style={{
                  width: "100%",
                  marginTop: "1rem",
                  marginBottom: "1rem"
                }}
              >
                <div>{this.getPrevStep}</div>

                <div className="d-flex justify-content-center">
                  {this.registerText}
                </div>

                <div className="d-flex justify-content-center">
                  <ProgressBar percentage={this.state.percentage} />
                </div>
                <form onSubmit={this.handleSubmit}>
                  <Username
                    currentStep={this.state.currentStep}
                    handleChange={this.handleChange}
                    username={this.state.username}
                    password={this.state.password}
                  />
                  <Name
                    currentStep={this.state.currentStep}
                    handleChange={this.handleChange}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    email={this.state.email}
                    phoneNumber={this.state.phoneNumber}
                  />
                  <Address
                    currentStep={this.state.currentStep}
                    handleChange={this.handleChange}
                    sAddress={this.state.sAddress}
                    zipcode={this.state.zipcode}
                    sAddress2={this.state.sAddress2}
                    city={this.state.city}
                    state={this.state.state}
                  />
                  <CheckInfo
                    currentStep={this.state.currentStep}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    email={this.state.email}
                    username={this.state.username}
                    sAddress={this.state.sAddress}
                    phoneNumber={this.state.phoneNumber}
                    zipcode={this.state.zipcode}
                    sAddress2={this.state.sAddress2}
                    city={this.state.city}
                    state={this.state.state}
                  />
                  {this.getNextStep}
                </form>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default UserSignup;
