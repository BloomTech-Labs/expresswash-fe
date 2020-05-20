import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";

function Payment() {
  const [product, setProduct] = useState({
    name: "Car Wash",
    price: 40,
    productBy: "Washer Name",
  });

  const makePayment = (token) => {
    const body = {
      token,
      product,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    return fetch(`http://localhost:3300/users/payment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => console.log(err));
  };

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
