/*global google*/
import React, { Component } from "react";
import { MDBRow, MDBCol, MDBInput } from "mdbreact";

class Address extends Component {
  constructor(props) {
    super(props);
    this.handlePlaceSelect = this.handlePlaceSelect.bind(this);
    this.autocomplete = null;
  }

  componentDidMount() {
    this.autocomplete = new google.maps.places.Autocomplete(
      document.getElementById("autocomplete"),
      {}
    );
    this.autocomplete.addListener("place_changed", this.handlePlaceSelect);
  }

  handlePlaceSelect() {
    // let { autoAddress } = this.props;
    let addressObject = this.autocomplete.getPlace();
    let address = addressObject.address_components;
    console.log(address);
  }

  render() {
    // const { sAddress, sAddress2, zipcode, city, state } = this.state;
    // const values = { sAddress, sAddress2, zipcode, city, state };

    if (this.props.currentStep !== 3) {
      return null;
    }
    return (
      <div>
        <span>
          <input id="autocomplete" ref="input" type="text" />
          <MDBInput
            id="streetAddress"
            name="streetAddress"
            type="text"
            label="Street Address"
            value={this.props.streetAddress}
            onChange={this.props.handleChange}
            required
          />
        </span>
        <MDBRow>
          <MDBCol md="6">
            <MDBInput
              id="sAddress2"
              name="sAddress2"
              type="text"
              value={this.props.sAddress2}
              onChange={this.props.handleChange}
              label="APT / SUITE / OTHER"
            />
          </MDBCol>
          <MDBCol md="6">
            <MDBInput
              id="zip"
              name="zip"
              type="number"
              value={this.props.zip}
              onChange={this.props.handleChange}
              label="ZIP Code"
            />
          </MDBCol>
          <MDBCol md="6">
            <MDBInput
              id="city"
              name="city"
              type="text"
              value={this.props.city}
              onChange={this.props.handleChange}
              label="City"
            />
          </MDBCol>
          <MDBCol md="6">
            <MDBInput
              id="state"
              name="state"
              type="text"
              value={this.props.state}
              onChange={this.props.handleChange}
              label="State"
            />
          </MDBCol>
        </MDBRow>
      </div>
    );
  }
}

export default Address;
