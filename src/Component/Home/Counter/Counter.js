import React from 'react';
import CountUp from 'react-countup';
// import counterBg from '../../../asset/pastel-acrylic-abstract-background-vector (1).jpg'
// style={{backgroundImage:`url(${counterBg})`}}
import animals from "../../../asset/love-birds.png"
import pet from "../../../asset/play-with-pet.png"
import petDoctor from "../../../asset/veterinarian-2.png"
const Counter = () => {
    return (
        <div  className="bg-cover bg-no-repeat bg-inherit bg-fixed bg-gradient-to-r from-green-100 to-green-400 lg:h-56 max-h-screen block lg:flex lg:justify-around lg:items-center mb-10">
            <div className='text-start align-middle'>
                <img src={animals} className="w-28" alt="" />
            <h1 className='text-5xl font-bold'><CountUp className='text-5xl font-bold' delay={3} end={4800} /> +</h1>
            <h1 className='text-xl'>Total Animals</h1>
            </div>
            <div className='text-start align-middle'>
                <img src={petDoctor} className="w-28" alt="" />
            <h1 className='text-5xl font-bold'><CountUp className='text-5xl font-bold' delay={3} end={8760} /> +</h1>
            <h1 className='text-xl'>Got Patient</h1>
            </div>
            <div className='text-start align-middle'>
                <img src={pet} className="w-28" alt="" />
            <h1 className='text-5xl font-bold'><CountUp className='text-5xl font-bold' delay={3} end={4800} /> +</h1>
            <h1 className='text-xl'>Happy Customer</h1>
            </div>
        </div>
    );
};

export default Counter;