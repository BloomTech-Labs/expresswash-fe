import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

function Payment() {
  const [product, setProduct] = useState({
    name: "Car Wash",
    price: 40,
  });

  function makePayment(token) {
    const body = {
      token,
      product,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    return axios
      .post(`http://localhost:3300/users/payment`, body)
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => console.log(err.message));
  }

  return (
    <div className="payment">
      <StripeCheckout
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        token={makePayment}
        name="Pay Now"
        amount={product.price * 100}
      />
    </div>
  );
}

export default Payment;
