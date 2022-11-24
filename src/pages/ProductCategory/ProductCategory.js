import React from 'react';

const ProductCategory = ({ category }) => {
    const {name, imgURL} = category;
    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure><img src={imgURL} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className="card-actions justify-end">
                    <button className="btn">See Product</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCategory;