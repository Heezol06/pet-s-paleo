import React from "react";
import { Link, Outlet } from "react-router-dom";
import dogFood from "../../asset/bone.png"
import catFood from "../../asset/cat-food.png"
// import { slide as Menu } from 'react-burger-menu'

const Shop = () => {
  return (
    

        <div className="drawer drawer-mobile">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            {/* <!-- Page content here --> */}
            <Outlet/>
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              Open drawer
            </label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 overflow-y-auto w-80 bg-slate-100 border-r-2 border-gray-400 text-base-content">
              {/* <!-- Sidebar content here --> */}
              <li className="border-b-2">
                <Link to="/shop"> <img src={dogFood} className="w-8"  alt="" /><p>All Products</p></Link>
              </li>
              <li className="border-b-2">
                <Link to="/shop/dogFood"> <img src={dogFood} className="w-8"  alt="" /><p>Dog Food</p></Link>
              </li>
              <li className="border-b-2">
              <Link to="/shop/catFood"> <img src={catFood} className="w-8" alt="" /><p>Cat Food</p></Link>
              </li>
              <li className="border-b-2">
              <Link to="/shop/fishFood"> <img src={catFood} className="w-8" alt="" /><p>Fish Food</p></Link>
              </li>
              <li className="border-b-2">
              <Link to="/shop/birdFood"> <img src={catFood} className="w-8" alt="" /><p>Bird Food</p></Link>
              </li>
            </ul>
          </div>
        </div>
      
      
    
  );
};

export default Shop;
