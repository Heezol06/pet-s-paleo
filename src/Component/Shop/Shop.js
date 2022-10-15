import React from "react";
import { Link, Outlet } from "react-router-dom";
import dogFood from "../../asset/bone.png"
import catFood from "../../asset/cat-food.png"
// import { slide as Menu } from 'react-burger-menu'

const Shop = () => {
 
  return (
    <div>
    
    <Outlet/>
    </div>  
  );
};

export default Shop;
