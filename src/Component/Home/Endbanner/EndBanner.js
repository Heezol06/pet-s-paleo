import React from "react";
import footerImage from '../../../asset/chewy-gWzTum_yMCg-unsplash.jpg';

const EndBanner = () => {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${footerImage})` }}
    >
      <div className="bg-black w-full h-full bg-opacity-70"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="my-16">
          <h2 className="mb-5 text-5xl font-semibold capitalize">
            Bring your team together, <br />
            wherever they happen to be!
          </h2>
          <button className="btn red-bg capitalize rounded border-none text-white mt-5">
            create your workplace
          </button>
        </div>
      </div>
    </section>
  );
};

export default EndBanner;
