import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Carousel from './Carousel';
import Extra from './Extra';
import Services from './Services';


const Home = () => {

    const services = useLoaderData();


    return (
        <div>
            <Carousel />
            <Services services={services} />
            <Extra />
        </div>
    );
};

export default Home;