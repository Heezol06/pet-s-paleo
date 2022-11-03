import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const {id} = useParams()
    const url = `http://localhost:5000/payment${id}`
    const {data} =  useQuery(['payment', id], () => fetch(url).then(res=>res.json()))
    return (
        <div className='my-20'>
            <h1 className='text-3xl'>Please Pay For {id} </h1>
        </div>
    );
};

export default Payment;