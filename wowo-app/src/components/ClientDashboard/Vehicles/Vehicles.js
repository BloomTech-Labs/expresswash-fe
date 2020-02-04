import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Axios from "axios";
import VehicleList from "./VehicleList.js";
import Styled from "styled-components";
import WowoWordLogo from "../../../images/WowoWordLogo.js";
import NavButton from "../../ClientDashboard/HamburgerNavMenu.js/NavButton.js";
import SideDrawer from "../../ClientDashboard/HamburgerNavMenu.js/SideDrawer.js";
import Backdrop from "../../ClientDashboard/HamburgerNavMenu.js/Backdrop.js";
import auth from "../../auth.js";

import {
  // MDBContainer,
  MDBModalHeader,
  MDBModalFooter,
  MDBCard,
  MDBCardTitle,
  MDBCardBody,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBInput,
  MDBCardText
} from "mdbreact";
import { MDBIcon } from "mdbreact";
import { getClientCars } from "../../../actions/actionTypes.js";
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

class Vehicles extends Component {
  constructor() {
    super();
    this.state = {
      modal: false,
      make: "",
      model: "",
      licensePlate: "",
      vehicles: [
        { Make: "Toyota", Model: "Corolla" },
        { Make: "Toyota", Model: "Prius" },
        { Make: "Ram", Model: "1500" }
      ],
      sideDrawerOpen: false
    };
  }
  componentDidMount() {
    const { id } = localStorage;

    Axios.post("https://pt6-wowo.herokuapp.com/carsPG/mycars", { id })
      .then(res => {
        console.log("this is res on cdm", res);
        this.setState({
          vehicles: [res.data, ...this.state.vehicles]
        });
      })
      .catch(err => {
        console.log("this is err on get client cars", err);
      });
  }
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
  changeHandler = evt => {
    evt.preventDefault();
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };
  submitHandler = evt => {
    evt.preventDefault();
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
    const { vehicleColor, vehicleMake, vehicleModel } = this.state;
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
                  <WowoWordLogo
                    className="wowo-logo"
                    width="100%"
                  ></WowoWordLogo>
                </Link>
              </LogoContainer>
              <NavButton clickHandler={this.navClickHandler} />
            </NavContainer>
          </div>
          <SideDrawer logout={this.logout} show={this.state.sideDrawerOpen} />
          {backDrop}
          <div>
            <MDBCard>
              <MDBCardTitle
                className="d-flex justify-content-between"
                style={{ borderBottom: "1.5px solid black" }}
              >
                <h2>Manage Vehicles</h2>
                <div>
                  <Link to="/clientDash/navigation">
                    <MDBIcon icon="times" />
                  </Link>
                </div>
              </MDBCardTitle>
              <div
                className="d-flex justify-content-start"
                style={{ paddingLeft: "3%" }}
              >
                <strong>Vehicles:</strong>
              </div>
              <VehicleList vehicles={this.state.vehicles} />

              {/* <MDBModalFooter color="black-text"> */}
              <MDBCardText>
                <MDBContainer>
                  <MDBBtn
                    onClick={this.toggle}
                    style={{ height: "10%", width: "25%" }}
                  >
                    Add a vehicle
                  </MDBBtn>
                  <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                    <form onSubmit={this.submitHandler}>
                      <MDBModalHeader>
                        Vehicle Information{" "}
                        <MDBIcon icon="times" onClick={this.toggle} />
                      </MDBModalHeader>
                      <MDBModalBody>
                        <MDBInput
                          name="vehicleMake"
                          label="Make"
                          type="text"
                          value={vehicleMake}
                          onChange={this.changeHandler}
                        />
                        <MDBInput
                          name="vehicleModel"
                          label="Model"
                          type="text"
                          value={vehicleModel}
                          onChange={this.changeHandler}
                        />
                        <MDBInput
                          name="vehicleColor"
                          label="Color"
                          type="text"
                          value={vehicleColor}
                          onChange={this.changeHandler}
                        />
                      </MDBModalBody>
                      <MDBModalFooter>
                        <MDBBtn type="submit">Save Changes</MDBBtn>
                      </MDBModalFooter>
                    </form>
                  </MDBModal>
                  {/* <Link to="/clientDash/navigation">
                  <MDBBtn>Back</MDBBtn>
                  
                </Link>
                */}
                </MDBContainer>
              </MDBCardText>
              {/* </MDBModalFooter> */}
            </MDBCard>
          </div>
        </div>
      </MDBContainer>
    );
  }
}
const mapStateToProps = state => {
  return {
    vehciles: state.payload
  };
};

const mapDispatchToProps = {
  getClientCars
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Vehicles)
);
