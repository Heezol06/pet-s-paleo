import React from "react";
import { Link, Outlet } from "react-router-dom";
import dogFood from "../../asset/bone.png";
import Catagories from "../../asset/icons/grid (1).png";
import CatFood from "../../asset/cat-food.png";
import BirdFood from "../../asset/bird-food.png";
import FishFood from "../../asset/fish-food.png";

const Shop = () => {
  return (
    <div className="flex mt-[64px]">
      <div className="">
        <div className="fixed top-96 right-1 rounded-lg p-3 text-black bg-green-200">
          <div className="flex flex-col items-center">
          <img src="https://cdn-icons-png.flaticon.com/512/833/833572.png" className="w-12" alt="" />
          <label htmlFor="my-modal-6" className="text-4xl modal-button">
            Item 0
          <h1 className="bg-white px-5 my-1 text-sm">৳ 0</h1>
          </label>
          </div>
          <input type="checkbox" id="my-modal-6" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <h3 className="font-bold text-lg">
                Congratulations random Internet user!
              </h3>
              <p className="py-4">
                You've been selected for a chance to get one year of
                subscription to use Wikipedia for free!
              </p>
              <div className="modal-action">
                <label htmlFor="my-modal-6" className="btn">
                  Yay!
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* lg device  */}
        <div class=" bg-green-100 lg:flex sm:hidden sticky top-8">
          <div class="flex flex-row justify-between">
            <div class="w-72 h-screen">
              <div class="flex items-center justify-start mx-6 mt-10">
                <img class="h-10 bg-gray-600" src={Catagories} alt="/" />
                <span class="text-gray-600 ml-4 text-2xl font-bold">
                  Catagories
                </span>
              </div>
              <nav class="mt-10 px-6 ">
                <Link
                  to=""
                  class=" hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-5  transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-800 dark:text-gray-100 rounded-lg bg-gray-100 dark:bg-gray-600"
                >
                  <div className="flex">
                    <img src={dogFood} className="w-8" alt="" />
                    <span className="mx-4 text-lg font-normal">
                      All Products
                    </span>
                  </div>
                </Link>
                <Link
                  to="dogFood"
                  class=" hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-5  transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-800 dark:text-gray-100 rounded-lg bg-gray-100 dark:bg-gray-600"
                >
                  <div className="flex">
                    <img src={dogFood} className="w-8" alt="" />
                    <span className="mx-4 text-lg font-normal">Dog Food</span>
                  </div>
                </Link>
                <Link
                  to="catFood"
                  class="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2  my-5 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-800 dark:text-gray-100 rounded-lg bg-gray-100 dark:bg-gray-600"
                  href="/"
                >
                  <div className="flex">
                    <img src={CatFood} className="w-8" alt="" />
                    <span class="mx-4 text-lg font-normal">Cat Food</span>
                  </div>
                </Link>
                <Link
                  to="birdFood"
                  class="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2  my-5 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-800 dark:text-gray-100 rounded-lg bg-gray-100 dark:bg-gray-600"
                  href="/"
                >
                  <div className="flex">
                    <img src={BirdFood} className="w-8" alt="" />
                    <span class="mx-4 text-lg font-normal">Bird Food</span>
                  </div>
                </Link>
                <Link
                  to="fishFood"
                  class="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2  my-5 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-800 dark:text-gray-100 rounded-lg bg-gray-100 dark:bg-gray-600"
                  href="/"
                >
                  <div className="flex">
                    <img src={FishFood} className="w-8" alt="" />
                    <span class="mx-4 text-lg font-normal">Fish Food</span>
                  </div>
                </Link>
              </nav>
              <div class="absolute bottom-28">
                <a
                  class="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-200 flex items-center py-2 px-8"
                  href="/"
                >
                  <svg
                    width="20"
                    fill="currentColor"
                    height="20"
                    class="h-5 w-5"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1088 1256v240q0 16-12 28t-28 12h-240q-16 0-28-12t-12-28v-240q0-16 12-28t28-12h240q16 0 28 12t12 28zm316-600q0 54-15.5 101t-35 76.5-55 59.5-57.5 43.5-61 35.5q-41 23-68.5 65t-27.5 67q0 17-12 32.5t-28 15.5h-240q-15 0-25.5-18.5t-10.5-37.5v-45q0-83 65-156.5t143-108.5q59-27 84-56t25-76q0-42-46.5-74t-107.5-32q-65 0-108 29-35 25-107 115-13 16-31 16-12 0-25-8l-164-125q-13-10-15.5-25t5.5-28q160-266 464-266 80 0 161 31t146 83 106 127.5 41 158.5z"></path>
                  </svg>
                  <span class="mx-4 font-medium">Support</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* sm device  */}
        <div class="flex flex-row h-full lg:hidden sticky top-8">
          <nav class="bg-green-100 w-20 h-screen justify-between flex flex-col">
            <div class="mt-10 mb-10 flex justify-center flex-col items-center">
              <img class="h-10 bg-gray-600" src={Catagories} alt="/" />
              <div class="mt-10">
                <ul className="flex justify-center flex-col items-center">
                  <Link
                    to="dogFood"
                    class=" hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-5  transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-800 dark:text-gray-100 rounded-lg bg-gray-100 dark:bg-gray-600"
                  >
                    <div className="flex">
                      <img src={dogFood} className="w-8" alt="" />
                    </div>
                  </Link>
                  <Link
                    to="catFood"
                    class="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2  my-5 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-800 dark:text-gray-100 rounded-lg bg-gray-100 dark:bg-gray-600"
                    href="/"
                  >
                    <div className="flex">
                      <img src={CatFood} className="w-8" alt="" />
                    </div>
                  </Link>
                  <Link
                    to="birdFood"
                    class="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2  my-5 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-800 dark:text-gray-100 rounded-lg bg-gray-100 dark:bg-gray-600"
                    href="/"
                  >
                    <div className="flex">
                      <img src={BirdFood} className="w-8" alt="" />
                    </div>
                  </Link>
                  <Link
                    to="fishFood"
                    class="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2  my-5 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-800 dark:text-gray-100 rounded-lg bg-gray-100 dark:bg-gray-600"
                    href="/"
                  >
                    <div className="flex">
                      <img src={FishFood} className="w-8" alt="" />
                    </div>
                  </Link>
                </ul>
              </div>
            </div>
            <div class="mb-4">
              <a href="/">
                <span>
                  <svg
                    class="fill-current h-5 w-5 text-gray-300 mx-auto hover:text-red-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 4.00894C13.0002 3.45665 12.5527 3.00876 12.0004 3.00854C11.4481 3.00833 11.0002 3.45587 11 4.00815L10.9968 12.0116C10.9966 12.5639 11.4442 13.0118 11.9965 13.012C12.5487 13.0122 12.9966 12.5647 12.9968 12.0124L13 4.00894Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M4 12.9917C4 10.7826 4.89541 8.7826 6.34308 7.33488L7.7573 8.7491C6.67155 9.83488 6 11.3349 6 12.9917C6 16.3054 8.68629 18.9917 12 18.9917C15.3137 18.9917 18 16.3054 18 12.9917C18 11.3348 17.3284 9.83482 16.2426 8.74903L17.6568 7.33481C19.1046 8.78253 20 10.7825 20 12.9917C20 17.41 16.4183 20.9917 12 20.9917C7.58172 20.9917 4 17.41 4 12.9917Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
              </a>
            </div>
          </nav>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Shop;
