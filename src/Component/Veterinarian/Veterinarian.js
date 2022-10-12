import React, { useEffect, useState } from "react";
import { FaFacebookF } from 'react-icons/fa';

const Veterinarian = () => {
  const [dogFoods, setDogFoods] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setDogFoods(data));
  }, []);
  console.log(dogFoods);
  return (
    <div>
      <h1>this is Veterinarian</h1>

      <div>
        <div class="p-4">
          <p class="text-center text-3xl font-bold text-gray-800">
            Professional team
          </p>
          <p class="text-center mb-32 text-xl font-normal text-gray-500">
            Meat the best team in wolrd
          </p>
          <div class="flex items-center space-y-24 md:space-y-0 flex-col md:flex-row justify evenly">
            <div class="p-4 relative">
              <div class="text-center mb-4 absolute -top-16 right-1/2 transform translate-x-1/2">
                <a href="/" class="block relative">
                  <img
                    alt="profil"
                    src="https://preview.colorlib.com/theme/petsitting/images/staff-1.jpg.webp"
                    class="mx-auto object-cover rounded-lg h-40 w-40  border-2 border-white dark:border-gray-800"
                  />
                </a>
              </div>
              <div class="bg-white dark:bg-gray-800 rounded-lg shadow px-8 py-4 pt-24">
                <div class="text-center">
                  <p class="text-2xl text-gray-800 dark:text-white">
                    Patrick Sebastien
                  </p>
                  <p class="text-xl text-gray-500 dark:text-gray-200 font-light">
                    Developpeur
                  </p>
                  <p class="text-md text-gray-500 w-60 dark:text-gray-400 mx-auto py-4 font-light">
                    Patrick Sébastien, born November 14, 1953 in
                    Brive-la-Gaillarde, is an imitator.
                  </p>
                </div>
                <div class="pt-8 flex border-t border-gray-200 w-40 mx-auto text-gray-500 items-center justify-between">
                  <FaFacebookF/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Veterinarian;
