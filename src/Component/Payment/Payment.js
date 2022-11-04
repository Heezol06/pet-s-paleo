// import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const {id} = useParams()
    const [product, setProduct] = useState("")
    const url = `http://localhost:5000/payment/${id}`
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    return (
        <div className='my-20'>
            <h1 className='text-3xl'>Please Pay For {product?.name} </h1>
        </div>
    );
};

export default Payment;