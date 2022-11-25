import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductDisplay from './ProductDisplay/ProductDisplay';

const Products = () => {
    const products = useLoaderData();
    console.log(products);
    return (
        <div className='grid gap-6 grid-cols-1 lg:grid-cols-2 mt-10 mb-10'>
            {
              products.map((product, i) => <ProductDisplay
              key={i}
              product={product}
              ></ProductDisplay>)  
            }
        </div>
    );
};

export default Products;