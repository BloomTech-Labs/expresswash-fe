import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import VehicleList from "./VehicleList.js";
import { addACar, getClientCars } from "../../../actions/actionTypes.js";

import {
  MDBContainer,
  MDBModalHeader,
  MDBModalFooter,
  MDBCard,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBInput,
} from "mdbreact";
import { MDBIcon } from "mdbreact";

class Vehicles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      car: {
        clientId: this.props.clientId,
        make: "",
        model: "",
        year: "",
        color: "",
        licensePlate: "",
        photo: "",
        category: "",
        size: "",
      },
    };
  }
  componentDidMount() {}

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  changeHandler = (evt) => {
    evt.preventDefault();
    evt.persist();
    this.setState({
      ...this.state,
      car: {
        ...this.state.car,
        [evt.target.name]: evt.target.value,
      },
    });
  };

  submitHandler = (evt) => {
    evt.preventDefault();
    console.log("Vehicles.js STATE.CAR", this.state.car);
    this.props.addACar(this.state.car);
    // this.props.getClientInformation(this.props.clientId)
    this.toggle();
  };
  render() {
    const {
      make,
      model,
      year,
      color,
      licensePlate,
      photo,
      category,
      size,
    } = this.state.car;
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
          <VehicleList vehicles={this.props.cars} />

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
                      name="make"
                      label="Make"
                      type="text"
                      value={make}
                      onChange={this.changeHandler}
                    />
                    <MDBInput
                      name="model"
                      label="Model"
                      type="text"
                      value={model}
                      onChange={this.changeHandler}
                    />
                    <MDBInput
                      name="year"
                      label="year"
                      type="number"
                      value={year}
                      onChange={this.changeHandler}
                    />
                    <MDBInput
                      name="color"
                      label="Color"
                      type="text"
                      value={color}
                      onChange={this.changeHandler}
                    />
                    <MDBInput
                      name="licensePlate"
                      label="License Plate #"
                      type="text"
                      value={licensePlate}
                      onChange={this.changeHandler}
                    />
                    <MDBInput
                      name="photo"
                      label="Photo"
                      type="photo"
                      value={photo}
                      onChange={this.changeHandler}
                    />
                    <select
                      className="mdb-select md-form"
                      onChange={this.changeHandler}
                      value={category}
                      name="category"
                    >
                      <option value="None" name="None">
                        Vehicle Category
                      </option>
                      <option name="car" value="car">
                        Car
                      </option>
                      <option name="truck" value="truck">
                        Truck
                      </option>
                      <option name="suv" value="suv">
                        SUV
                      </option>
                      <option name="van" value="van">
                        Van
                      </option>
                    </select>
                    <select
                      className="mdb-select md-form"
                      onChange={this.changeHandler}
                      value={size}
                      name="size"
                    >
                      <option value="None" name="None">
                        Vehicle Size
                      </option>
                      <option name="small" value="small">
                        Small
                      </option>
                      <option name="medium" value="medium">
                        Medium
                      </option>
                      <option name="large" value="large">
                        Large
                      </option>
                    </select>
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

const mapStateToProps = (state) => {
  return {
    cars: state.userReducer.user.cars,
    clientId: state.userReducer.user.id,
  };
};

const mapDispatchToProps = {
  getClientCars,
  addACar,
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Vehicles)
);
