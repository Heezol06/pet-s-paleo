import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

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
    <div className="m-20 shadow-xl">
      <div className="lg:grid lg:grid-cols-3 px-10 pt-10">
        <div>
          <img src={food.img} className="w-[50%] border" alt="" />
        </div>
        <div className="text-start leading-6">
          <p className="text-primary text-xl">Food</p>
          <h1 className="text-3xl font-bold" style={{"fontFamily": "PT Serif , serif"}}>{food.name} </h1>
          <p className="text-sm font-bold my-3">Type: {food.type}</p>
          <div className="font-bold flex justify-start my-5">
          <p className="text-xl mr-10 ">Weight: {food.weight}</p>
          <p className="text-xl text-orange-500">Price: {food.price}</p>
          </div>
          <div>
          <button className="btn btn-outline">Small</button>
          <button className="btn btn-outline mx-5">Medium</button>
          <button className="btn btn-outline">Large</button>
          </div>
          <div className="my-10">
          <button className="btn btn-outline btn-success mr-5">Add To Card</button>
          <Link to={`/payment/${food._id}`}><button className="btn btn-outline btn-error">Buy Now</button></Link>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#bbf7d0" fill-opacity="1" d="M0,160L80,154.7C160,149,320,139,480,160C640,181,800,235,960,234.7C1120,235,1280,181,1360,154.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
    </div>
  );
};

export default SingleProduct;
