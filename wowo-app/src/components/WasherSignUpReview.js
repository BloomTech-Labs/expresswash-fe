import React, { Component } from 'react';
import { MDBTable, MDBTableBody, MDBBtn } from "mdbreact";
import '../App.css';

export class WasherSignUpReview extends Component {
  render() {
    const { values } = this.props;
    const nextBtn = () => this.props.nextStep();
    const prevBtn = () => this.props.prevStep();

    const displayField = field => {
      if(field) {
        if(field === "password") {
          return "(hidden)";
        } else {
          return field;
        }
      } else {
        return <span className="text-danger">missing</span>;
      }
    }
    return (
      <span>
        <MDBTable style={{ width: "85%", margin: "0 auto", textAlign: "left" }}>
          <MDBTableBody>
            <tr>
              <td>First Name:</td><td>{displayField(values.firstName)}</td>
            </tr>
            <tr>
              <td>Last Name:</td><td>{displayField(values.lastName)}</td>
            </tr>
            <tr>
              <td>Email:</td><td>{displayField(values.email)}</td>
            </tr>
            <tr>
              <td>Password:</td><td>{displayField(values.password)}</td>
            </tr>
            <tr>
              <td>Phone Number:</td><td>{displayField(values.phone)}</td>
            </tr>
            <tr>
              <td>Street Address:</td><td>{displayField(values.street)}</td>
            </tr>
            <tr>
              <td>Apt / Suite / Other:</td><td>{displayField(values.apt)}</td>
            </tr>
            <tr>
              <td>City:</td><td>{displayField(values.city)}</td>
            </tr>
            <tr>
              <td>State:</td><td>{displayField(values.usState)}</td>
            </tr>
            <tr>
              <td>Zip Code:</td><td>{displayField(values.zipCode)}</td>
            </tr>
          </MDBTableBody>
        </MDBTable>
        <div className="text-center">
          <MDBBtn color="primary" onClick={prevBtn}>Back to edit</MDBBtn>
          <MDBBtn color="info" onClick={nextBtn}>Register!</MDBBtn>
        </div>
      </span>
    );
  }
};

export default WasherSignUpReview;