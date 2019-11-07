import React from 'react';
import { MDBBtn } from "mdbreact";

export default function NavigationPage() {
    return (
        <div className="nav-container">
            <section className="header-container">
                <div className="nav-header">
                    <h1 className="nav-main-header">WoWo</h1>
                    <p className="nav-slogan">We're the new way to wash your car.</p>
                </div>
                <div className="header-buttons">
                    <MDBBtn className="sign-up-btn" color="primary">Sign Up</MDBBtn>
                    <MDBBtn className="login-btn">Log In</MDBBtn>
                </div>
            </section>

            <section className="information">
                <div className="info-card about">
                    <h3 className="nav-info-header">We Bring The Wash To You</h3>
                    <p className="nav-info-content">WoWo is an all new approach to car washing. Instead of driving to the carwash and waiting in long lines, we bring the car wash to you. Just select your wash, type of car, and time and our washers will come to you to perform a quality car wash. Get an instant quote here:</p>

                    <MDBBtn className="quote-btn" color="primary">Instant Quote</MDBBtn>
                </div>

                <div className="info-card eco">
                    <h3 className="nav-info-header">Eco-Friendly</h3>
                    <p className="nav-info-content">WoWo is dedicated to delivering an eco-friendly carwash. All of our washers are trained to used eco-friendly cleaners and practices. That way we can deliver a spectacular car wash while protecting the enviroment.</p>
                </div>
                
                <div className="info-card washers">
                    <h3 className="nav-info-header">Earn Extra Income</h3>
                    <p className="nav-info-content">WoWo welcomes anyone whoe enjoys washing, detailing, or even just looking to make some extra income. All prospective washers must go through training to learn practices and standards. Once the training is complete, the washer can then use the app to find users in need of a carwash. Once the job is completed and the customer satisfied, the washer receives a cut of the cost as well as tips.</p>
                </div>

                <MDBBtn className="washer-sign-up-btn" color="primary">Become a Washer</MDBBtn>
            </section>
        </div>
    )
}