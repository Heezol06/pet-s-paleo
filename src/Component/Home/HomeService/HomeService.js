import React from "react";
import animals from "../../../asset/pet-house.png";
import food from "../../../asset/pet-bowl.png";
import Doctor from "../../../asset/veterinary.png";

const HomeService = () => {
  return (
    <div className="block lg:flex justify-center pb-10 mt-[-80px]">
      <div class="max-h-screen relative bg-white shadow-lg w-80 h-[350px] rounded-lg flex items-center  flex-col hover:bg-[#00bd56] hover:text-white ">
        <div class="absolute -top-10">
          <img
            class=" h-24 w-24 rounded-3xl object-cover "
            src={animals}
            alt="profile"
          />
        </div>
        <div class="mt-16 flex items-center flex-col justify-center">
          <h1 class="font-bold text-2xl mt-4  ">Choice Your Pet</h1>
          <p class="font-semibold text-sm text-black">
            Items Available: Cat,Dog,Bird,Fish
          </p>
          <p class="text-center mt-4 px-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            delectus doloribus nemo eligendi culpa hic voluptates rerum aut
            maiores unde totam, minima officiis voluptatem fugiat velit dolore,
            repellat inventore est nam odio enim. Incidunt, facere!
          </p>
        </div>
        <div class=" flex flex-row space-x-4 mt-11"></div>
      </div>
      <div class="mx-24 max-h-screen relative bg-white shadow-lg w-80 h-[350px] rounded-lg flex items-center  flex-col hover:bg-[#00bd56] hover:text-white ">
        <div class="absolute -top-10">
          <img
            class=" h-24 w-24 rounded-3xl object-cover "
            src={Doctor}
            alt="profile"
          />
        </div>
        <div class="mt-16 flex items-center flex-col justify-center">
          <h1 class="font-bold text-2xl mt-4  ">Best Treatment For pet's</h1>
          <p class="font-semibold text-sm text-black">
            Diseases: Canine,Rabies,Avian,Fin Rot{" "}
          </p>
          <p class="text-center mt-4 px-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            delectus doloribus nemo eligendi culpa hic voluptates rerum aut
            maiores unde totam, minima officiis voluptatem fugiat velit dolore,
            repellat inventore est nam odio enim. Incidunt, facere!
          </p>
        </div>
        <div class=" flex flex-row space-x-4 mt-11"></div>
      </div>
      <div class="max-h-screen relative bg-white shadow-lg w-80 h-[350px] rounded-lg flex items-center  flex-col hover:bg-[#00bd56] hover:text-white ">
        <div class="absolute -top-10">
          <img
            class=" h-24 w-24 rounded-3xl object-cover "
            src={food}
            alt="profile"
          />
        </div>
        <div class="mt-16 flex items-center flex-col justify-center">
          <h1 class="font-bold text-2xl mt-4  ">Healthy Food For pet's</h1>
          <p class="font-semibold text-sm text-black">
            Food: Cinnamon,Coconut,Almond,Cake Pop,Nyjer,Fish pellets{" "}
          </p>
          <p class="text-center mt-4 px-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            delectus doloribus nemo eligendi culpa hic voluptates rerum aut
            maiores unde totam, minima officiis voluptatem fugiat velit dolore,
            repellat inventore est nam odio enim. Incidunt, facere!
          </p>
        </div>
        <div class=" flex flex-row space-x-4 mt-11"></div>
      </div>
    </div>
  );
};

export default HomeService;
