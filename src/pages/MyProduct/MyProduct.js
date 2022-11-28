import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Loading from '../Loading/Loading';

const MyProduct = () => {
    const { user } = useContext(AuthContext);
    const [myProductAd, setMyProductAd] = useState([]);

    const { data: myProducts = [], isLoading, refetch } = useQuery({
        queryKey: ['myProducts'],
        queryFn: async () => {
            const res = await fetch(`https://watchbd-server.vercel.app/myProducts/${user?.email}`)
            const data = await res.json();
            return data;
        }
    })

    // advertising 
    const handelAd = myProduct => {
        const productId = myProduct._id;
        delete myProduct._id;
        console.log(myProduct, productId);

        fetch('https://watchbd-server.vercel.app/advertise', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({...myProduct, productId})
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.acknowledged) {
                    toast.success(`Advertise added successfully`);
                }
                else{
                    toast.error('Already added ');
                }
            })
    }

    const handelDelete = myProduct => {
        const agree = window.confirm(`Are you sure you want to delete : ${myProduct.name} ? `);
        if (agree) {
            fetch(`https://watchbd-server.vercel.app/myProducts/${myProduct._id}`, {
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