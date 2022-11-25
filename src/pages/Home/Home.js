import React from 'react';
import img1 from '../../images/img1.jpg';
import img2 from '../../images/img2.jpg';
import img3 from '../../images/img3.jpg';
import delivery from '../../images/delivery.jpg';
import paymentSecure from '../../images/paymentSecure.jpg';
import Slider from './Slider/Slider';
import { useQuery } from '@tanstack/react-query';
import ProductCategory from './ProductCategory/ProductCategory';
import Loading from '../Loading/Loading';

const Home = () => {
    const { data: productsCategory = [], isLoading} = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/products')
            const data = await res.json();
            return data;
        }
    })

    if(isLoading){
        return <Loading></Loading>
    }

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
        <div className='mt-8'>
            {/* slider section */}

            <div className="carousel w-full rounded-lg">
                {
                    sliderItem.map(slider => <Slider
                        key={slider.id}
                        slider={slider}></Slider>)
                }
            </div>

            {/* category section  */}
            <div className='mt-10'>
                <h1 className='text-4xl font-bold text-center'>WATCHES CATEGORIES</h1>
                <div className='mt-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        productsCategory.map(category => <ProductCategory
                        key={category._id}
                        category={category}></ProductCategory>)
                    }
                </div>
            </div>

            {/* extra one section  */}
            <div className='mt-8 grid gap-6 grid-cols-1 lg:grid-cols-2'>
                <div>
                    <img src={delivery} className='rounded-lg' alt="" />
                    <h1 className='text-3xl font-bold'>Delivery</h1>
                    <p className='text-xl font-semibold pb-5'>Shipments</p>
                    <p className='text-lg font-thin'>Packages are generally dispatched within 2 days after receipt of payment and are shipped with tracking and drop-off without signature. Boxes are amply sized and your items are well-protected. <br />
                    </p>
                </div>
                <div>
                    <img src={paymentSecure} className='w-full h-[53%] rounded-lg' alt="" />
                    <h1 className='text-3xl font-bold'>Secure payment</h1>
                    <p className='text-xl font-semibold pb-5'>Our secure payment</p>
                    <p className='text-lg font-thin'>As part of a secure payment, your credit card number, expiry date and cryptogram are encrypted in the transmission to protect you and ensure that no data flows in the clear via the internet.</p>
                </div>

            </div>
        </div>
    );
};

export default Home;