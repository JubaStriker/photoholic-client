import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './styles/ServiceCard.css'

const Services = () => {

    const services = useLoaderData();

    return (
        <div className='container'>
            <h1 className='text-7xl text-center my-10 font-medium'>Our services</h1>
            <div className='flex flex-col justify-center items-center'>
                {services?.map(service =>
                    <div key={service._id}>
                        <div className="card card-img hover:shadow-xl hover:-translate-y-2 my-16">
                            <figure><img src={service.picture} alt="car!" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-orange-500">{service.title}</h2>
                                <p>Price: {service.price} ৳</p>
                                <p>Rating: {service.rating} </p>
                                <div className="card-actions justify-center mt-4">
                                    <Link to='/details'><button className="btn text-white border-0 bg-orange-400 hover:bg-orange-500">
                                        Details
                                    </button></Link>
                                </div>
                            </div>
                        </div>
                    </div>)}
            </div>
        </div>
    );
};

export default Services;