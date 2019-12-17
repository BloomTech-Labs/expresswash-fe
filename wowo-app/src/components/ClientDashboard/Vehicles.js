import React, { Component } from "react";
import { Link } from "react-router-dom";

import {
  MDBContainer,
  MDBCol,
  MDBBtn,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter,
  MDBInput,
  MDBCard,
  MDBFooter,
  MDBEdgeHeader,
  MDBCardTitle,
  MDBIcon
} from "mdbreact";

class Vehicles extends Component {
  render() {
    return (
      <MDBContainer style={{ border: "red" }}>
        <MDBCard>
          <MDBModalHeader>
            <div class="d-flex justify-content-between">
              <div>
                <p>Manage Vehicles</p>
              </div>
              <div>
                <Link to="/user-navigation">
                  <MDBIcon icon="times"></MDBIcon>
                </Link>
              </div>
            </div>
          </MDBModalHeader>
          <div>Vehicles:</div>

          <MDBModalFooter color="black-text">
            <MDBContainer>
              <p>Add a vehicle</p>
            </MDBContainer>
          </MDBModalFooter>
        </MDBCard>
      </MDBContainer>
    );
  }
}

export default Vehicles;
