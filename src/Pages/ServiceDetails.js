import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {

    const details = useLoaderData();
    console.log(details);

    return (
        <>
            <div className='my-14'>
                <h1 className='text-4xl md:text-6xl font-semibold text-center'>Customer Satisfaction</h1>
                <h2 className='text-2xl md:text-4xl font-medium text-center'>is our first priority</h2>
            </div>

            <div>
                <h1 className='text-4xl text-center'>Check out our <span className='text-orange-400'>{details.title}</span> service</h1>
            </div>

            <div className='my-16 flex justify-center'>
                <img className='rounded-lg' src={details.picture} alt="" />
            </div>

            <div className='max-w-xl text-center mx-auto my-8 text-xl'>
                {details.details}
            </div>

            <div className='max-w-xl text-xl my-5 mx-auto'>
                Price: <span className='text-green-600 font-medium font-sans'>{details.price}  ৳</span>
            </div>
        </>
    );
};

export default ServiceDetails;