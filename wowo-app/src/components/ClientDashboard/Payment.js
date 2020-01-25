import React, { Component } from "react";
import { Link } from "react-router-dom";

import { MDBCard, MDBCotainer, MDBModal, MDBInput } from "mdbreact";

class Payment extends Component {
  constructor() {
    this.state = {
      cardNumber: "",
      cardName: "",
      expMonth: "",
      expYear: "",
      cvc: ""
    };
  }
  render() {
    return(
      <>
      </>
    )
  }
}

export default Payment;
