import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Axios from "axios";
import VehicleList from "./VehicleList.js";
import { DB_URL } from "../../../actions/actionTypes.js";

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
import { getClientCars } from "../../../actions/actionTypes.js";

class Vehicles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      clientId: "",
      make: "",
      model: "",
      color: "",
      licensePlate: "",
      photo: "",
      category: ["car", "suv", "truck", "van"],
      size: ["small", "medium", "large"],
    };
  }
  componentDidMount() {
    // const { id } = localStorage;
    // Axios.post(DB_URL + "/cars", id)
    //   .then((res) => {
    //     this.setState({
    //       vehicles: res.data,
    //     });
    //   })
    //   .catch((err) => {
    //     console.log("this is err on get client cars", err);
    //   });
  }
  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  changeHandler = (evt) => {
    evt.preventDefault();
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };
  submitHandler = (evt) => {
    evt.preventDefault();
  };
  render() {
    const { color, make, model } = this.state;
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
                      name="color"
                      label="Color"
                      type="text"
                      value={color}
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

const mapStateToProps = (state) => {
  return {
    cars: state.userReducer.user.cars,
  };
};

const mapDispatchToProps = {
  getClientCars,
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Vehicles)
);
