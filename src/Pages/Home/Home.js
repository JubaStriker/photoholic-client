import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';
import Carousel from './Carousel';
import Extra from './Extra';
import Services from './Services';


const Home = () => {
    useTitle('Home')

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