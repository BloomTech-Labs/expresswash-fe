import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import '../App.css';

export class WasherSignUpAddress extends Component {
  render() {
    const { values, handleChange } = this.props;
    const nextBtn = () => this.props.nextStep();
    const prevBtn = () => this.props.prevStep();
    return (
      <span>
        <MDBInput
          name="phone"
          type="tel"
          onChange={handleChange('phone')}
          label="Phone Number"
          value={values.phone}
        />
        <MDBInput
          name="street"
          type="text"
          onChange={handleChange('street')}
          label="Street Address"
          value={values.street}
        />
        <MDBRow>
        <MDBCol md="6">
            <MDBInput
              name="apt"
              type="text"
              onChange={handleChange('apt')}
              label="Apt / Suite / Other"
              value={values.apt}
            />
          </MDBCol>
          <MDBCol md="6">
            <MDBInput
              name="city"
              type="text"
              onChange={handleChange('city')}
              label="City"
              value={values.city}
            />
          </MDBCol>
          <MDBCol md="6">
            <MDBInput
              name="usState"
              type="text"
              onChange={handleChange('usState')}
              label="State"
              value={values.usState}
            />
          </MDBCol>
          <MDBCol md="6">
            <MDBInput
              name="zipCode"
              type="number"
              onChange={handleChange('zipCode')}
              label="Zip Code"
              value={values.zipCode}
            />
          </MDBCol>
        </MDBRow>
        <div className="text-center">
          <MDBBtn color="primary" onClick={prevBtn}>Back</MDBBtn>
          <MDBBtn color="info" onClick={nextBtn}>Continue</MDBBtn>
        </div>
      </span>
    );
  }
};

export default WasherSignUpAddress;