import React, { Component } from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";
import WowoWordLogo from "../../images/WowoWordLogo.js";
import NavButton from "../ClientDashboard/HamburgerNavMenu.js/NavButton";
import SideDrawer from "../ClientDashboard/HamburgerNavMenu.js/SideDrawer.js";
import Backdrop from "../ClientDashboard/HamburgerNavMenu.js/Backdrop.js";
import auth from "../auth.js";

import {
  MDBCard,
  // MDBContainer,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBModal,
  MDBInput,
  MDBModalHeader,
  MDBModalFooter,
  MDBModalBody,
  MDBIcon
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

class Payment extends Component {
  constructor() {
    super();
    this.state = {
      cardNumber: "",
      cardName: "",
      expMonth: "",
      expYear: "",
      cvc: "",
      modal: false,
      errorMessage: "",
      sideDrawerOpen: false
    };
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
    const { cardNumber, cardName, expMonth, expYear, cvc } = this.state;

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
                className="d-flex justify-content-between "
                style={{ borderBottom: "1.5px solid black" }}
              >
                <h2>Payment Options</h2>
                <div>
                  <Link to="/clientDash/navigation">
                    <MDBIcon icon="times" />
                  </Link>
                </div>
              </MDBCardTitle>
              <MDBCardText>
                <p
                  class="d-flex align-items-start"
                  style={{ paddingLeft: "1%" }}
                >
                  payment methods:
                </p>

                <MDBBtn onClick={this.toggle}>Add Payment Method</MDBBtn>

                <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                  <form onSubmit={this.submitHandler}>
                    <MDBModalHeader style={{ width: "100%" }}>
                      Add Payment
                      <MDBIcon
                        icon="times"
                        onClick={this.toggle}
                        class="d-flex justify-content-end"
                      />
                    </MDBModalHeader>
                    <MDBModalBody>
                      <MDBInput
                        name="cardName"
                        label="Name on Card"
                        type="text"
                        value={cardName}
                        onChange={this.changeHandler}
                      />
                      <MDBInput
                        name="cardNumber"
                        label="Card Number"
                        type="number"
                        value={cardNumber}
                        onChange={this.changeHandler}
                      />

                      <MDBInput
                        name="expMonth"
                        label="Exp Month"
                        type="number"
                        value={expMonth}
                        onChange={this.changeHandler}
                      />
                      <MDBInput
                        name="Exp Year"
                        label="EXP Year"
                        type="number"
                        value={expYear}
                        onChange={this.changeHandler}
                      />
                      <MDBInput
                        name="cvc"
                        label="cvc"
                        type="number"
                        value={cvc}
                        onChange={this.changeHandler}
                      />
                      <MDBInput
                        label="billing address"
                        onChange={this.changeHandler}
                      />
                      <MDBInput
                        name="zipCode"
                        label="zipcode"
                        type="number"
                        onChange={this.changeHandler}
                      />
                    </MDBModalBody>
                    <MDBModalFooter>
                      <MDBBtn type="submit">Save Changes</MDBBtn>
                    </MDBModalFooter>
                  </form>
                </MDBModal>
                <MDBInput label="Enter promotion code" type="text" />
              </MDBCardText>
            </MDBCard>
          </div>
        </div>
      </MDBContainer>
    );
  }
}

export default Payment;
