import React, { Component } from "react";
import { Link } from "react-router-dom";

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

class Payment extends Component {
  constructor() {
    super();
    this.state = {
      cardNumber: "",
      cardName: "",
      expMonth: "",
      expYear: "",
      cvc: "",
      modal: false
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
                <MDBModalHeader
                  style={{ width: "100%" }}
                  // class="d-flex justify-content-between"
                >
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
