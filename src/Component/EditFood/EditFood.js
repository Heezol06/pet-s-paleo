import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const EditFood = () => {
    const {id} = useParams();
    const [food , setFood] = useState({})
    return (
        <div className='my-24'>
            <h1 className='text-5xl'>Updating Food :{id}</h1>
        </div>
    );
};

export default EditFood;