import React from 'react';

const Slider = ({ slider }) => {
    const { id, prev, next, image } = slider;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <img src={image} className="w-full" alt='' />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
            <div className="absolute top-24 lg:top-1/4 left-20 lg:left-52">
                <h1 className='lg:text-6xl text-white font-bold'>
                The only real luxury is time. <br /> you can't get time back.
                </h1>
                <p className='invisible lg:visible lg:text-2xl lg:mt-10 text-white lg:text-center font-bold'>What you wear is how you <br /> present yourself to the world, <br /> especially today, when human contacts are so quick. <br /> Fashion is instant language.</p>
            </div>
        </div>

    );
};

export default Slider;