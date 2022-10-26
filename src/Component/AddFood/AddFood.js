import React from "react";
import bgImage from "../../asset/flat-lay-toys-with-food-bowl-fur-brush-dogs.jpg";
const AddFood = () => {
    const handleAddFood = (e) =>{
e.preventDefault()
const name = e.target.name.value;
const type = e.target.type.value;
const weight = e.target.weight.value;
const url = e.target.url.value;
const price = e.target.price.value;

const food = {name, type, weight,url,price}

    }
  return (
    <div className="">
      <div
        className="hero min-h-screen bg-base-200 py-20"
        style={{ backgroundImage: `url(${bgImage})` }}
        >
        <form className="grid grid-cols-3" onSubmit={handleAddFood}>
          <div>
          <h1 className="text-black text-5xl">Add Some New Food.</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Food Name</span>
            </label>
            <input
              type="text"
              name="name"
              className="input input-bordered  "
              placeholder="Name of the food"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Animal Type</span>
            </label>
            <input
              type="text"
              name="type"
              className="input input-bordered  "
              placeholder="Type of animal"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Weight</span>
            </label>
            <input
              type="text"
              className="input input-bordered  "
              name="weight"
              placeholder="Foods weight"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">URL</span>
            </label>
            <input
              type="text"
              className="input input-bordered  "
              name="url"
              placeholder="Foods image url"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              className="input input-bordered  "
              placeholder="Foods price in BDT"
              required
            />
          </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFood;
