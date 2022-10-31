import React from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const {id} = useParams()
    return (
        <div className='my-20'>
            <h1 className='text-3xl'>Please Pay For {id} </h1>
        </div>
    );
};

export default Payment;