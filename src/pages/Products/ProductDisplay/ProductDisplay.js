import React from 'react';

const ProductDisplay = ({ product }) => {
    const { picture, description, location, mobileNumber, originalPrice, postedDate, productName, rating, resalePrice, sellerName, status, yearsUse } = product;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{productName}</h2>
                <div className='flex justify-evenly'>
                    <p className=''>Seller: {sellerName}</p>
                    <p>{status}</p>
                    <p>{location}</p>
                </div>
                
                <p>{mobileNumber}</p>
                <p>{originalPrice}</p>
                <p>{resalePrice}</p>
                <p>{postedDate}</p>
                {/* <p>{rating}</p> */}

                <p>{yearsUse}</p>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDisplay;