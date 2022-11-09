import React from 'react';
import img1 from '../../assets/Homepage/homepage1.jpg'
import Carousel from './Carousel';

const Home = () => {
    return (
        <div>
            <Carousel />
            <div className='bg-teal-800 flex items-center gap-10 justify-center pl-14 pr-14'>
                <div className='pt-40 pb-40 '><img className='rounded-lg shadow-lg hover:shadow-2xl' src={img1} alt="" height={900} width={2600} /></div>
                <div>
                    <h1 className='text-white pt-24 pb-24'>
                        <span className='text-5xl font-sans'>WHO WE ARE</span>
                        <br />
                        <br />

                        <div className='text-xl'>
                            Dream Weaver was created by a group of young engineering students Engineering University, lead by Md Jubair Hossain who chose their passion as their profession and this incident of their life have been pushing them constantly to expand their potentiality.

                        </div>
                    </h1>
                </div>
            </div>
            <div className='bg-amber-400 flex items-center gap-10 justify-center pl-14 pr-14'>


                <div>
                    <h1 className='text-white pt-24 pb-24'>
                        <div className='text-xl text-slate-800'>
                            Right now Dream Weaver has the highest number of fan following among Bangladeshi wedding photography Facebook pages. Among many other achievements we recognize this as the most important one as it directly indicates how many people are relating with us personally. Their likes and comments inspire us to do better every day.

                        </div>
                    </h1>
                </div>
                <div className='pt-40 pb-40 '><img className='rounded-lg shadow-lg hover:shadow-2xl' src={img1} alt="" height={900} width={2600} />
                </div>



            </div>
            <div className='bg-teal-800 flex items-center gap-10 justify-center pl-14 pr-14'>

                <div className='pt-40 pb-40 '><img className='rounded-lg shadow-lg hover:shadow-2xl' src={img1} alt="" height={900} width={2600} />
                </div>

                <div>
                    <h1 className='text-white pt-24 pb-24'>
                        <div className='text-xl text-white'>
                            In the last 6 years we have covered more than 6800+ events. Our team is now a strong team of 68 Photographers, cinematographers & Editors. All our photographers are highly educated, most of them are engineers. We have two dedicated branch in Dhaka & Chittagong to meet the demand of clients all over bangladesh. Recently we have taken Dream Weaver to an international level by launching our oce in Singapore , Malaysia and Greece specially for the client who want their pre/post wedding abroad. We have started Dream Weaver Youth Academy (DWYA) on 2015.

                        </div>
                    </h1>
                </div>




            </div>
        </div>
    );
};

export default Home;