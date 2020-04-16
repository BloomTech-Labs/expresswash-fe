import React, { Component } from "react";
import { MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
/* global google */

export class WasherSignUpAddress extends Component {
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
    let { setAutoAddress } = this.props;
    let addressObject = this.autocomplete.getPlace();
    let address = addressObject.address_components;
    const newAddress = {}
    newAddress.street = ((address[0].long_name !== undefined) ? `${address[0].long_name} ${address[1].long_name}` : "");
    newAddress.city = ((address[3].long_name !== undefined) ? address[3].long_name : "");
    newAddress.usState = ((address[5].short_name !== undefined) ? address[5].short_name : "");
    newAddress.zipCode = ((address[7].short_name !== undefined) ? address[7].short_name : "");
    setAutoAddress(newAddress);
  }

  render() {
    const { values } = this.props;
    const { handleChange } = this.props;
    const nextBtn = evt => {
      evt.preventDefault();
      this.props.nextStep();
    };
    const prevBtn = () => this.props.prevStep();
    return (
      <span>
        <form onSubmit={nextBtn}>
          <MDBInput
            name="phone"
            type="tel"
            onChange={handleChange}
            label="Phone Number"
            value={values.phone}
            required
          />
          <div className="md-form">
            <input id="autocomplete" data-test="input" name="searchAddress" type="text" className="form-control" placeholder="Address Search.." autoComplete="off" />
          </div>
          <MDBInput
            name="street"
            type="text"
            onChange={handleChange}
            label="Street Address"
            value={values.street}
            required
          />
          <MDBRow>
            <MDBCol md="6">
              <MDBInput
                name="apt"
                type="text"
                onChange={handleChange}
                label="Apt / Suite / Other"
                value={values.apt}
              />
            </MDBCol>
            <MDBCol md="6">
              <MDBInput
                name="city"
                type="text"
                onChange={handleChange}
                label="City"
                value={values.city}
                required
              />
            </MDBCol>
            <MDBCol md="6">
              <MDBInput
                name="usState"
                type="text"
                onChange={handleChange}
                label="State"
                value={values.usState}
                required
              />
            </MDBCol>
            <MDBCol md="6">
              <MDBInput
                name="zipCode"
                type="number"
                onChange={handleChange}
                label="Zip Code"
                value={values.zipCode}
                required
              />
            </MDBCol>
          </MDBRow>
          <MDBBtn color="primary" onClick={prevBtn}>
            Back
          </MDBBtn>
          <MDBBtn type="submit" color="info">
            Continue
          </MDBBtn>
        </form>
      </span>
    );
  }
}

export default WasherSignUpAddress;
