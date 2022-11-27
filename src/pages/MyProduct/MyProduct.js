import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Loading from '../Loading/Loading';

const MyProduct = () => {
    const { user } = useContext(AuthContext);

    const { data: myProducts = [], isLoading, refetch } = useQuery({
        queryKey: ['myProducts'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myProducts/${user?.email}`)
            const data = await res.json();
            return data;
        }
    })

    // advertising 
    const handelAd = myProduct => {
        fetch('http://localhost:5000/advertise', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(myProduct)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.acknowledged) {
                    toast.success('Advertise Done');
                }
                else{
                    toast.error('Already advertise this Item');
                }
            })
    }

    const handelDelete = myProduct => {
        const agree = window.confirm(`Are you sure you want to delete : ${myProduct.name} ? `);
        if (agree) {
            fetch(`http://localhost:5000/myProducts/${myProduct._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success('Products deleted successfully.');
                        refetch();
                    }
                })
        }
    }

    if (isLoading) {
        <Loading></Loading>
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Sell Status</th>
                            <th>Original Price</th>
                            <th>Resale Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myProducts.map((myProduct, i) => <tr key={myProduct._id}>
                                <th>{i + 1}</th>
                                <td>{myProduct.productName}</td>
                                {
                                    myProduct?.paid === true ?
                                        <td>Sold</td>
                                        :
                                        <td>{myProduct.sell} <button onClick={() => handelAd(myProduct)} className='btn btn-xs'>Advertise</button></td>
                                }
                                <td>{myProduct.originalPrice}</td>
                                <td>{myProduct.resalePrice}</td>
                                <td><button onClick={() => handelDelete(myProduct)} className='btn btn-sm'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProduct;