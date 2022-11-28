import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import iconVerify from '../../../images/verified.png';
import Loading from '../../Loading/Loading';

const ProductDisplay = ({ product, setBookNow }) => {
    const { user } = useContext(AuthContext);

    const { picture, description, location, mobileNumber, originalPrice, postedDate, productName, rating, resalePrice, sellerName, status, yearsUse, sell, email } = product;

    const [verifiedData, setVerifiedData] = useState('');
    const [buyerUser, setBuyerUser] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/users/sellerVerify/${email}`)
            .then(res => res.json())
            .then(data => {
                setVerifiedData(data);
            })
    }, [email])

    useEffect(() => {
        fetch('http://localhost:5000/users/allBuyers')
            .then(res => res.json())
            .then(data => {
                const filtered = data.filter(ud => ud.email === user?.email);
                filtered.map(usrD => setBuyerUser(usrD.email));
            } )
    }, [user?.email])

    const handelReport = product => {
        console.log(product);
        fetch('http://localhost:5000/reported', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.acknowledged) {
                    toast.success(`Reported to admin added successfully`);
                }
                else {
                    toast.error('Already added ');
                }
            })
    }


    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title pb-5">{productName}</h2>
                <div className='text-lg'>
                    <div className='flex font-semibold pb-5'>
                        <div className='flex items-center pr-5'>
                            <p className='pr-3'>Seller: {sellerName}</p>
                            {
                                verifiedData?.isVerified ?
                                    <>
                                        <p>Verified</p><span><img className='w-4 h-4' src={iconVerify} alt="" /></span>
                                    </>
                                    :
                                    <p>{status}</p>
                            }
                        </div>
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
                    <label onClick={() => setBookNow(product)} htmlFor="booknow-modal" className="btn">Book Now</label>
                </div>
                <div className='text-center'>
                    {
                        user?.email === buyerUser &&
                        <button onClick={() => handelReport(product)} className='w-52 btn btn-sm'>Reported Item</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductDisplay;