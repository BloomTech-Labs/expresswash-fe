/*global google*/
import React, { Component } from "react";
import { MDBRow, MDBCol, MDBInput } from "mdbreact";

class Address extends Component {
  constructor(props) {
    super(props);
    this.handlePlaceSelect = this.handlePlaceSelect.bind(this);
    this.autocomplete = null;
  }

  state = {
    phoneNumber: this.props.phoneNumber,
    streetAddress: this.props.streetAddress,
    apt: this.props.streetAddress2,
    zipcode: this.props.zipcode,
    State: this.props.State,
    city: this.props.city
  };

  componentDidMount() {
    this.autocomplete = new google.maps.places.Autocomplete(
      document.getElementById("autocomplete"),
      {}
    );
    this.autocomplete.addListener("place_changed", this.handlePlaceSelect);
  }

  handlePlaceSelect() {
    let addressObject = this.autocomplete.getPlace();
    let address = addressObject.address_components;
    console.log(address);

    this.setState({
      streetAddress: `${address[0].long_name} ${address[1].long_name}`,
      apt: address[2].long_name,
      city: address[3].long_name,
      State: address[5].short_name,
      zipcode: address[7].short_name
    });
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
              id="State"
              name="State"
              type="text"
              value={this.props.State}
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
