import React from 'react';
import Typewriter from 'typewriter-effect';

const Services = ({ services }) => {

    console.log(services);
    return (
        <div className='mt-32'>
            <h1 className='text-3xl md:text-6xl text-center font-semibold'>Our Services</h1>
            <h1 className='text-3xl md:text-7xl text-center font-semibold mt-10 text-orange-500 mb-10'>
                <Typewriter
                    options={{
                        strings: ['Wedding Photography', 'Wedding Cinematography', 'Birthday Function', 'Model Photography', 'Travel Vlogshoot', 'Conference Photography'],
                        autoStart: true,
                        loop: true,
                    }}
                />

            </h1>

            <div className='mt-20 flex flex-col lg:flex-row gap-9 justify-center items-center container'>
                {services.map(service =>
                    <div key={service._id}>
                        <div className="card w-96 hover:shadow-xl hover:-translate-y-2">
                            <figure><img src={service.picture} alt="car!" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-orange-500">{service.title}</h2>
                                <p>{service.details.slice(0, 100)}...</p>
                                <div className="card-actions justify-center mt-4">
                                    <button className="btn text-white border-0 bg-orange-400 hover:bg-orange-500">
                                        Learn more!
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>)}
            </div>
        </div>
    );
};

export default Services;