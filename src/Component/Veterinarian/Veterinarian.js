import React, { useEffect, useState } from 'react';

const Veterinarian = () => {
    const [dogFoods, setDogFoods] = useState([])
    useEffect(()=>{
    fetch("data.json")
    .then(res => res.json())
    .then(data => setDogFoods(data))
    },[])
    console.log(dogFoods)
    return (
        <div>
            <h1>this is Veterinarian</h1>
        </div>
    );
};

export default Veterinarian;