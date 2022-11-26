import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BooknowModal from './BooknowModal/BooknowModal';
import ProductDisplay from './ProductDisplay/ProductDisplay';

const Products = () => {
    const products = useLoaderData();
    const [bookNow, setBookNow] = useState(null);
    console.log(products);
    return (
        <section>
            <div className='grid gap-6 grid-cols-1 lg:grid-cols-2 mt-10 mb-10'>
                {
                    products.map((product, i) => <ProductDisplay
                        key={i}
                        product={product}
                        setBookNow={setBookNow}
                    ></ProductDisplay>)
                }
            </div>
            {
                bookNow &&
                <BooknowModal
                    bookNow={bookNow}
                ></BooknowModal>
            }
        </section>
    );
};

export default Products;