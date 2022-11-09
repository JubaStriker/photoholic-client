import React from 'react';
import img1 from '../../assets/Homepage/homepage1.jpg'
import img2 from '../../assets/Banner/img6.jpg'
import img3 from '../../assets/Banner/img4.jpg'


const Extra = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='relative w-1/2'>
                        <img src={img1} alt='' className="w-4/5 h-full rounded-lg shadow-2xl" />

                    </div>
                    <div className='w-1/2'>
                        <h1 className="text-5xl font-bold"><small className='font-semibold text-orange-500 text-lg'>About us</small> <br />
                            Freeze Time <br />
                            And Capture <br />
                            Moments</h1>
                        <p className="py-6 text-gray-600">PHOTOHOLIC was created by a group of young engineering students Engineering University, lead by Md Jubair Hossain who chose their passion as their profession and this incident of their life have been pushing them constantly to expand their potentiality. </p>

                    </div>
                </div>
            </div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">

                    <div className='w-1/2'>
                        <h1 className="text-5xl font-bold">
                            <small className='font-semibold text-orange-500 text-lg'>Frame</small> <br />
                            Happiness<br />
                            And Enjoy <br />
                            Life</h1>
                        <p className="py-6 text-gray-600"> Right now PHOTOHOLIC has the highest number of fan following among Bangladeshi wedding photography Facebook pages. Among many other achievements we recognize this as the most important one as it directly indicates how many people are relating with us personally. Their likes and comments inspire us to do better every day.
                        </p>

                    </div>
                    <div className='relative w-1/2 ml-10'>
                        <img src={img3} alt='' className="w-4/5 h-full rounded-lg shadow-2xl" />

                    </div>
                </div>
            </div>

            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='relative w-1/2'>
                        <img src={img2} alt='' className="w-4/5 h-full rounded-lg shadow-2xl" />

                    </div>
                    <div className='w-1/2'>
                        <h1 className="text-5xl font-bold"><small className='font-semibold text-orange-500 text-lg'>Never</small> <br />
                            Let GO  <br />
                            A Single<br />
                            Memory</h1>
                        <p className="py-6 text-gray-600">In the last 6 years we have covered more than 6800+ events. Our team is now a strong team of 68 Photographers, cinematographers & Editors. All our photographers are highly educated, most of them are engineers. We have two dedicated branch in Dhaka & Chittagong to meet the demand of clients all over Bangladesh. Recently we have taken PHOTOHOLIC to an international level by launching our oce in Singapore , Malaysia and Greece specially for the client who want their pre/post wedding abroad. We have started PHOTOHOLIC on 2015. </p>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Extra;