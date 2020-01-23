import React, { Component } from "react";
import { Link } from "react-router-dom";

import {
  MDBContainer,
  MDBModalHeader,
  MDBModalFooter,
  MDBCard,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBInput
} from "mdbreact";
import { MDBIcon } from "mdbreact";

class Vehicles extends Component {
  constructor() {
    super();
    this.state = {
      modal: false,
      vehicleMake: "",
      vehicleModel: "",
      vehicleColor: ""
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
  render() {
    const { vehicleColor, vehicleMake, vehicleModel } = this.state;
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
          <div
            class="d-flex justify-content-start"
            style={{ paddingLeft: "3%" }}
          >
            <strong>Vehicles:</strong>
          </div>

          <MDBModalFooter color="black-text">
            <MDBContainer>
              <MDBBtn onClick={this.toggle}>Add a vehicle</MDBBtn>
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
              <Link to="/clientDash/navigation">
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
