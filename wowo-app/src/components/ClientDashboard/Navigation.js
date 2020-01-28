import React, { Component } from "react";
import { Link, withRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import Axios from "axios";
import ClientVehicles from "./Vehicles/Vehicles.js";

import {
  getClientInformation,
  updateClientInformation,
  getClientRating
} from "../../actions/actionTypes.js";

import StarRatings from "react-star-ratings";
import "./ClientNav.css";

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

import logo from '../../images/wowo-logo-full.JPG';


class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      modal: false,
      date: "",
      time: new Date().toLocaleString(),
      rating: 0,
      email: "",
      firstName: "",
      lastName: "",
      phone: ""
    };
  }

  componentDidMount() {
    const { id } = localStorage;

    Axios.get(`https://pt6-wowo.herokuapp.com/users/${id}`)
      .then(res => {
        this.setState({
          email: res.data.email,
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          phoneNumber: res.data.phoneNumber
        });
      })
      .catch(err => {
        console.log("this is err on component did mount", err);
      });

    Axios.post("https://pt6-wowo.herokuapp.com/ratings/clientaverage", { id })
      .then(res => {
        this.setState({
          rating: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
    // this.props.getClientRating({ id }).then(rating => {
    //   this.setState({ rating });
    // });
    // .then(rating => {
    //   // console.log("this is res on CDM", res);
    //   console.log("this is id on the component did mount", id);
    //   // console.log("this is res from the component did mount", res);
    //   this.setState({
    //     rating: rating
    //   });
    // })
    // .catch(err => {
    //   console.log(err);
    // });

    this.getDate();
  }
  toggle = () => {
    const { id } = localStorage;
    Axios.get(`https://pt6-wowo.herokuapp.com/users/`)
      .then(res => {
        this.setState({
          email: res.data.email,
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          phoneNumber: res.data.phoneNumber
        });
      })
      .catch(err => {
        console.log("this is err on the toggle", err);
      });
    this.setState({
      modal: !this.state.modal
    });
  };

  getDate = () => {
    let date = new Date().toLocaleDateString();
    this.setState({ date });
  };

  changeHandler = evt => {
    evt.preventDefault();
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };
  submitHandler = evt => {
    evt.preventDefault();
    const { id } = localStorage;
    const { firstName, lastName, phoneNumber, email } = this.state;

    this.props
      .updateClientInformation(id, { firstName, lastName, email, phoneNumber })
      .then(() => {
        this.props.history.push("/clientDash/navigation");
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    const {
      date,
      rating,
      firstName,
      lastName,
      email,
      phoneNumber
    } = this.state;
    // const email = this.props.clientInformation;

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
                <strong>
                  <p>Welcome back,</p>
                  {this.state.firstName} {this.state.lastName}!
                </strong>
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
                  starRatedColor={"rgb(0,128,255)"}
                />
              </div>
            </MDBCol>
          </div>

          <div>
            <MDBCol
              class="d-flex align-content-center"
              style={{ height: "100", paddingTop: "20%" }}
            >
              <Link to="/clientDash/Washes">
                <h5
                  class="text-muted"
                  style={{ paddingTop: "25px", paddingBottom: "15%" }}
                >
                  <strong>Your Washes</strong>
                </h5>
              </Link>
              <Link to="/clientDash/payments">
                <h5 class="text-muted" style={{ paddingBottom: "15%" }}>
                  <strong>Payment</strong>
                </h5>
              </Link>
              <Link to="/clientDash/vehicles">
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
            <form onSubmit={this.submitHandler}>
              <MDBModalHeader toggle={this.toggle}>Edit Account</MDBModalHeader>
              <MDBModalBody>
                <p class="d-flex justify-content-start">
                  <strong>Personal Information</strong>
                </p>
                <div>
                  <MDBInput
                    id="name"
                    name="firstName"
                    type="text"
                    label="First Name"
                    value={firstName}
                    onChange={this.changeHandler}
                  />
                  <MDBInput
                    id="lastName"
                    name="lastName"
                    type="text"
                    label="Last Name"
                    value={lastName}
                    onChange={this.changeHandler}
                  />
                  <MDBInput
                    id="email"
                    name="email"
                    type="text"
                    label="Email"
                    value={email}
                    onChange={this.changeHandler}
                  />
                  <MDBInput
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    label="Phone Number"
                    value={phoneNumber}
                    onChange={this.changeHandler}
                  />
                  <MDBInput
                    id="password"
                    name="password"
                    type="password"
                    label="Password"
                    value="thisisafakepass"
                  />
                </div>
                <p class="d-flex justify-content-start">
                  <strong>Favorites</strong>
                </p>
              </MDBModalBody>
              <MDBModalFooter>
                <div className="d-flex justify-content-center">
                  <MDBBtn type="submit">Save Changes</MDBBtn>
                </div>
                {/* <MDBBtn onClick={this.toggle}>Close</MDBBtn> */}
              </MDBModalFooter>
            </form>
          </MDBModal>
        </div>
      </MDBContainer>
      // </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    clientInformation: state.info,
    rating: state.userReducer.rating
  };
};

const mapDispatchToProps = {
  getClientInformation,
  updateClientInformation,
  getClientRating
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Navigation)
);
