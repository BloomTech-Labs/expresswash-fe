import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Axios from "axios";
import VehicleList from "./VehicleList.js";

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
import { getClientCars } from "../../../actions/actionTypes.js";

class Vehicles extends Component {
  constructor() {
    super();
    this.state = {
      modal: false,
      vehicleMake: "",
      vehicleModel: "",
      vehicleColor: "",
      vehicles: [{ Make: "Toyota" }, { Make: "Prius" }, { Make: "Ram" }]
    };
  }
  componentDidMount() {
    const { id } = localStorage;
    Axios.post("https://pt6-wowo.herokuapp.com/carsPG/mycars", id)
      .then(res => {
        this.setState({
          vehicles: res.data
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
  render() {
    const { vehicleColor, vehicleMake, vehicleModel } = this.state;
    return (
      <MDBContainer style={{ border: "red" }}>
        <MDBCard>
          <MDBModalHeader>
            <div className="justify-content-center">
              <div>
                <p>Manage Vehicles</p>
              </div>
            </div>
          </MDBModalHeader>
          <div
            className="d-flex justify-content-start"
            style={{ paddingLeft: "3%" }}
          >
            <strong>Vehicles:</strong>
          </div>
          <VehicleList vehicles={this.state.vehicles} />

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
