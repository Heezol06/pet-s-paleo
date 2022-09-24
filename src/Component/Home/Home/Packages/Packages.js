import React from "react";

const Packages = () => {
  return (
    <div className="bg-gray-100 my-20 py-20 mx-auto px-10">
        <h1 className="text-black text-4xl font-bold  mb-20">
        Affordable Packages
        </h1>
        <div className="lg:flex justify-between mx-auto">
      <div className="lg:w-[400px] lg:h-[800px] w-[300px] my-10 rounded-lg bg-white hover:shadow-lg lg:mx-10">
        <img
          src="https://preview.colorlib.com/theme/petsitting/images/xpricing-1.jpg.pagespeed.ic.inpf6q4jh2.jpg"
          className="rounded-lg"
          alt=""
        />
        <h1 className="text-xl text-green-400 font-semibold my-5">PERSONAL</h1>
        <h1 className="text-6xl">
          <sup className="text-3xl text-gray-400">$</sup>49{" "}
          <sub className="text-sm text-gray-400">/mos</sub>
        </h1>
        <div className="bg-gray-100 mt-10 mx-5 py-4">
          <p>5 Dog Walk</p>
        </div>
        <div className=" mx-5 py-4">
          <p>3 Vet Visit</p>
        </div>
        <div className="bg-gray-100 mx-5 py-4">
          <p>3 Pet Spa</p>
        </div>
        <div className=" mx-5 py-4">
          <p>Free Supports</p>
        </div>
        <button className="px-10 my-10 bg-green-500 rounded-sm py-5 text-white font-semibold">GET STARTED</button>
      </div>
      <div className="lg:w-[400px] lg:h-[800px] w-[300px] my-10 rounded-lg bg-white hover:shadow-lg">
        <img
          src="https://preview.colorlib.com/theme/petsitting/images/xpricing-2.jpg.pagespeed.ic.G6n7viuHPT.jpg"
          className="rounded-lg"
          alt=""
        />
        <h1 className="text-xl text-green-400 font-semibold my-5">BUSINESS</h1>
        <h1 className="text-6xl">
          <sup className="text-3xl text-gray-400">$</sup>79{" "}
          <sub className="text-sm text-gray-400">/mos</sub>
        </h1>
        <div className="bg-gray-100 mt-10 mx-5 py-4">
          <p>5 Dog Walk</p>
        </div>
        <div className=" mx-5 py-4">
          <p>3 Vet Visit</p>
        </div>
        <div className="bg-gray-100 mx-5 py-4">
          <p>3 Pet Spa</p>
        </div>
        <div className=" mx-5 py-4">
          <p>Free Supports</p>
        </div>
        <button className="px-10 my-10 bg-green-500 rounded-sm py-5 text-white font-semibold">GET STARTED</button>
      </div>
      <div className="lg:w-[400px] lg:h-[800px] w-[300px] my-10 rounded-lg bg-white hover:shadow-lg">
        <img
          src="https://preview.colorlib.com/theme/petsitting/images/xpricing-3.jpg.pagespeed.ic.LnFoKD0RKv.jpg"
          className="rounded-lg"
          alt=""
        />
        <h1 className="text-xl text-green-400 font-semibold my-5">ULTIMATE</h1>
        <h1 className="text-6xl">
          <sup className="text-3xl text-gray-400">$</sup>109{" "}
          <sub className="text-sm text-gray-400">/mos</sub>
        </h1>
        <div className="bg-gray-100 mt-10 mx-5 py-4">
          <p>5 Dog Walk</p>
        </div>
        <div className=" mx-5 py-4">
          <p>3 Vet Visit</p>
        </div>
        <div className="bg-gray-100 mx-5 py-4">
          <p>3 Pet Spa</p>
        </div>
        <div className=" mx-5 py-4">
          <p>Free Supports</p>
        </div>
        <button className="px-10 my-10 bg-green-500 rounded-sm py-5 text-white font-semibold">GET STARTED</button>
      </div>
      </div>
    </div>
  );
};

export default Packages;
