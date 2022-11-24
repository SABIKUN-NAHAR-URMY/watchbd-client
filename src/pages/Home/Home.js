import React from 'react';
import img1 from '../../images/img1.jpg';
import img2 from '../../images/img2.jpg';
import img3 from '../../images/img3.jpg';
import Slider from './Slider/Slider';

const Home = () => {
    const sliderItem = [
        {
            image: img1,
            id: 1,
            prev: 3,
            next: 2
        },
        {
            image: img2,
            id: 2,
            prev: 1,
            next: 3
        },
        {
            image: img3,
            id: 3,
            prev: 2,
            next: 1
        }

    ]
    return (
        <div>
            {/* slider section  */}
            <div className="carousel w-full rounded-lg">

                {
                    sliderItem.map(slider => <Slider
                        key={slider.id}
                        slider={slider}></Slider>)
                }

            </div>
        </div>
    );
};

export default Home;