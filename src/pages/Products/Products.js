import React, { useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../Loading/Loading';
import BooknowModal from './BooknowModal/BooknowModal';
import ProductDisplay from './ProductDisplay/ProductDisplay';

const Products = () => {
    const products = useLoaderData();
    const navigation = useNavigation();
    const [bookNow, setBookNow] = useState(null);

    const filtered = products?.filter(product => {
        return product.paid !== true;
      }) || [];

    if(navigation.state === "loading"){
        return <Loading></Loading>
    }
    return (
        <section>
            <div className='grid gap-6 grid-cols-1 lg:grid-cols-2 mt-10 mb-10'>
                {
                    filtered.map((product, i) => <ProductDisplay
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