import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MDBContainer, MDBCard, MDBIcon } from "mdbreact";

class Washes extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <MDBContainer>
        <MDBCard>
          <div>
            <h3>Your Washes</h3>
            <div>
              <Link to="/clientDash/navigation">
                <MDBIcon icon="times" />
              </Link>
            </div>
          </div>
        </MDBCard>
      </MDBContainer>
    );
  }
}

export default Washes;
