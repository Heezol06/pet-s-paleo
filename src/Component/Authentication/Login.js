import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import {Link}  from 'react-router-dom';
import Swal from 'sweetalert2';
import bgRegister from "../../../src/asset/job562-nunoon-05-g.jpg"
import facebookLogo from "../../../src/asset/facebook (1).png";
import twitterLogo from "../../../src/asset/twitter.png";
import googleLogo from "../../../src/asset/google.png";
import Loading from '../Loading/Loading';
import auth from './Firebase/Firebase.init';

const Login = () => {
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    userError,
  ] = useSignInWithEmailAndPassword(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithFacebook, fUser, fLoading, fError] =
    useSignInWithFacebook(auth);
  let signInError;


  if ( loading || gLoading || fLoading) {
    return <Loading></Loading>;
  }
  if (userError || gError || fError === "Firebase: Error (auth/user-not-found).") {
    signInError = Swal.fire( userError?.message)
  }
  
  if (user || gUser || fUser) {
    console.log(user || gUser || fUser);
  }

  const onSubmit = (data) =>{
console.log(data)
signInWithEmailAndPassword(data.email, data.password)
  }
    return (
      <div className="hero min-h-screen bg-base-200" style={{backgroundImage: `url(${bgRegister})`}}>
            <div className='hero-overlay bg-opacity-60'></div>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left text-white">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">If you are already register and come before on this webpage then please login for get batter performance. If you are new here then go to register page and register first please.</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
            {/* email start */}
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>

                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is Required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a Valid Email",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <p role="alert" className="text-red-400 text-start">{errors?.email?.message}</p>
                  )}
                  {errors.email?.type === "pattern" && (
                    <p role="alert" className="text-red-400 text-start">{errors?.email?.message}</p>
                  )}
                </label>
              </div>
              {/* email end  */}
            {/* Password start */}
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>

                <input
                  type="password"
                  placeholder="Your Password"
                  className="input input-bordered"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is Required",
                    },
                    minLength: {
                      value: 6,
                      message: 'Must be 6 Characters or longer' 
                    },
                  })}
                />
                <label className="label">
                  {errors.password?.type === "required" && (
                    <p role="alert" className="text-red-400 text-start">{errors?.password?.message}</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p role="alert" className="text-red-400 text-start">{errors?.password?.message}</p>
                  )}
                </label>
              </div>
              {/* password end  */}
                <p className="label-text-alt link link-hover text-start">
                  Haven't any account? <Link to="/register">Login Now!</Link>
                </p>
              <input type="submit" value="LOGIN"  className="w-full px-8 my-5 bg-green-500 rounded-lg py-4 text-white font-semibold"/>
              <label className="label">
              </label>
            </form>
            <div className="divider">OR</div>
            <div className="mt-8">
              <button
                className="btn glass btn-circle"
                onClick={() => signInWithFacebook()}
              >
                <img className="w-8" src={facebookLogo} alt="" />
              </button>
              <button className="btn glass btn-circle mx-4">
                <img className="w-8" src={twitterLogo} alt="" />
              </button>
              <button
                className="btn glass btn-circle"
                onClick={() => signInWithGoogle()}
              >
                <img className="w-8" src={googleLogo} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Login;