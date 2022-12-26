import React from "react";
import CountUp from "react-countup";
import animals from "../../../asset/love-birds.png";
import pet from "../../../asset/play-with-pet.png";
import petDoctor from "../../../asset/veterinarian-2.png";
const Counter = () => {
  return (
    <div className="bg-cover bg-no-repeat bg-inherit bg-fixed bg-gradient-to-r from-green-100 to-green-400 lg:h-56 h-auto block lg:flex lg:justify-around lg:items-center mb-10 py-10 lg:py-0">
      <div className=" flex items-center flex-col">
        <img src={animals} className="w-28" alt="" />
        <h1 className="text-5xl font-bold">
          <CountUp className="text-5xl font-bold" delay={3} end={4800} /> +
        </h1>
        <h1 className="text-xl">Total Animals</h1>
      </div>
      <div className="flex items-center flex-col">
        <img src={petDoctor} className="w-28" alt="" />
        <h1 className="text-5xl font-bold">
          <CountUp className="text-5xl font-bold" delay={3} end={8760} /> +
        </h1>
        <h1 className="text-xl">Got Patient</h1>
      </div>
      <div className="flex items-center flex-col">
        <img src={pet} className="w-28" alt="" />
        <h1 className="text-5xl font-bold">
          <CountUp className="text-5xl font-bold" delay={3} end={4800} /> +
        </h1>
        <h1 className="text-xl">Happy Customer</h1>
      </div>
    </div>
  );
};

export default Counter;
