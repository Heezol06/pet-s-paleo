import { useQuery } from "@tanstack/react-query";
import React from "react";

const AddToCart = ({ id }) => {
  const {
    isLoading,
    error,
    data: allFoods,
  } = useQuery(["allFood"], () =>
    fetch("http://localhost:5000/allFood").then((res) => res.json())
  );
  // const cartFood = allFoods.filter((food) => food.type.includes(id));
  console.log(id)
  return (
    <div className="my-20">
      {allFoods?.map((food) => (
        <div>{food?.id}</div>
      ))}
    </div>
    
  );
};

export default AddToCart;
