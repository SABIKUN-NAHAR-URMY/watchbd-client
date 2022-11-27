import React, { useEffect, useState } from 'react';
import iconVerify from '../../../images/verified.png';

const ProductDisplay = ({ product, setBookNow }) => {
    const { picture, description, location, mobileNumber, originalPrice, postedDate, productName, rating, resalePrice, sellerName, status, yearsUse, sell } = product;

    const [statusVerify, setStatusVerify] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => {
                // const statusSet = data.filter(isVerify => {
                //     return isVerify.status === "Verified ";
                // }) || [];
                // statusSet.map(sv => console.log(sv.status))
                const set = data.map(sv => sv?.status ? 'Verified' : 'Unverified');
                setStatusVerify(set);
            })
    }, [])
    console.log(statusVerify);

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title pb-5">{productName}</h2>
                <div className='text-lg'>
                    <div className='flex font-semibold pb-5'>
                        <div className='flex items-center pr-5'>
                            <p className='pr-3'>Seller: {sellerName}</p>
                            {
                                statusVerify ?
                                    <>
                                        <p>Verified</p><span><img className='w-4 h-4' src={iconVerify} alt="" /></span>
                                    </>
                                    :
                                    <p>{status}</p>
                            }
                        </div>
                        <p>Location: {location}</p>
                    </div>

                    <div className='flex justify-between font-thin pb-5'>
                        <p>Phone: {mobileNumber}</p>
                        <p>Rating:{rating}</p>
                    </div>
                    <p className='pb-3'>Available/Sold: {sell}</p>

                    <div className='flex justify-evenly font-thin pb-5'>
                        <p>OriginalPrice:  ${originalPrice}</p>
                        <p>ResalePrice:  ${resalePrice}</p>
                    </div>

                    <p><strong>Description:</strong> <span className='font-thin'>{description}</span></p>
                </div>
                <div className="card-actions justify-end items-center">
                    <p>PostedDate: {postedDate}</p>
                    <p>YearOfUses: {yearsUse} year</p>
                    <label onClick={() => setBookNow(product)} htmlFor="booknow-modal" className="btn">Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default ProductDisplay;