import React, { useEffect, useState } from "react";
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter, AiOutlineGoogle, AiOutlineInstagram } from 'react-icons/ai';

const Veterinarian = () => {
  const [dogFoods, setDogFoods] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setDogFoods(data));
  }, []);
  console.log(dogFoods);
  return (
    <div className="my-20">
      <div>
        <div class="p-4">
          <p class="text-center text-3xl font-bold text-gray-800">
            Professional team
          </p>
          <p class="text-center mb-32 text-xl font-normal text-gray-500">
            Meat the best team in wolrd
          </p>
         <div className="lg:flex justify-center my-28">
         <div class="lg:flex items-center space-y-24 md:space-y-0 flex-col md:flex-row justify evenly">
            <div class="p-4 relative my-20 lg:my-1">
              <div class="text-center mb-4 absolute -top-20 right-1/2 transform translate-x-1/2">
                <a href="/" class="block relative">
                  <img
                    alt="profil"
                    src="https://preview.colorlib.com/theme/petsitting/images/staff-1.jpg.webp"
                    class="mx-auto object-cover rounded-lg h-44 w-40  border-2 border-white dark:border-gray-800"
                  />
                </a>
              </div>
              <div class="bg-white rounded-lg shadow px-8 py-4 pt-24">
                <div class="text-center">
                  <p class="text-2xl text-gray-800 ">
                  Lloyd Wilson
                  </p>
                  <p class="text-3xl text-green-500 font-light">
                  Health Coach
                  </p>
                  <p class="text-md text-gray-500 w-60 dark:text-gray-400 mx-auto py-4 font-light">
                  I am an ambitious workaholic, but apart from that, pretty simple person.
                  </p>
                </div>
                <div class="pt-8 flex border-t border-gray-200 w-40 mx-auto text-gray-500 items-center justify-between">
                  <FaFacebookF/>
                  <AiOutlineTwitter/>
                  <AiOutlineGoogle/>
                  <AiOutlineInstagram/>
                </div>
              </div>
            </div>
            <div class="p-4 relative my-20 lg:my-1">
              <div class="text-center mb-4 absolute -top-20 right-1/2 transform translate-x-1/2">
                <a href="/" class="block relative">
                  <img
                    alt="profil"
                    src="https://preview.colorlib.com/theme/petsitting/images/staff-2.jpg.webp"
                    class="mx-auto object-cover rounded-lg h-45 w-40  border-2 border-white dark:border-gray-800"
                  />
                </a>
              </div>
              <div class="bg-white rounded-lg shadow px-8 py-4 pt-24 ">
                <div class="text-center">
                  <p class="text-2xl text-gray-800 ">
                  Rachel Parker
                  </p>
                  <p class="text-3xl text-green-500 font-light">
                  Life & Business Coach
                  </p>
                  <p class="text-md text-gray-500 w-60 dark:text-gray-400 mx-auto py-4 font-light">
                  I am an ambitious workaholic, but apart from that, pretty simple person.
                  </p>
                </div>
                <div class="pt-8 flex border-t border-gray-200 w-40 mx-auto text-gray-500 items-center justify-between">
                  <FaFacebookF/>
                  <AiOutlineTwitter/>
                  <AiOutlineGoogle/>
                  <AiOutlineInstagram/>
                </div>
              </div>
            </div>
            <div class="p-4 relative my-20 lg:my-1">
              <div class="text-center mb-4 absolute -top-20 right-1/2 transform translate-x-1/2">
                <a href="/" class="block relative">
                  <img
                    alt="profil"
                    src="https://preview.colorlib.com/theme/petsitting/images/staff-3.jpg.webp"
                    class="mx-auto object-cover rounded-lg h-44 w-40  border-2 border-white dark:border-gray-800"
                  />
                </a>
              </div>
              <div class="bg-white rounded-lg shadow px-8 py-4 pt-24">
                <div class="text-center">
                  <p class="text-2xl text-gray-800 ">
                  Ian Smith
                  </p>
                  <p class="text-3xl text-green-500 font-light">
                  Executive Coach
                  </p>
                  <p class="text-md text-gray-500 w-60 dark:text-gray-400 mx-auto py-4 font-light">
                  I am an ambitious workaholic, but apart from that, pretty simple person.
                  </p>
                </div>
                <div class="pt-8 flex border-t border-gray-200 w-40 mx-auto text-gray-500 items-center justify-between">
                  <FaFacebookF/>
                  <AiOutlineTwitter/>
                  <AiOutlineGoogle/>
                  <AiOutlineInstagram/>
                </div>
              </div>
            </div>
            <div class="p-4 relative my-20 lg:my-1">
              <div class="text-center mb-4 absolute -top-20 right-1/2 transform translate-x-1/2">
                <a href="/" class="block relative">
                  <img
                    alt="profil"
                    src="https://preview.colorlib.com/theme/petsitting/images/staff-4.jpg.webp"
                    class="mx-auto object-cover rounded-lg h-44 w-40  border-2 border-white dark:border-gray-800"
                  />
                </a>
              </div>
              <div class="bg-white rounded-lg shadow px-8 py-4 pt-24">
                <div class="text-center">
                  <p class="text-2xl text-gray-800 ">
                  Alicia Henderson
                  </p>
                  <p class="text-3xl text-green-500 font-light">
                  Health Coach
                  </p>
                  <p class="text-md text-gray-500 w-60 dark:text-gray-400 mx-auto py-4 font-light">
                  I am an ambitious workaholic, but apart from that, pretty simple person.
                  </p>
                </div>
                <div class="pt-8 flex border-t border-gray-200 w-40 mx-auto text-gray-500 items-center justify-between">
                  <FaFacebookF/>
                  <AiOutlineTwitter/>
                  <AiOutlineGoogle/>
                  <AiOutlineInstagram/>
                </div>
              </div>
            </div>
          </div>
         </div>
         <div className="lg:flex justify-center">
         <div class="lg:flex items-center space-y-24 md:space-y-0 flex-col md:flex-row justify evenly">
            <div class="p-4 relative my-20 lg:my-1">
              <div class="text-center mb-4 absolute -top-20 right-1/2 transform translate-x-1/2">
                <a href="/" class="block relative">
                  <img
                    alt="profil"
                    src="https://preview.colorlib.com/theme/petsitting/images/staff-5.jpg.webp"
                    class="mx-auto object-cover rounded-lg h-44 w-40  border-2 border-white dark:border-gray-800"
                  />
                </a>
              </div>
              <div class="bg-white rounded-lg shadow px-8 py-4 pt-24">
                <div class="text-center">
                  <p class="text-2xl text-gray-800 ">
                  Lloyd Wilson
                  </p>
                  <p class="text-3xl text-green-500 font-light">
                  Health Coach
                  </p>
                  <p class="text-md text-gray-500 w-60 dark:text-gray-400 mx-auto py-4 font-light">
                  I am an ambitious workaholic, but apart from that, pretty simple person.
                  </p>
                </div>
                <div class="pt-8 flex border-t border-gray-200 w-40 mx-auto text-gray-500 items-center justify-between">
                  <FaFacebookF/>
                  <AiOutlineTwitter/>
                  <AiOutlineGoogle/>
                  <AiOutlineInstagram/>
                </div>
              </div>
            </div>
            <div class="p-4 relative my-20 lg:my-1">
              <div class="text-center mb-4 absolute -top-20 right-1/2 transform translate-x-1/2">
                <a href="/" class="block relative">
                  <img
                    alt="profil"
                    src="https://preview.colorlib.com/theme/petsitting/images/staff-6.jpg.webp"
                    class="mx-auto object-cover rounded-lg h-45 w-40  border-2 border-white dark:border-gray-800"
                  />
                </a>
              </div>
              <div class="bg-white rounded-lg shadow px-8 py-4 pt-24 ">
                <div class="text-center">
                  <p class="text-2xl text-gray-800 ">
                  Rachel Parker
                  </p>
                  <p class="text-3xl text-green-500 font-light">
                  Life & Business Coach
                  </p>
                  <p class="text-md text-gray-500 w-60 dark:text-gray-400 mx-auto py-4 font-light">
                  I am an ambitious workaholic, but apart from that, pretty simple person.
                  </p>
                </div>
                <div class="pt-8 flex border-t border-gray-200 w-40 mx-auto text-gray-500 items-center justify-between">
                  <FaFacebookF/>
                  <AiOutlineTwitter/>
                  <AiOutlineGoogle/>
                  <AiOutlineInstagram/>
                </div>
              </div>
            </div>
            <div class="p-4 relative my-20 lg:my-1">
              <div class="text-center mb-4 absolute -top-20 right-1/2 transform translate-x-1/2">
                <a href="/" class="block relative">
                  <img
                    alt="profil"
                    src="https://preview.colorlib.com/theme/petsitting/images/staff-7.jpg.webp"
                    class="mx-auto object-cover rounded-lg h-44 w-40  border-2 border-white dark:border-gray-800"
                  />
                </a>
              </div>
              <div class="bg-white rounded-lg shadow px-8 py-4 pt-24">
                <div class="text-center">
                  <p class="text-2xl text-gray-800 ">
                  Ian Smith
                  </p>
                  <p class="text-3xl text-green-500 font-light">
                  Executive Coach
                  </p>
                  <p class="text-md text-gray-500 w-60 dark:text-gray-400 mx-auto py-4 font-light">
                  I am an ambitious workaholic, but apart from that, pretty simple person.
                  </p>
                </div>
                <div class="pt-8 flex border-t border-gray-200 w-40 mx-auto text-gray-500 items-center justify-between">
                  <FaFacebookF/>
                  <AiOutlineTwitter/>
                  <AiOutlineGoogle/>
                  <AiOutlineInstagram/>
                </div>
              </div>
            </div>
            <div class="p-4 relative my-20 lg:my-1">
              <div class="text-center mb-4 absolute -top-20 right-1/2 transform translate-x-1/2">
                <a href="/" class="block relative">
                  <img
                    alt="profil"
                    src="https://preview.colorlib.com/theme/petsitting/images/staff-8.jpg.webp"
                    class="mx-auto object-cover rounded-lg h-44 w-40  border-2 border-white dark:border-gray-800"
                  />
                </a>
              </div>
              <div class="bg-white rounded-lg shadow px-8 py-4 pt-24">
                <div class="text-center">
                  <p class="text-2xl text-gray-800 ">
                  Fred Henderson
                  </p>
                  <p class="text-3xl text-green-500 font-light">
                  Health Coach
                  </p>
                  <p class="text-md text-gray-500 w-60 dark:text-gray-400 mx-auto py-4 font-light">
                  I am an ambitious workaholic, but apart from that, pretty simple person.
                  </p>
                </div>
                <div class="pt-8 flex border-t border-gray-200 w-40 mx-auto text-gray-500 items-center justify-between">
                  <FaFacebookF/>
                  <AiOutlineTwitter/>
                  <AiOutlineGoogle/>
                  <AiOutlineInstagram/>
                </div>
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
