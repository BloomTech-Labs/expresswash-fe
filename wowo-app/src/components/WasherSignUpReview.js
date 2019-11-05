import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import { MDBProgress } from 'mdbreact';
import '../App.css';

export class WasherSignUpReview extends Component {
  render() {
    const { values } = this.props;
    const nextBtn = () => this.props.nextStep();
    const prevBtn = () => this.props.prevStep();
    return (
      <span>
        <h1>Review</h1>
        <div className="text-center">
          <MDBBtn color="info" onClick={prevBtn}>Back</MDBBtn>
          <MDBBtn color="primary" onClick={nextBtn}>Register!</MDBBtn>
        </div>
      </span>
    );
  }
};

export default WasherSignUpReview;