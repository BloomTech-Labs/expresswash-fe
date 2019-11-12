import React from "react";
import { MDBBtn, MDBContainer, MDBRow, MDBCol } from "mdbreact";

import "./LandingPage.css";
import logo from "../images/wowo-logo-full.JPG";

export default function LandingPage() {
  return (
    <MDBContainer className="landing-container">
      <section className="header-container">
        <MDBContainer className="landing-header">
          <MDBRow className="mb-4">
            <MDBCol>
              <img className="wowo-logo" src={logo} alt="logo-image" />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <MDBContainer className="header-buttons-container">
          <MDBBtn className="sign-up-btn" color="primary">
            Sign Up
          </MDBBtn>
          <p className="btn-or">or</p>
          <MDBBtn className="login-btn">Log In</MDBBtn>
        </MDBContainer>
      </section>

      <section className="landing-information">
        <MDBContainer className="landing-info-card about">
          <h3 className="landing-info-header">We Bring The Wash To You</h3>
          <p className="landing-info-content">
            WoWo is an all new approach to car washing. Instead of driving to
            the carwash and waiting in long lines, we bring the car wash to you.
            Just select your wash, type of car, and time and our washers will
            come to you to perform a quality car wash. Get an instant quote
            here:
          </p>

          {/* <MDBBtn className="quote-btn" color="primary">Instant Quote</MDBBtn> */}
        </MDBContainer>

        <MDBContainer className="landing-info-card">
          <h3 className="landing-info-header eco">Eco-Friendly</h3>
          <p className="landing-info-content">
            WoWo is dedicated to delivering an eco-friendly carwash. All of our
            washers are trained to used eco-friendly cleaners and practices.
            That way we can deliver a spectacular car wash while protecting the
            enviroment.
          </p>
        </MDBContainer>

        <MDBContainer className="landing-info-card washers">
          <h3 className="landing-info-header">Earn Extra Income</h3>
          <p className="landing-info-content">
            WoWo welcomes anyone whoe enjoys washing, detailing, or even just
            looking to make some extra income. All prospective washers must go
            through training to learn practices and standards. Once the training
            is complete, the washer can then use the app to find users in need
            of a carwash. Once the job is completed and the customer satisfied,
            the washer receives a cut of the cost as well as tips.
          </p>
        </MDBContainer>

        <MDBBtn className="washer-sign-up-btn" color="primary">
          Become a Washer
        </MDBBtn>
      </section>
    </MDBContainer>
  );
}
