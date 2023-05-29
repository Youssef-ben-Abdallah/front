"use client"
import React from 'react';
import Link from 'next/link';
import axios from "axios";
import { purple900 } from 'material-ui/styles/colors';

const SuccessPage = () => {
    
    if (typeof window !== 'undefined') {
        const searchParams = new URLSearchParams(window.location.search);
        const encodedData = searchParams.get('data');
        const jsonData = encodedData ? JSON.parse(decodeURIComponent(encodedData)) : null;
        axios.post('http://127.0.0.1:3001/api/order', jsonData)
    } 
    
    setTimeout(function () {
        if (typeof window !== 'undefined') {
            window.location.href = "/services_Lists";
        }
    }, 1000);
    return (
        <div className='h-screen grid place-items-center'>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className='text-center'>
                <h1   style={{ color : purple900 , fontSize : '200px' }} className='font-bold'>Thank You</h1>
                <p className='text-center '>Order Placed Successfully</p>
            </div>
        </div>
    );
};

export default SuccessPage;
