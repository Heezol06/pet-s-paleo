import React from "react";
import {  Link, NavLink, Outlet } from "react-router-dom";
import dogFood from "../../asset/bone.png";
import Catagories from "../../asset/icons/grid (1).png"
import CatFood from '../../asset/cat-food.png';
import BirdFood from '../../asset/bird-food.png';
import FishFood from '../../asset/fish-food.png';

const Shop = () => {
  return (
    <div className="flex mt-[64px]">
      <div className="">
        {/* lg device  */}
        <div class=" bg-amber-100 lg:flex sm:hidden sticky top-8">
          <div class="flex flex-row justify-between">
            <div class="w-72 h-screen">
              <div class="flex items-center justify-start mx-6 mt-10">
                <img class="h-10 bg-gray-600" src={Catagories} alt="/" />
                <span class="text-gray-600 ml-4 text-2xl font-bold">
                  Catagories
                </span>
              </div>
              <nav class="mt-10 px-6 ">
                <Link to="dogFood"  class=" hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-5  transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-800 dark:text-gray-100 rounded-lg bg-gray-100 dark:bg-gray-600" >
                  <div className="flex">
                  <img src={dogFood} className="w-8" alt="" />
                  <span className="mx-4 text-lg font-normal">Dog Food</span>
                  </div>
                </Link>
                <Link to="catFood"
                  class="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2  my-5 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-800 dark:text-gray-100 rounded-lg bg-gray-100 dark:bg-gray-600"
                  href="/"
                >
                  <div className="flex">
                  <img src={CatFood} className="w-8" alt="" />
                  <span class="mx-4 text-lg font-normal">Cat Food</span>
                  </div>
                </Link>
                <Link to="birdFood"
                  class="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2  my-5 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-800 dark:text-gray-100 rounded-lg bg-gray-100 dark:bg-gray-600"
                  href="/"
                >
                  <div className="flex">
                  <img src={BirdFood} className="w-8" alt="" />
                  <span class="mx-4 text-lg font-normal">Bird Food</span>
                  </div>
                </Link>
                <Link to="fishFood"
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
        <div class="flex flex-row h-full lg:hidden">
          <nav class="bg-white w-20 h-screen justify-between flex flex-col">
            <div class="mt-10 mb-10">
              <a href="/">
                <img
                  src="/images/person/2.jpeg"
                  class="rounded-full w-10 h-10 mb-3 mx-auto"
                  alt=""
                />
              </a>
              <div class="mt-10">
                <ul>
                  <li class="my-12 text-center">
                    <a href="/">
                      <span class="h-6 w-6 text-gray-500 dark:text-gray-300 mx-auto hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                        <svg
                          width="20"
                          height="20"
                          fill="currentColor"
                          class="m-auto"
                          viewBox="0 0 2048 1792"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zm-157-520q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zm925 509v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm0-260v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zm0-252v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm256-320v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z"></path>
                        </svg>
                      </span>
                    </a>
                  </li>
                  <li class="my-12 text-center">
                    <a href="/">
                      <span class="h-6 w-6 text-gray-500 dark:text-gray-300 mx-auto hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                        <svg
                          width="20"
                          height="20"
                          fill="currentColor"
                          class="m-auto"
                          viewBox="0 0 2048 1792"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M685 483q16 0 27.5-11.5t11.5-27.5-11.5-27.5-27.5-11.5-27 11.5-11 27.5 11 27.5 27 11.5zm422 0q16 0 27-11.5t11-27.5-11-27.5-27-11.5-27.5 11.5-11.5 27.5 11.5 27.5 27.5 11.5zm-812 184q42 0 72 30t30 72v430q0 43-29.5 73t-72.5 30-73-30-30-73v-430q0-42 30-72t73-30zm1060 19v666q0 46-32 78t-77 32h-75v227q0 43-30 73t-73 30-73-30-30-73v-227h-138v227q0 43-30 73t-73 30q-42 0-72-30t-30-73l-1-227h-74q-46 0-78-32t-32-78v-666h918zm-232-405q107 55 171 153.5t64 215.5h-925q0-117 64-215.5t172-153.5l-71-131q-7-13 5-20 13-6 20 6l72 132q95-42 201-42t201 42l72-132q7-12 20-6 12 7 5 20zm477 488v430q0 43-30 73t-73 30q-42 0-72-30t-30-73v-430q0-43 30-72.5t72-29.5q43 0 73 29.5t30 72.5z"></path>
                        </svg>
                      </span>
                    </a>
                  </li>
                  <li class="my-12 text-center">
                    <a href="/">
                      <span class="h-6 w-6 text-gray-500 dark:text-gray-300 mx-auto hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                        <svg
                          width="20"
                          height="20"
                          fill="currentColor"
                          class="m-auto"
                          viewBox="0 0 2048 1792"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M960 0l960 384v128h-128q0 26-20.5 45t-48.5 19h-1526q-28 0-48.5-19t-20.5-45h-128v-128zm-704 640h256v768h128v-768h256v768h128v-768h256v768h128v-768h256v768h59q28 0 48.5 19t20.5 45v64h-1664v-64q0-26 20.5-45t48.5-19h59v-768zm1595 960q28 0 48.5 19t20.5 45v128h-1920v-128q0-26 20.5-45t48.5-19h1782z"></path>
                        </svg>
                      </span>
                    </a>
                  </li>
                  <li class="my-12 text-center">
                    <a href="/">
                      <span class="h-6 w-6 text-gray-500 dark:text-gray-300 mx-auto hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                        <svg
                          width="20"
                          height="20"
                          class="m-auto"
                          fill="currentColor"
                          viewBox="0 0 2048 1792"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
                        </svg>
                      </span>
                    </a>
                  </li>
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
