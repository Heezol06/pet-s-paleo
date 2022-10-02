import React from "react";
import { Link, Outlet } from "react-router-dom";
import dogFood from "../../asset/bone.png"
import catFood from "../../asset/cat-food.png"

const Shop = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* <!-- Page content here --> */}
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
              <Link to="dogFood"> <img src={dogFood} className="w-8"  alt="" /><p>Dog Food</p></Link>
            </li>
            <li className="border-b-2">
            <Link to="catFood"> <img src={catFood} className="w-8" alt="" /><p>Cat Food</p></Link>
            </li>
          </ul>
        </div>
      </div>
      {/* content */}
      <Outlet/>
    </div>
  );
};

export default Shop;
