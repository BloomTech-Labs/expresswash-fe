import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import VehicleList from "./VehicleList.js";
import {
  addACar,
  deleteACar,
  getClientCars,
  getClientInformation,
} from "../../../actions/actionTypes.js";

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
      deleteModal: false,
      deleteCarId: 0,
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

  toggle = () => {
    this.setState({
      ...this.state,
      modal: !this.state.modal,
    });
  };
  deleteToggle = (id) => {
    this.setState({
      ...this.state,
      deleteModal: !this.state.deleteModal,
      deleteCarId: id,
    });
  };
  deleteHandler = (evt) => {
    evt.preventDefault();
    this.setState({
      ...this.state,
      deleteModal: !this.state.deleteModal,
    });
    this.props.deleteACar(this.state.deleteCarId);
    this.props.getClientInformation(this.props.clientId);
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
  changePhoto = (e) => {
    this.setState({
      ...this.state,
      car: {
        ...this.state.car,
        [e.target.name]: e.target.files[0],
      },
    });
  };

  submitHandler = (evt) => {
    evt.preventDefault();
    this.props.addACar(this.state.car);
    this.toggle();
    this.setState({
      modal: false,
      deleteModal: false,
      deleteCarId: 0,
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
    });
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
          <VehicleList
            vehicles={this.props.cars}
            deleteToggle={this.deleteToggle}
          />

          <MDBModalFooter color="black-text">
            <MDBContainer>
              <MDBBtn onClick={this.toggle}>Add a vehicle</MDBBtn>
              <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                <form onSubmit={this.submitHandler}>
                  <MDBModalHeader>
                    Add a new vehicle{" "}
                    <MDBIcon icon="times" onClick={this.toggle} />
                  </MDBModalHeader>
                  <MDBModalBody>
                    <MDBInput
                      name="make"
                      label="Make"
                      type="text"
                      value={make}
                      onChange={this.changeHandler}
                      required
                    />
                    <MDBInput
                      name="model"
                      label="Model"
                      type="text"
                      value={model}
                      onChange={this.changeHandler}
                      required
                    />
                    <MDBInput
                      name="year"
                      label="year"
                      type="number"
                      value={year}
                      onChange={this.changeHandler}
                      required
                    />
                    <MDBInput
                      name="color"
                      label="Color"
                      type="text"
                      value={color}
                      onChange={this.changeHandler}
                      required
                    />
                    <MDBInput
                      name="licensePlate"
                      label="License Plate #"
                      type="text"
                      value={licensePlate}
                      onChange={this.changeHandler}
                      required
                    />
                    <MDBInput
                      name="photo"
                      type="file"
                      title={photo.name}
                      onChange={this.changePhoto}
                    />
                    <select
                      label="Category"
                      className="mdb-select md-form"
                      onChange={this.changeHandler}
                      value={category}
                      name="category"
                      style={{ margin: "3%", padding: "1.5%" }}
                      required
                    >
                      <option value="">-- Category --</option>
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
                      style={{ margin: "3%", padding: "1.5%" }}
                      required
                    >
                      <option value="">-- Size --</option>
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
                    <MDBBtn type="submit">Add Vehicle</MDBBtn>
                  </MDBModalFooter>
                </form>
              </MDBModal>
              <Link to="/clientDash">
                <MDBBtn>Back</MDBBtn>
              </Link>
              <MDBModal
                isOpen={this.state.deleteModal}
                toggle={this.deleteToggle}
              >
                <MDBModalHeader>
                  Are you sure you want to remove this vehicle?
                </MDBModalHeader>
                <MDBModalBody></MDBModalBody>
                <MDBModalFooter>
                  <MDBBtn onClick={this.deleteHandler}>Delete</MDBBtn>
                  <MDBBtn onClick={this.deleteToggle}>Cancel</MDBBtn>
                </MDBModalFooter>
              </MDBModal>
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
  deleteACar,
  getClientInformation,
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Vehicles)
);
