import React from 'react';
import Typewriter from 'typewriter-effect';

const Services = () => {
    return (
        <div className='mt-32'>
            <h1 className='text-3xl md:text-6xl text-center font-semibold'>Our Services</h1>
            <h1 className='text-3xl md:text-7xl text-center font-semibold mt-10 text-orange-500 mb-10'>
                <Typewriter
                    options={{
                        strings: ['Wedding Photography', 'Wedding Cinematography', 'Birthday Function', 'Model Photography', 'Travel Blogshoot', 'Conference Photography'],
                        autoStart: true,
                        loop: true,
                    }}
                />

            </h1>
        </div>
    );
};

export default Services;