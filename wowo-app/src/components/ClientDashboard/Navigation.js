import React, { Component } from "react";

import {
  MDBContainer,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBRow,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter,
  MDBInput
} from "mdbreact";
import logo from "../../images/wowo-logo-full.JPG";

class Navigation extends Component {
  state = {
    modal: false
  };
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
  render() {
    return (
      // <div class="border border-primary w-100" style={{ height: "100vh" }}>
      <MDBContainer>
        <div class="border border-primary w-100" style={{ height: "100vh" }}>
          <div class="border border-danger">
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
              <p>the stars</p>
            </MDBCol>
          </div>

          <div className="d-flex align-items-end border border-success">
            <MDBCol>
              <h5 class="text-muted">
                <strong>Your Washes</strong>
              </h5>
              <h5 class="text-muted">
                <strong>Payment</strong>
              </h5>
              <h5 class="text-muted">
                <strong>Manage Vehicles</strong>
              </h5>
              <h5 class="text-muted" onClick={this.toggle}>
                <strong>Edit Account</strong>
              </h5>
            </MDBCol>
          </div>
          <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
            <MDBModalHeader toggle={this.toggle}>Edit Account</MDBModalHeader>
            <MDBModalBody>
              <p>Personal Information</p>
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
                />
              </div>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn>Save Changes</MDBBtn>
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
