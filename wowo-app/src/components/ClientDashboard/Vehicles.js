import React, { Component } from "react";
import { Link } from "react-router-dom";

import {
  MDBContainer,
  MDBModalHeader,
  MDBModalFooter,
  MDBCard,
  MDBBtn
} from "mdbreact";

class Vehicles extends Component {
  render() {
    return (
      <MDBContainer style={{ border: "red" }}>
        <MDBCard>
          <MDBModalHeader>
            <div class="justify-content-center">
              <div>
                <p>Manage Vehicles</p>
              </div>
            </div>
          </MDBModalHeader>
          <div class="d-flex justify-content-start">
            <strong>Vehicles:</strong>
          </div>

          <MDBModalFooter color="black-text">
            <MDBContainer>
              <MDBBtn>Add a vehicle</MDBBtn>
              <Link to="/client-navigation">
                <MDBBtn>Back</MDBBtn>
                {/* <MDBIcon icon="times"></MDBIcon> */}
              </Link>
              {/* <p>Add a vehicle</p> */}
            </MDBContainer>
          </MDBModalFooter>
        </MDBCard>
      </MDBContainer>
    );
  }
}

export default Vehicles;
