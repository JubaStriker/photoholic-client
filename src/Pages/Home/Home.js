import React from 'react';
import Carousel from './Carousel';
import Extra from './Extra';
import Services from './Services';


const Home = () => {
    return (
        <div>
            <Carousel />
            <Services />
            <Extra />
        </div>
    );
};

export default Home;