import React from "react";
import banner from "../../../asset/banner.webp"

const Banner = () => {
  return (
<div className="hero min-h-screen bg-fixed" style={{
       backgroundImage: `url(${banner})`,
    }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="w-[70%] mx-auto">
      <h1 className="mb-5 text-5xl font-bold text-white">Hello there</h1>
      <p className="mb-5 text-white">We sell various kind of pets. You can also send your pets for selling We have more then 1000+ pets. Also we have pets foots, clothes,
           medicine And many other items we have. Properly visit our site and
           enjoy it.</p>
      <button className="btn btn-outline text-white btn-wide hover:bg-green-400 mt-[30px]"> Success</button>
    </div>
  </div>
</div>
  );
};

export default Banner;
