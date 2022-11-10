import React from 'react';
import useTitle from '../Hooks/useTitle';

const About = () => {
    useTitle('About')
    return (
        <div className='bg-amber-300 pt-24 pb-24'>
            <h1 className='text-5xl font-semibold ml-4 lg:ml-9 mb-16'>
                PHOTOHOLIC


            </h1>

            <p className='text-lg lg:text-3xl font-semibold ml-5 lg:ml-14 mr-6'>
                PHOTOHOLIC was created by a group of young engineering students of Engineering University, lead by Md Jubair Hossain who chose their passion as their profession and this incident of their life have been pushing them constantly to expand their potentiality. <br />

                <br />
                Right now PHOTOHOLIC has the highest number of fan following among Bangladeshi wedding photography Facebook pages. Among many other achievements we recognize this as the most important one as it directly indicates how many people are relating with us personally. Their likes and comments inspire us to do better every day.
                <br />
                <br />
                In the last 6 years we have covered more than 6800+ events. Our team is now a strong team of 68 Photographers, cinematographers & Editors. All our photographers are highly educated, most of them are engineers. We have two dedicated branch in Dhaka & Chittagong to meet the demand of clients all over Bangladesh. Recently we have taken PHOTOHOLIC to an international level by launching our oce in Singapore , Malaysia and Greece specially for the client who want their pre/post wedding abroad. We have started PHOTOHOLIC on 2015.
            </p>
        </div>
    );
};

export default About;