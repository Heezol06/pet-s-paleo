import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AllProducts = () => {
  const navigate = useNavigate();
  const {
    isLoading,
    error,
    data: allFoods,
  } = useQuery(["allFood"], () =>
    fetch("http://localhost:5000/allFood").then((res) => res.json())
  );
  const [searchResult, setSearchResult] = useState(allFoods);
  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  // const handleSearch = (e) => {
  //   const searchText = e.target.value;
  //   const lowerSearchTest = searchText.toLowerCase();
  //   const match = allFoods.filter((v) => v.name.includes(lowerSearchTest));
  //   const lowerCaseMatch = match.toLowerCase();
  //   setSearchResult(lowerCaseMatch);
  // };
  const getProductsDetails = (id) => {
    // navigate(`/purchase/${id}`);
    console.log(id);
    const url = `http://localhost:5000/allFood/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => data);
    };
    const addToCart = (id) =>{
      // const {id:_id, name:name } = allFoods
      // console.log(id, name);
      const url = `http://localhost:5000/addToCart/${id}`
      fetch(url,{
      method:"POST",
    headers:{
        "Content-Type": 'application/json'
    }})
      .then((res)=>res.json())
      .then((data)=> data)
    }
    console.log(allFoods);
  return (
    <div className="mx-auto flex flex-col my-[43px]">
      <div className="flex flex-col bg-green-300 py-5 glass rounded">
        <input
          type="text"
          placeholder="Type here"
          // onChange={handleSearch}
          className="input input-bordered input-success w-full max-w-xs flex justify-center mx-auto"
        />
        <h1 className="text-4xl my-10 p-4 inline-block rounded-xl">All Food</h1>
        <h1>Food Available : {searchResult?.length}</h1>
      </div>
      <div className="grid lg:grid-cols-3 gap-10 mx-auto mt-10 mb-20">
        {allFoods?.map((allFood) => (
          <div className="">
            <div
              class="w-full max-w-sm bg-white rounded-lg border hover:shadow-md"
              bis_skin_checked="1"
            >
              <Link to={`/singleProducts/${allFood?._id}`}>
                {" "}
                <button onClick={() => getProductsDetails(allFood?._id)}>
                  <img
                    class="p-8 rounded-t-lg"
                    src="https://st4.depositphotos.com/19960896/30701/i/450/depositphotos_307013996-stock-photo-ambrosia-panchamrit-panchamrut-panchamrutham-panchamrutha.jpg"
                    alt="product"
                  />
                </button>
              </Link>
              <div class="px-5" bis_skin_checked="1">
                <h5 class="text-xl font-semibold tracking-tight text-start">
                  {allFood?.name.slice(0, 30)}...
                </h5>

                <div className="flex items-center justify-between">
                  <span class="text-xl font-bold text-gray-900 mt-2.5 mb-5">
                    Weight:{" "}
                    <span className="text-orange-600">{allFood?.weight}</span>
                  </span>
                  <span class="text-xl font-bold text-gray-900 mt-2.5 mb-5">
                    Price:{" "}
                    <span className="text-orange-600">???{allFood?.price}</span>
                  </span>
                </div>
                <div
                  class="flex justify-between items-center"
                  bis_skin_checked="1"
                >
                  <div
                    class="flex items-center mt-2.5 mb-5"
                    bis_skin_checked="1"
                  >
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>First star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Second star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Third star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Fourth star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Fifth star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                      5.0
                    </span>
                  </div>
                  <button
                    type="button"
                    class="w-10 h-10 text-base font-medium rounded-full text-white bg-green-500 hover:bg-green-700"
                    onClick={()=>addToCart(allFood?._id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      class="mx-auto"
                      fill="white"
                      viewBox="0 0 1792 1792"
                    >
                      <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="#bbf7d0"
                  fill-opacity="1"
                  d="M0,288L720,128L1440,32L1440,320L720,320L0,320Z"
                ></path>
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
