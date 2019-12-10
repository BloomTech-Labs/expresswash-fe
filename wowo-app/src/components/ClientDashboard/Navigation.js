import React, { Component } from "react";
import { Link } from "react-router-dom";

import StarRatings from "react-star-ratings";

import {
  MDBContainer,
  MDBCol,
  MDBBtn,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter,
  MDBInput
} from "mdbreact";
import logo from "../../images/wowo-logo-full.JPG";

class Navigation extends Component {
  state = {
    modal: false,
    date: "",
    time: new Date().toLocaleString(),
    rating: 4.2
  };
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  componentDidMount() {
    this.getDate();
  }

  getDate = () => {
    let date = new Date().toLocaleDateString();
    this.setState({ date });
  };

  render() {
    const { date, rating } = this.state;
    return (
      // <div class="border border-primary w-100" style={{ height: "100vh" }}>
      <MDBContainer>
        <div class="w-100" style={{ height: "100vh", paddingTop: "15px" }}>
          <div
            class="d-flex justify-content-end"
            style={{ paddingBottom: "7%" }}
          >
            <strong>{date}</strong>
          </div>
          <div>
            <MDBCol class="d-flex align-items-start">
              <h3 class="h3-responsive">
                <strong>Matt Thomas</strong>
              </h3>
              <img
                src={logo}
                alt="website logo"
                style={{ height: "100px" }}
                class="border border-dark rounded-circle"
              />
              <div>
                <p style={{ paddingTop: "7.5%" }}>
                  <strong>My Rating:</strong>
                </p>
                <StarRatings
                  rating={rating}
                  numberOfStars={5}
                  name={"userRating"}
                  starDimension={"25px"}
                  starSpacing={"5px"}
                  starRatedColor={"rgb(0,0,0)"}
                />
              </div>
            </MDBCol>
          </div>

          <div>
            <MDBCol
              class="d-flex align-content-center"
              style={{ height: "100", paddingTop: "20%" }}
            >
              <Link to="/Washes">
                <h5
                  class="text-muted"
                  style={{ paddingTop: "25px", paddingBottom: "15%" }}
                >
                  <strong>Your Washes</strong>
                </h5>
              </Link>
              <Link to="/Payment">
                <h5 class="text-muted" style={{ paddingBottom: "15%" }}>
                  <strong>Payment</strong>
                </h5>
              </Link>
              <Link to="/Vehicles">
                <h5 class="text-muted" style={{ paddingBottom: "15%" }}>
                  <strong>Manage Vehicles</strong>
                </h5>
              </Link>
              <h5
                class="text-muted"
                onClick={this.toggle}
                style={{ paddingBottom: "15%" }}
              >
                <strong>Edit Account</strong>
              </h5>
              <Link to="/washer-register">
                <h5 class="text-muted">
                  <strong>Earn Money Washing</strong>
                </h5>
              </Link>
            </MDBCol>
          </div>
          <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
            <MDBModalHeader toggle={this.toggle}>Edit Account</MDBModalHeader>
            <MDBModalBody>
              <p class="d-flex justify-content-start">
                <strong>Personal Information</strong>
              </p>
              <div>
                <MDBInput id="name" name="name" type="text" label="Name" />
                <MDBInput id="email" name="email" type="text" label="Email" />
                <MDBInput
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  label="Phone Number"
                />
                <MDBInput
                  id="password"
                  name="password"
                  type="password"
                  label="Password"
                  value="this is a fake password"
                />
              </div>
              <p class="d-flex justify-content-start">
                <strong>Favorites</strong>
              </p>
            </MDBModalBody>
            <MDBModalFooter>
              <div className="d-flex justify-content-center">
                <MDBBtn>Save Changes</MDBBtn>
              </div>
              {/* <MDBBtn onClick={this.toggle}>Close</MDBBtn> */}
            </MDBModalFooter>
          </MDBModal>
        </div>
      </MDBContainer>
      // </div>
    );
  }
}

export default Navigation;
