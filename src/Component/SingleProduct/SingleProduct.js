import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const [food, setFood] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const url = `http://localhost:5000/allFood/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFood(data));
  }, []);
  return (
    <div className="my-20">
      <div className="lg:grid lg:grid-cols-2">
        <div>
          <img src={food.img} alt="" />
        </div>
        <div>
          <h1>Products:{food.name} </h1>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
