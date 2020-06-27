import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { DB_URL } from '../../../../actions/actionTypes';

function Payment() {
  const [product, setProduct] = useState({
    name: 'Car Wash',
    price: 40,
  });

  function makePayment(token) {
    const body = {
      token,
      product,
    };
    const headers = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + process.env.REACT_APP_STRIPE_KEY,
      },
    };
    return axios
      .post(`${DB_URL}/users/payment`, body, headers)
      .then((res) => {})
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
