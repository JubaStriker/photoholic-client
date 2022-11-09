import React from 'react';
import img1 from '../../assets/Banner/img1.jpg'
import img2 from '../../assets/Banner/img2.JPG'
import img3 from '../../assets/Banner/img3.png'
import img4 from '../../assets/Banner/img4.jpg'
import img5 from '../../assets/Banner/img5.jpg'
import img6 from '../../assets/Banner/img6.jpg'
import './Banner.css'

const Carousel = () => {
    return (
        <div className="carousel w-full shadow-xl">
            <div id="slide1" className="carousel-item relative w-full">
                <div className='carousel-img'>
                    <img src={img1} alt="" className="w-full" />
                </div>
                <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-24  top-1/4">
                    <h1 className='text-6xl font-bold text-white'>
                        <p className='text-sm lg:text-6xl'> Welcome  <br />
                            To <br /></p>
                        <br /><br />
                        <span className='text-4xl lg:text-7xl font-semibold text-green-700'>P</span>
                        <span className='text-4xl lg:text-7xl font-semibold text-amber-400'>H</span>
                        <span className='text-4xl lg:text-7xl font-semibold text-amber-400'>O</span>
                        <span className='text-4xl lg:text-7xl font-semibold text-amber-400'>T</span>
                        <span className='text-4xl lg:text-7xl font-semibold text-amber-400'>O</span>
                        <span className='text-4xl lg:text-7xl font-semibold text-amber-400'>H</span>
                        <span className='text-4xl lg:text-7xl font-semibold text-amber-400'>O</span>
                        <span className='text-4xl lg:text-7xl font-semibold text-amber-400'>L</span>
                        <span className='text-4xl lg:text-7xl font-semibold text-amber-400'>I</span>
                        <span className='text-4xl lg:text-7xl font-semibold text-green-700'>C</span>
                    </h1>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide6" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className='carousel-img'>
                    <img src={img2} alt="" className="w-full" />
                </div>
                <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-24  top-1/4">
                    <h1 className='text-6xl font-bold text-white'>
                        Welcome  <br />
                        To <br />
                        <br /><br />
                        <span className='text-4xl lg:text-7xl font-semibold text-green-700'>P</span>
                        <span className='text-4xl lg:text-7xl font-semibold text-amber-400'>H</span>
                        <span className='text-4xl lg:text-7xl font-semibold text-amber-400'>O</span>
                        <span className='text-4xl lg:text-7xl font-semibold text-amber-400'>T</span>
                        <span className='text-4xl lg:text-7xl font-semibold text-amber-400'>O</span>
                        <span className='text-4xl lg:text-7xl font-semibold text-amber-400'>H</span>
                        <span className='text-4xl lg:text-7xl font-semibold text-amber-400'>O</span>
                        <span className='text-4xl lg:text-7xl font-semibold text-amber-400'>L</span>
                        <span className='text-4xl lg:text-7xl font-semibold text-amber-400'>I</span>
                        <span className='text-4xl lg:text-7xl font-semibold text-green-700'>C</span>
                    </h1>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className='carousel-img'>
                    <img src={img3} alt="" className="w-full" />
                </div>
                <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-24  top-1/4">
                    <h1 className='text-6xl font-bold text-white'>
                        Welcome  <br />
                        To <br />
                        <br /><br />
                        <span className='text-4xl lg:text-7xl font-semibold text-green-700'>P</span>
                        <span className='text-4xl lg:text-7xl font-semibold text-amber-400'>H</span>
                        <span className='text-4xl lg:text-7xl font-semibold text-amber-400'>O</span>
                        <span className='text-4xl lg:text-7xl font-semibold text-amber-400'>T</span>
                        <span className='text-4xl lg:text-7xl font-semibold text-amber-400'>O</span>
                        <span className='text-4xl lg:text-7xl font-semibold text-amber-400'>H</span>
                        <span className='text-4xl lg:text-7xl font-semibold text-amber-400'>O</span>
                        <span className='text-4xl lg:text-7xl font-semibold text-amber-400'>L</span>
                        <span className='text-4xl lg:text-7xl font-semibold text-amber-400'>I</span>
                        <span className='text-4xl lg:text-7xl font-semibold text-green-700'>C</span>
                    </h1>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <div className='carousel-img'>
                    <img src={img4} alt="" className="w-full" />
                </div>
                <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-24  top-1/4">
                    <h1 className='text-6xl font-bold text-white'>
                        Welcome  <br />
                        To <br />
                        <br /><br />
                        <span className='text-4xl lg:text-7xl font-semibold text-green-700'>P</span>
                        <span className='text-4xl lg:text-7xl font-semibold text-amber-400'>H</span>
                        <span className='text-4xl lg:text-7xl font-semibold text-amber-400'>O</span>
                        <span className='text-4xl lg:text-7xl font-semibold text-amber-400'>T</span>
                        <span className='text-4xl lg:text-7xl font-semibold text-amber-400'>O</span>
                        <span className='text-4xl lg:text-7xl font-semibold text-amber-400'>H</span>
                        <span className='text-4xl lg:text-7xl font-semibold text-amber-400'>O</span>
                        <span className='text-4xl lg:text-7xl font-semibold text-amber-400'>L</span>
                        <span className='text-4xl lg:text-7xl font-semibold text-amber-400'>I</span>
                        <span className='text-4xl lg:text-7xl font-semibold text-green-700'>C</span>
                    </h1>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <div className='carousel-img'>
                    <img src={img5} alt="" className="w-full" />
                </div>
                <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-24  top-1/4">
                    <h1 className='text-6xl font-bold text-white'>
                        Welcome  <br />
                        To <br />
                        <br /><br />
                        <span className='text-4xl lg:text-7xl font-semibold text-green-700'>P</span>
                        <span className='text-4xl lg:text-7xl font-semibold text-amber-400'>H</span>
                        <span className='text-4xl lg:text-7xl font-semibold text-amber-400'>O</span>
                        <span className='text-4xl lg:text-7xl font-semibold text-amber-400'>T</span>
                        <span className='text-4xl lg:text-7xl font-semibold text-amber-400'>O</span>
                        <span className='text-4xl lg:text-7xl font-semibold text-amber-400'>H</span>
                        <span className='text-4xl lg:text-7xl font-semibold text-amber-400'>O</span>
                        <span className='text-4xl lg:text-7xl font-semibold text-amber-400'>L</span>
                        <span className='text-4xl lg:text-7xl font-semibold text-amber-400'>I</span>
                        <span className='text-4xl lg:text-7xl font-semibold text-green-700'>C</span>
                    </h1>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <div className='carousel-img'>
                    <img src={img6} alt="" className="w-full" />
                </div>
                <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-24  top-1/4">
                    <h1 className='text-6xl font-bold text-white'>
                        Welcome  <br />
                        To <br />
                        <br /><br />
                        <span className='text-4xl lg:text-7xl font-semibold text-green-700'>P</span>
                        <span className='text-4xl lg:text-7xl font-semibold text-amber-400'>H</span>
                        <span className='text-4xl lg:text-7xl font-semibold text-amber-400'>O</span>
                        <span className='text-4xl lg:text-7xl font-semibold text-amber-400'>T</span>
                        <span className='text-4xl lg:text-7xl font-semibold text-amber-400'>O</span>
                        <span className='text-4xl lg:text-7xl font-semibold text-amber-400'>H</span>
                        <span className='text-4xl lg:text-7xl font-semibold text-amber-400'>O</span>
                        <span className='text-4xl lg:text-7xl font-semibold text-amber-400'>L</span>
                        <span className='text-4xl lg:text-7xl font-semibold text-amber-400'>I</span>
                        <span className='text-4xl lg:text-7xl font-semibold text-green-700'>C</span>
                    </h1>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide5" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Carousel;