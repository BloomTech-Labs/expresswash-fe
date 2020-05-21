import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
<<<<<<< HEAD
import axios from "axios";
=======
>>>>>>> d1b3b9b2919d81075e6883699478af817cda4853

function Payment() {
  const [product, setProduct] = useState({
    name: "Car Wash",
    price: 40,
<<<<<<< HEAD
  });

  function makePayment(token) {
=======
    productBy: "Washer Name",
  });

  const makePayment = (token) => {
>>>>>>> d1b3b9b2919d81075e6883699478af817cda4853
    const body = {
      token,
      product,
    };
    const headers = {
      "Content-Type": "application/json",
    };
<<<<<<< HEAD
    return axios
      .post(`http://localhost:3300/users/payment`, body)
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => console.log(err.message));
  }
=======
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
>>>>>>> d1b3b9b2919d81075e6883699478af817cda4853

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
