import React from 'react';
import { Link } from 'react-router-dom';
import facebookLogo from "../../../src/asset/facebook (1).png"
import githubLogo from "../../../src/asset/github.png"
import googleLogo from "../../../src/asset/google.png"
import bgRegister from "../../../src/asset/job562-nunoon-05-g.jpg"

const Register = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
            <img src={bgRegister} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input type="text" placeholder="email" className="input input-bordered" />
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="text" placeholder="password" className="input input-bordered" />
              <label className="label">
                <p className="label-text-alt link link-hover text-start">Already Register? <Link to="/Register">Register Now!</Link></p>
              </label>
            </div>
            <div className='mt-8'>
            <button className="btn glass btn-circle"><img className='w-8' src={facebookLogo} alt="" /></button>
            <button className="btn glass btn-circle mx-4"><img className='w-8' src={githubLogo} alt="" /></button>
            <button className="btn glass btn-circle"><img className='w-8' src={googleLogo} alt="" /></button>
            </div>
            <div className="form-control mt-6">
            <button className="px-8 my-5 bg-green-500 rounded-lg py-4 text-white font-semibold">Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Register;