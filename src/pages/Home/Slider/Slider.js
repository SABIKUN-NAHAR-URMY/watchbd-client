import React from 'react';

const Slider = ({ slider }) => {
    const { id, prev, next, image } = slider;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            {/* <img src={image} className="w-full" alt='' /> */}
            <div className="absolute flex justify-between transform -translate-y-1/2 bottom-0 left-1/2">
                <a href={`#slide${prev}`} className="btn btn-circle mr-3">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
            <div className='lg:grid grid-cols-2'>
                <div className="mt-40 mx-8 lg:mx-auto">
                    <h1 className='text-3xl font-bold font-mono mb-5'>The Great Series Collections</h1>
                    <p className='font-mono mb-5'>What you wear is how you <br /> present yourself to the world, <br /> especially today, when human contacts are so quick. <br /> Fashion is instant language.</p>
                    <button className='btn mx-36 my-10 lg:m-0'>Get Started</button>
                </div>

                <div>
                <img src={image} className="w-full" alt='' />
                </div>
            </div>
        </div>

    );
};

export default Slider;