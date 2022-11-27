import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
const Payment = () => {
    const booking = useLoaderData();
    const navigation = useNavigation();
    if(navigation.state === 'loading'){
        return <Loading></Loading>
    }
    console.log(booking);
    return (
        <div>
            <h2 className="text-3xl mb-5">Payment for {booking.itemName}</h2>
            <p className="text-2xl">Please pay <strong>${booking.price}</strong></p>
            <div className='w-96 mt-5'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                    booking={booking} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;