import React, { Component } from "react";
import { Link } from "react-router-dom";

// import CardSection from "../PaymentForm/CardSection.js";
// // import axios from "axios";
// // import StripeCheckout from "react-stripe-checkout";

// // import { CardForm } from "react-payment";

import {
  MDBCard,
  MDBContainer,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBModal,
  MDBInput,
  MDBModalHeader,
  MDBModalFooter,
  MDBModalBody,
  MDBIcon
} from "mdbreact";
// import {
//   CardNumberElement,
//   CardExpiryElement,
//   CardCVCElement,
//   injectStripe,
//   StripeProvider,
//   Elements
// } from "react-stripe-elements";

// const key = "pk_test_mQhojg0R35ocFaipB5FGHUu200nPRkYT5F";

class Payment extends Component {
  constructor() {
    super();
    this.state = {
      cardNumber: "",
      cardName: "",
      expMonth: "",
      expYear: "",
      cvc: "",
      modal: false,
      errorMessage: ""
    };
  }


  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
  changeHandler = evt => {
    evt.preventDefault();
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };
  submitHandler = evt => {
    evt.preventDefault();
  };

  render() {
    const { cardNumber, cardName, expMonth, expYear, cvc } = this.state;
    return (
      <MDBContainer>
        {/* <CardSection /> */}
        {/* <form>
          <CardNumberElement />
        </form> */}
        <MDBCard>
          <MDBCardTitle>
            <Link to="/clientDash/navigation">
              <div
                class="d-flex justify-content-start"
                style={{ paddingTop: "3%" }}
                style={{ paddingLeft: "3%" }}
              >
                <MDBIcon icon="arrow-left" />
              </div>
            </Link>
            <p>Payment Methods:</p>
          </MDBCardTitle>
          <MDBCardText>
            <p class="d-flex align-items-start" style={{ paddingLeft: "1%" }}>
              payment methods:
            </p>

            <MDBBtn onClick={this.toggle}>Add Payment Method</MDBBtn>

            <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
              <form onSubmit={this.submitHandler}>
                <MDBModalHeader style={{ width: "100%" }}>
                  Add Payment
                  <MDBIcon
                    icon="times"
                    onClick={this.toggle}
                    class="d-flex justify-content-end"
                  />
                  {/* <div class="d-flex justify-content-end">
                    <MDBIcon icon="times" onClick={this.toggle} />
                  </div> */}
                </MDBModalHeader>
                <MDBModalBody>
                  <MDBInput
                    name="cardName"
                    label="Name on Card"
                    type="text"
                    value={cardName}
                    onChange={this.changeHandler}
                  />
                  <MDBInput
                    name="cardNumber"
                    label="Card Number"
                    type="number"
                    value={cardNumber}
                    onChange={this.changeHandler}
                  />

                  <MDBInput
                    name="expMonth"
                    label="Exp Month"
                    type="number"
                    value={expMonth}
                    onChange={this.changeHandler}
                  />
                  <MDBInput
                    name="Exp Year"
                    label="EXP Year"
                    type="number"
                    value={expYear}
                    onChange={this.changeHandler}
                  />
                  <MDBInput
                    name="cvc"
                    label="cvc"
                    type="number"
                    value={cvc}
                    onChange={this.changeHandler}
                  />
                  <MDBInput
                    label="billing address"
                    onChange={this.changeHandler}
                  />
                  <MDBInput
                    name="zipCode"
                    label="zipcode"
                    type="number"
                    onChange={this.changeHandler}
                  />
                </MDBModalBody>
                <MDBModalFooter>
                  <MDBBtn type="submit">Save Changes</MDBBtn>
                </MDBModalFooter>
              </form>
            </MDBModal>
            <MDBInput label="Enter promotion code" type="text" />
          </MDBCardText>
        </MDBCard>
      </MDBContainer>
    );

  }
}

export default Payment;
