import React from 'react';

const ProductCategory = ({ category }) => {
    const {name, imgURL} = category;
    return (
        <div className="card w-96 h-56 image-full">
            <figure><img src={imgURL} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-4xl font-bold flex items-center justify-center pt-11">{name}</h2>
            </div>
        </div>
    );
};

export default ProductCategory;