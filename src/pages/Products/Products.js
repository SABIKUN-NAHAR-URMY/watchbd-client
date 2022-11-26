import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BooknowModal from './BooknowModal/BooknowModal';
import ProductDisplay from './ProductDisplay/ProductDisplay';

const Products = () => {
    const products = useLoaderData();
    console.log(products);
    const [bookNow, setBookNow] = useState(null);
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
                    setBookNow={setBookNow}
                ></BooknowModal>
            }
        </section>
    );
};

export default Products;