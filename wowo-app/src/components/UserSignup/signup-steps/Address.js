/*global google*/
import React, { Component } from "react";
import { MDBRow, MDBCol, MDBInput } from "mdbreact";

class Address extends Component {
  constructor(props) {
    super(props);
  }

  //   // this.state = {
  //   //   // name: "",
  //   //   // sAddress: ""
  //   // };
  //   this.autocomplete = null;
  //   this.handlePlaceSelect = this.handlePlaceSelect.bind(this);
  //   // this.handleChangeAddress = this.handleChangeAddress.bind(this);
  //   // this.handleSubmitAddress = this.handleSubmitAddress.bind(this);
  // }
  // state = {
  //   streetAddress: this.props.streetAddress,
  //   sAddress2: this.props.sAddress2,
  //   zip: this.props.zip,
  //   city: this.props.city,
  //   State: this.props.State
  // };

  // componentDidMount() {
  //   this.autocomplete = new google.maps.places.Autocomplete(
  //     document.getElementById("autocomplete"),
  //     {}
  //   );

  //   this.autocomplete.addListener("place_changed", this.handlePlaceSelect);
  // }

  // handlePlaceSelect() {
  //   let addressObject = this.autocomplete.getPlace();
  //   let address = addressObject.address_components;
  //   //   this.setState({
  //   //     name: addressObject.name,
  //   //     sAddress: `${address[0].long_name} ${address[1].long_name}`,
  //   //     city: address[4].long_name,
  //   //     state: address[6].short_name,
  //   //     zipcode: address[8].short_name,
  //   //     googleMapLink: addressObject.url
  //   //   });
  //   this.setState({
  //     sAddress: `${address[0].long_name} ${address[1].long_name}`,
  //     sAddress2: address[2].long_name,
  //     city: address[3].long_name,
  //     state: address[5].short_name,
  //     zipcode: address[7].short_name
  //   });
  // }

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
