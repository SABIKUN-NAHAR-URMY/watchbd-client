import React from 'react';
import { Link } from 'react-router-dom';

const ProductCategory = ({ category }) => {
    const { _id, name, imgURL } = category;
    return (
        <div className="card w-96 h-56 image-full">
            <figure><img src={imgURL} alt="Shoes" /></figure>
            <div className="card-body">
                <Link to={`/products/${_id}`}>
                    <h2 className="text-4xl font-bold flex items-center justify-center pt-11">{name}</h2>
                </Link>
            </div>
        </div>
    );
};

export default ProductCategory;