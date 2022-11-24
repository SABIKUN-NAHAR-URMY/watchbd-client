import React from 'react';

const Slider = ({ slider }) => {
    const { id, prev, next, image } = slider;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <img className="w-full h-[50%] rounded-lg" src={image} alt="" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/4">
                <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
            <div className="absolute top-16 lg:top-1/4 left-32 lg:left-52">
                 <h1 className='lg:text-6xl text-white font-bold'>The Most Important Thing <br />
              At a Wedding is to <br />
               Photography...
               </h1>
           </div>
        </div>

    );
};

export default Slider;