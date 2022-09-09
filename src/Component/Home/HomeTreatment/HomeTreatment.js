import React from "react";
import treatment from "../../../asset/treatment.jpg"
import stethoscope from "../../../asset/stethoscope.png"
import service from "../../../asset/customer-service.png"
import emergency from "../../../asset/emergency-call.png"
import veterinarian from "../../../asset/veterinarian.png"

const HomeTreatment = () => {
  return (
    <div className="grid lg:grid-cols-2 pr-10 shadow-sm mt-5">
      <div className="bg-cover bg-no-repeat hero h-96 w-full  bg-fixed" style={{backgroundImage:`url(${treatment})`}}>
        {/* <img
          className="bg-fixed"
          src={treatment}
          alt=""
        /> */}
      </div>
        <div>
        <h1 className="text-4xl">Why Our Treatment</h1>
      <div className="grid lg:grid-cols-2 ml-5 my-10">
        <div className="sm:my-5">
          <div className="bg-green-200 rounded-full h-14 w-14 p-1 mx-auto">
          <img
            class=" h-10 w-10 rounded-full object-cover "
            src={stethoscope}
            alt="profile"
          />
          </div>
          <div>
            <h1 className="text-2xl">Care Advices</h1>
            <p className="px-1">Far far away, behind the word mountains, far from the countries.</p>
          </div>
        </div>
        <div className="sm:my-5">
          <div className="bg-green-200 rounded-full h-14 w-14 p-1 mx-auto">
          <img
            class=" h-10 w-10 rounded-full object-cover "
            src={service}
            alt="profile"
          />
          </div>
          <div>
            <h1 className="text-2xl">Customer Supports</h1>
            <p className="px-1">Far far away, behind the word mountains, far from the countries.</p>
          </div>
        </div>
        <div className="my-5">
          <div className="bg-green-200 rounded-full h-14 w-14 p-1 mx-auto">
          <img
            class=" h-10 w-10 rounded-full object-cover "
            src={emergency}
            alt="profile"
          />
          </div>
          <div>
            <h1 className="text-2xl">Emergency Services</h1>
            <p className="px-1">Far far away, behind the word mountains, far from the countries.</p>
          </div>
        </div>
        <div className="my-5">
          <div className="bg-green-200 rounded-full h-14 w-14 p-1 mx-auto">
          <img
            class=" h-10 w-10 rounded-full object-cover "
            src={veterinarian}
            alt="profile"
          />
          </div>
          <div>
            <h1 className="text-2xl">Veterinary Help</h1>
            <p className="px-1">Far far away, behind the word mountains, far from the countries.</p>
          </div>
        </div>
      </div>
        </div>
    </div>
  );
};

export default HomeTreatment;
