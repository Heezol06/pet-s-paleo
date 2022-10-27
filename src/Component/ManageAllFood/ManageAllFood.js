import { useQuery } from "@tanstack/react-query";
import React from "react";
import Swal from "sweetalert2";

const ManageAllFood = () => {
  const {
    isLoading,
    error,
    data: allFoods, refetch
  } = useQuery(["repoData"], () =>
    fetch("http://localhost:5000/allFood").then((res) => res.json())
  );
  const handleFoodItemDelete = id =>{
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger my-5'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'This food item is deleted.',
          'success'
        )
        const url = `http://localhost:5000/allFood/${id}`  
        fetch(url,{
          method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
        if (data) {
          refetch()
        }
          
        })
        
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'This food item is safe :)',
          'error'
        )
      }
    })
  }
  return (
    <div className="my-20 hidden lg:block max-w-screen-xl px-4 sm:px-4 md:px-6 mx-auto">
      <h1 className="text-5xl my-10 underline text-green-600">From Here Your Can Manage All Foods.</h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full ">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Quality</th>
              <th>Price</th>
              <th>Wight</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {allFoods?.map((allFood) => (
            <tr key={allFood._id}>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={allFood.img}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{allFood.name}</div>
                    <div className="text-sm opacity-50">{allFood.type}</div>
                  </div>
                </div>
              </td>
              <td>
                Authentic Food
                <br />
                <span className="badge badge-ghost badge-sm">
                  Suggest by our Medical specialist.
                </span>
              </td>
              <td className="text-orange-500">{allFood.price}</td>
              <td className="text-green-500">{allFood.weight}</td>
              <th>
                <button className="btn btn-ghost btn-xs bg-green-300 mr-5">Edit</button>
                <button className="btn btn-ghost bg-orange-500 btn-xs" onClick={()=>handleFoodItemDelete(allFood._id)}>Delete</button>
              </th>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAllFood;
