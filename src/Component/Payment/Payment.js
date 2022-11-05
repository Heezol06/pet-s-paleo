// import { useQuery } from '@tanstack/react-query';
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51JwmF1GL4k4AAeeN7uCZU918ITa12LxUK4zLqbyTzw5Om4lK6iP9Mg1vQpYJNhcYUkgKl9D0uglaia0L7JKzfWuP009mHtRhHe"
);

const Payment = () => {
  const { id } = useParams();
  const [product, setProduct] = useState("");
  const url = `http://localhost:5000/payment/${id}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div className="mt-20 grid grid-cols-2 py-12 bg-green-50">
      <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12 mx-auto">
        <div className="card-body">
          <h2 className="card-title">Please Pay For {product.name}</h2>
          <p>Weight: {product.weight}</p>
            <img src={product.img} className="w-36 flex justify-center mx-auto" alt="" />
          <div className="card-actions justify-end">
            <p>Please Pay: ৳{product.price}</p>
          </div>
        </div>
      </div>
      <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
      <figure><img src="https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" alt="Shoes" /></figure>

        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
