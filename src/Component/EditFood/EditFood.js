import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import UpdateBanner from "../../asset/2011.i211.029_loudspeaker megaphone lightnings realistic.jpg"
const EditFood = () => {
    const {id} = useParams();
    const [food , setFood] = useState({})
    useEffect(()=>{
        const url = `http://localhost:5000/allFood/${id}`
fetch(url)
.then(res => res.json())
.then(data => setFood(data))
    },[])
    const handleEditFood = (e) =>{
        e.preventDefault()
        const name = e.target.name.value;
        const type = e.target.type.value;
        const weight = e.target.weight.value;
        const img = e.target.img.value;
        const price = e.target.price.value;
        const description = e.target.description.value;
        
        const food = {name, type, weight,img,price, description}
        
        
        // send data to server 
        fetch(`http://localhost:5000/allFood/${id}`,{
            method:"PUT",
            headers:{
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(food)
          })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            Swal.fire(
              'Good job!',
              'Server Received Foods Date'
              )
                e.target.reset()
            })
    }
    return (
        <div className='my-24' >
            {/* <div style={{ backgroundImage: `url(${UpdateBanner})` }} className="hero min-h-screen bg-base-200 py-20"> */}
            <h1 className='text-3xl underline text-green-500 my-10'>UPDATING: {food.name}</h1>
            <form className="lg:grid lg:grid-cols-3 lg:px-10" onSubmit={handleEditFood}>
                <div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Food Name</span>
            </label>
            <input
              type="text"
              name="name"
              className="input input-bordered input-success "
              placeholder="Name of the food"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Animal Type</span>
            </label>
            <input
              type="text"
              name="type"
              className="input input-bordered  input-success"
              placeholder="Type of animal"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Weight</span>
            </label>
            <input
              type="text"
              className="input input-bordered  input-success"
              name="weight"
              placeholder="Foods weight"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">URL</span>
            </label>
            <input
              type="text"
              className="input input-bordered  input-success"
              name="img"
              placeholder="Foods image url"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              className="input input-bordered input-success "
              placeholder="Foods price in BDT"
              required
            />
            <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
          <textarea className="textarea textarea-success" name="description" placeholder="Description about the Product"></textarea>
          </div>
          </div>
          <input type="submit" value="EDIT"  className="w-full px-8 my-5 bg-green-500 rounded-lg py-4 text-white font-semibold"/>
          </div>
        </form>
        </div>
    );
};

export default EditFood;
