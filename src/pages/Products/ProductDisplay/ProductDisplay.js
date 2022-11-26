import React from 'react';

const ProductDisplay = ({ product, setBookNow }) => {
    const { picture, description, location, mobileNumber, originalPrice, postedDate, productName, rating, resalePrice, sellerName, status, yearsUse, sell } = product;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title pb-5">{productName}</h2>
                <div className='text-lg'>
                    <div className='flex justify-evenly font-semibold pb-5'>
                        <p>Seller: {sellerName}</p>
                        <p>{status}</p>
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
                    <label onClick={()=>setBookNow(product)} htmlFor="booknow-modal" className="btn">Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default ProductDisplay;