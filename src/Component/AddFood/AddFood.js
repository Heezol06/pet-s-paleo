import React from "react";
import bgImage from "../../asset/flat-lay-toys-with-food-bowl-fur-brush-dogs.jpg";
const AddFood = () => {
  return (
    <div className="mt-20 py-20">
      <h1>Add Some New Food.</h1>
      <div
        className="hero min-h-screen bg-base-200"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <form className="text-start">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
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
              <span className="label-text">Email</span>
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
              <span className="label-text">Email</span>
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
              <span className="label-text">Email</span>
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
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              name="price"
              className="input input-bordered  "
              placeholder="Foods price in BDT"
              required
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFood;
