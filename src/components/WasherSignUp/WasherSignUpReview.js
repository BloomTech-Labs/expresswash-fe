import React, { Component } from 'react';
import { MDBAlert, MDBTable, MDBTableBody, MDBBtn } from "mdbreact";

export class WasherSignUpReview extends Component {
  render() {
    const { values, submitError } = this.props;
    const handleSubmit = () => this.props.handleSubmit();
    const prevBtn = () => this.props.prevStep();
    
    const displayField = (name, field) => {
      if(field) {
        return (
          <tr>
            <td>{name}:</td><td>{field}</td>
          </tr>
        )
      }
    }
    return (
      <span>
        {(submitError && (submitError.errno = "19")) &&
          <MDBAlert color="danger">
            The email address {values.email} is already in use. Please try another email or login.
          </MDBAlert>
        }
        <MDBTable style={{ width: "85%", margin: "0 auto", textAlign: "left" }}>
          <MDBTableBody>
            {displayField("First Name", values.firstName)}
            {displayField("Last Name", values.lastName)}
            {displayField("Email", values.email)}
            {displayField("Phone", values.phone)}
            {displayField("Street Address", values.street)}
            {displayField("Apt / Suite / Other", values.apt)}
            {displayField("City", values.city)}
            {displayField("State", values.usState)}
            {displayField("Zip Code", values.zipCode)}
          </MDBTableBody>
        </MDBTable>
        <div className="text-center">
          <MDBBtn color="primary" onClick={prevBtn}>Back to edit</MDBBtn>
          <MDBBtn color="info" onClick={handleSubmit}>Register!</MDBBtn>
        </div>
      </span>
    );
  }
};

export default WasherSignUpReview;