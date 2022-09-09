import React from "react";

const HomeAbout = () => {
  return (
    <div className="grid lg:grid-cols-2 px-10 lg:mt-[250px]">
      <div>
        <img
          className="w-[]"
          src="https://preview.colorlib.com/theme/petsitting/images/xabout-1.jpg.pagespeed.ic.LOIMqCY48Q.webp"
          alt=""
        />
      </div>
      <div className="mt-20">
        <h1 className="text-3xl mb-5">Dog.</h1>
        <h1 className="text-xl leading-5">We have available many kind of dogs. We have <span className="text-sm text-red-400">German Shepherd,Bulldog,Labrador Retriever,Golden Retriever,Poodle,Chihuahua,Siberian Husky,French Bulldog, Afghan Hound</span> </h1>
        <h1>
        Dogs are domesticated mammals, not natural wild animals. They were originally bred from wolves. They have been bred by humans for a long time and were the first animals ever to be domesticated. Remains dating to 30,000 years ago have been described as "Paleolithic dogs". Their status as dogs or wolves is unclear.Considerable morphological diversity existed among wolves in the Late Pleistocene. The dingo is also a dog, but many dingos have become wild animals again and live independently of humans in the range where they occur. So you should Buy a dog.
        </h1>
        <button className="btn btn-error btn-wide text-white my-10">Buy a Dog</button>

      </div>
    </div>
  );
};

export default HomeAbout;
