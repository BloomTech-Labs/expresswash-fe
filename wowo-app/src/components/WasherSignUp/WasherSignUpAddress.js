import React, { Component } from "react";
import { MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
/* global google */

export class WasherSignUpAddress extends Component {
  constructor(props) {
    super(props);
    this.handlePlaceSelect = this.handlePlaceSelect.bind(this);
    this.autocomplete = null;
  }

  state = {
    phone: this.props.phone,
    street: this.props.street,
    apt: this.props.apt,
    zipCode: this.props.zipCode,
    city: this.props.city,
    usState: this.props.usState
  };

  componentDidMount() {
    this.autocomplete = new google.maps.places.Autocomplete(
      document.getElementById("autocomplete"),
      {}
    );

    this.autocomplete.addListener("place_changed", this.handlePlaceSelect);
  }

  handlePlaceSelect() {
    // let { values } = this.props;
    const { phone, street, apt, zipCode, city, usState } = this.state;
    const values = { phone, street, apt, zipCode, city, usState };
    let addressObject = this.autocomplete.getPlace();
    let address = addressObject.address_components;
    console.log(address);
    // values = {
    //   ...values,
    //   street: `${address[0].long_name} ${address[1].long_name}`,
    //   apt: address[2].long_name,
    //   city: address[3].long_name,
    //   usState: address[5].short_name,
    //   zipCode: address[7].short_name,
    // }
    // values.street = `${address[0].long_name} ${address[1].long_name}`;
    // values.apt = address[2].long_name;
    // values.city = address[3].long_name;
    // values.usState = address[5].short_name;
    // values.zipCode = address[7].short_name;
    this.props.handleChange("street");
    console.log("this is the values", values);
    this.setState({
      street: `${address[0].long_name} ${address[1].long_name}`,
      apt: address[2].long_name,
      city: address[3].long_name,
      usState: address[5].short_name,
      zipCode: address[7].short_name
    });
  }

  render() {
    const { phone, street, apt, zipCode, city, usState } = this.state;
    const values = { phone, street, apt, zipCode, city, usState };
    // const { values } = this.props;
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
            onChange={handleChange("phone")}
            label="Phone Number"
            value={values.phone}
            required
          />
          <input
            id="autocomplete"
            className="input-field"
            ref="input"
            type="text"
          />
          {/* <div class="md-form">
            <input id="autocomplete" data-test="input" name="searchAddress" type="text" class="form-control" />
            <label for="searchAddress" class="" data-error="" data-success="" id="">Search an Address</label>
          </div> */}
          {/* <MDBInput
            id="autocomplete"
            name="searchAddress"
            type="text"
          /> */}
          <MDBInput
            name="street"
            type="text"
            onChange={handleChange("street")}
            label="Street Address"
            value={values.street}
            required
          />
          <MDBRow>
            <MDBCol md="6">
              <MDBInput
                name="apt"
                type="text"
                onChange={handleChange("apt")}
                label="Apt / Suite / Other"
                value={values.apt}
              />
            </MDBCol>
            <MDBCol md="6">
              <MDBInput
                name="city"
                type="text"
                onChange={handleChange("city")}
                label="City"
                value={values.city}
                required
              />
            </MDBCol>
            <MDBCol md="6">
              <MDBInput
                name="usState"
                type="text"
                onChange={handleChange("usState")}
                label="State"
                value={values.usState}
                required
              />
            </MDBCol>
            <MDBCol md="6">
              <MDBInput
                name="zipCode"
                type="number"
                onChange={handleChange("zipCode")}
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
