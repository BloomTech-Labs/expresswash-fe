import React, { Component } from "react";
import { Link, withRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import Axios from "axios";
import Styled from "styled-components";
import ClientVehicles from "./Vehicles/Vehicles.js";
import WowoWordLogo from "../../images/WowoWordLogo.js";
import NavButton from "../ClientDashboard/HamburgerNavMenu.js/NavButton";
import SideDrawer from "../ClientDashboard/HamburgerNavMenu.js/SideDrawer.js";

import Backdrop from "../ClientDashboard/HamburgerNavMenu.js/Backdrop.js";
import auth from "../auth.js";

import {
  getClientInformation,
  updateClientInformation,
  getClientRating
} from "../../actions/actionTypes.js";

import StarRatings from "react-star-ratings";
import "./ClientNav.css";

import {
  // MDBContainer,
  MDBCol,
  MDBBtn,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter,
  MDBInput
} from "mdbreact";

import logo from "../../images/wowo-logo-full.JPG";

const NavContainer = Styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 8%;
    width: 100%;
    padding: 0 9.5%;
    background: #00A8C5;
    z-index: 300;
`;

const LogoContainer = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100px;

    @media (min-width: 1800px) { // ##Device = Desktops ##Screen = 1800px to higher resolution desktops //
        height: 100%;
        width: 115px;
        left: 15%;
    }
`;

const MDBContainer = Styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  
`;

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
      phone: "",
      sideDrawerOpen: false
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
  backDropClick = () => {
    this.setState({
      sideDrawerOpen: false
    });
  };
  navClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  logout = evt => {
    evt.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("userType");
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    localStorage.removeItem("id");
    auth.logout(() => {
      this.props.history.push("/login");
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

    let ratings;
    if (rating === 0 || rating === null) {
      ratings = <p>There are no ratings available</p>;
    } else {
      ratings = (
        <StarRatings
          rating={rating}
          numberOfStars={5}
          name={"userRating"}
          starDimension={"25px"}
          starSpacing={"5px"}
          starRatedColor={"rgb(0,128,255)"}
        />
      );
    }
    let backDrop;
    if (this.state.sideDrawerOpen) {
      backDrop = <Backdrop clickHandler={this.backDropClick} />;
    }

    return (
      <MDBContainer class="d-flex">
        <div className="w-100">
          <div style={{ paddingBottom: "7%" }}>
            <NavContainer
              className="nav-container"
              style={{ height: "50px", width: "100%" }}
            >
              <LogoContainer className="logo-container">
                <Link to="/clientDash">
                  <WowoWordLogo className="wowo-logo" width="100%" />
                </Link>
              </LogoContainer>
              <NavButton clickHandler={this.navClickHandler} />
            </NavContainer>
          </div>
          <SideDrawer logout={this.logout} show={this.state.sideDrawerOpen} />
          {backDrop}
          <div>
            <MDBCol class="d-flex align-items-start">
              <h3 className="h3-responsive">
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
                {ratings}
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
              </MDBModalFooter>
            </form>
          </MDBModal>
        </div>
      </MDBContainer>
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
