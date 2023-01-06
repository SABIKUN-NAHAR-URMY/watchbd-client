import React from 'react';
import img1 from '../../images/watch1.jpg';
import img2 from '../../images/watch2.jpg';
import img3 from '../../images/watch3.jpg';
import delivery from '../../images/delivery.jpg';
import img4 from '../../images/warranty.png';
import img5 from '../../images/shipped.png';
import img6 from '../../images/unlock.png';
import img7 from '../../images/internet.png';
import aboutImg from '../../images/aboutSection.jpg';
import vission from '../../images/vission.jpg';
import mission from '../../images/mission.jpg';
import goal from '../../images/goal.jpg';
import paymentSecure from '../../images/paymentSecure.jpg';
import Slider from './Slider/Slider';
import { useQuery } from '@tanstack/react-query';
import ProductCategory from './ProductCategory/ProductCategory';
import Loading from '../Loading/Loading';

const Home = () => {
    const { data: productsCategory = [], isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('https://watchbd-server.vercel.app/category')
            const data = await res.json();
            return data;
        }
    })

    const { data: advertise = [] } = useQuery({
        queryKey: ['advertise'],
        queryFn: async () => {
            const res = await fetch('https://watchbd-server.vercel.app/advertise')
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
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
        <div className=''>
            {/* slider section */}

            <div className="carousel bg-slate-50 w-full">
                {
                    sliderItem.map(slider => <Slider
                        key={slider.id}
                        slider={slider}></Slider>)
                }
            </div>

            {/* extra section */}
            <div className='grid grid-cols-1 lg:grid-cols-4 my-12 p-5 shadow-xl'>
                <div className='flex items-center mb-4'>
                    <img src={img4} className='w-14 mr-6' alt="" />
                    <div>
                        <h1 className='text-2xl font-bold'>30 Days Warranty</h1>
                        <p>30 days money back guarantee</p>
                    </div>
                </div>
                <div className='flex items-center mb-4'>
                    <img src={img5} className='w-14 mr-6' alt="" />
                    <div>
                        <h1 className='text-2xl font-bold'>Global Shipping</h1>
                        <p>Support Worldwide Shipping</p>
                    </div>
                </div>
                <div className='flex items-center mb-4'>
                    <img src={img6} className='w-14 mr-6' alt="" />
                    <div>
                        <h1 className='text-2xl font-bold'>Free Shipping</h1>
                        <p>On all orders above $50</p>
                    </div>
                </div>
                <div className='flex items-center mb-4'>
                    <img src={img7} className='w-14 mr-6' alt="" />
                    <div>
                        <h1 className='text-2xl font-bold'>100% Secure</h1>
                        <p>100% Secure Checkout</p>
                    </div>
                </div>
            </div>

            {/* Advertise section  */}
            <div className='w-[80%] mx-auto'>
                <h2 className='mt-10 text-center text-xl font-thin'>Please visit our Category Section And Purchase Your Watch </h2>
                {
                    advertise.map(adv =>
                        <div key={adv._id} className="card lg:card-side bg-base-100 shadow-xl mt-10">
                            <figure><img src={adv.picture} alt="Movie" /></figure>
                            <div className='absolute bg-red-600 rounded-lg text-white'>
                                <h1 className='p-3 font-semibold'>Only for Advertise</h1>
                            </div>
                            <div className='relative'>
                                <div className="card-body">
                                    <h2 className="card-title pb-5">{adv.productName}</h2>
                                    <div className='text-lg'>
                                        <div className='flex justify-evenly font-semibold pb-5'>
                                            <p>Seller: {adv.sellerName}</p>
                                            <p>Location: {adv.location}</p>
                                        </div>

                                        <div className='flex justify-between font-thin pb-5'>
                                            <p>Rating:{adv.rating}</p>
                                            <p className='pb-3'>Available/Sold: {adv.sell}</p>
                                        </div>
                                        <div className='flex justify-evenly font-thin pb-5'>
                                            <p>OriginalPrice:  ${adv.originalPrice}</p>
                                            <p>ResalePrice:  ${adv.resalePrice}</p>
                                        </div>

                                        <p><strong>Description:</strong> <span className='font-thin'>{adv.description}</span></p>
                                    </div>
                                    <div className="card-actions justify-end items-center">
                                        <p>PostedDate: {adv.postedDate}</p>
                                        <p>YearOfUses: {adv.yearsUse} year</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )

                }
            </div>

            {/* category section  */}
            <div className='mt-10 w-[80%] mx-auto'>
                <h1 className='text-4xl font-bold text-center'>WATCHES CATEGORIES</h1>
                <div className='mt-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        productsCategory.map(category => <ProductCategory
                            key={category._id}
                            category={category}
                        ></ProductCategory>)
                    }
                </div>
            </div>

            {/* extra one section  */}
            <div className='mt-8 grid gap-6 grid-cols-1 lg:grid-cols-2 w-[80%] mx-auto'>
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

            <div className='bg-slate-200'>
                {/* about section  */}
                <div className='grid lg:grid-cols-2'>
                    <div>
                        <img className='rounded-lg shadow-xl w-full h-80 ' src={vission} alt="" />
                        <div className='grid grid-cols-2 gap-4'>
                            <img className='rounded-lg shadow-xl p-6' src={mission} alt="" />
                            <img className='rounded-lg shadow-xl p-6' src={aboutImg} alt="" />
                        </div>
                    </div>
                    <div className='m-16'>
                        <h1 className='text-3xl font-serif mb-4'>WELCOME TO <span className='text-slate-800 font-bold'>WatchBD</span></h1>
                        <hr className='bg-white' />
                        <p className='text-lg font-thin'>WatchBD provide how all this mistaken idea of denouncing pleasure and sing pain was born an will give you a complete account of the system, and expound the actual teachings of the eat explorer of the truth, the mer of human.</p>

                        <br />
                        <h1 className='text-3xl font-serif mb-4'>WIN BEST ONLINE SHOP AT 2019</h1>
                        

                        <p className='text-lg font-thin'>WatchBD provide how all this mistaken idea of denouncing pleasure and sing pain was born an will give you a complete account of the system, and expound the actual teachings of the eat explorer of the truth, the mer of human.</p>
                        <br />

                        <h2 className="text-3xl font-serif mb-4">OUR VISSION</h2>

                        

                        <p className='text-lg font-thin'>My mission 1 is an incredibly versatile watch. I have received a bunch of compliments on it. It's well-made and feels solid and substantial on my wrist without feeling bulky at all.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;