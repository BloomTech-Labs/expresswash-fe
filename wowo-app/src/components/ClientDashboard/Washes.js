import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MDBCard, MDBIcon, MDBCardTitle } from "mdbreact";
import Axios from "axios";
import WashesList from "./WashHelpers/WashesList.js";
import Styled from "styled-components";
import WowoWordLogo from "../../images/WowoWordLogo.js";
import NavButton from "../ClientDashboard/HamburgerNavMenu.js/NavButton";
import SideDrawer from "../ClientDashboard/HamburgerNavMenu.js/SideDrawer.js";

import Backdrop from "../ClientDashboard/HamburgerNavMenu.js/Backdrop.js";
import auth from "../auth.js";
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

class Washes extends Component {
  constructor() {
    super();
    this.state = {
      washes: [
        {
          washAddress: "111 test drive, City of SF, CA",
          paid: false,
          clientCarId: 1,
          creationDate: "2020-01-28T07:06:33.483+00:00"
        },
        {
          washAddress: "222 test drive, City of SF, CA",
          paid: false,
          clientCarId: 2,
          creationDate: "2020-01-28T07:06:33.483+00:00"
        }
      ],
      wash: {},
      sideDrawerOpen: false
    };
  }
  componentDidMount() {
    const clientId = localStorage.id;

    Axios.post("https://pt6-wowo.herokuapp.com/jobs/getLatestJobClient	", {
      clientId
    })
      .then(res => {
        console.log("this is res on cdm", res);
        this.setState({
          washes: [res.data, ...this.state.washes]
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

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
    let backDrop;
    if (this.state.sideDrawerOpen) {
      backDrop = <Backdrop clickHandler={this.backDropClick} />;
    }
    return (
      <MDBContainer class="d-flex">
        <div className="w-100">
          <div>
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
            <MDBCard>
              <div>
                <MDBCardTitle
                  className="d-flex justify-content-between"
                  style={{ borderBottom: "1.5px solid black" }}
                >
                  <h3>Recent Washes</h3>
                  <div>
                    <Link to="/clientDash/navigation">
                      <MDBIcon icon="times" />
                    </Link>
                  </div>
                </MDBCardTitle>
                <div>
                  <WashesList washes={this.state.washes} />
                </div>
              </div>
            </MDBCard>
          </div>
        </div>
      </MDBContainer>
    );
  }
}

export default Washes;
