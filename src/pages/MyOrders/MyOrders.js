import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const { data: myOrders = [], isLoading } = useQuery({
        queryKey: ['myOrders'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myOrders/${user?.email}`)
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders.map(myOrder => <tr key={myOrder._id}>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={myOrder.picture} alt="" />
                                        </div>
                                    </div>

                                </td>
                                <td>
                                    {myOrder.itemName}
                                </td>
                                <td>{myOrder.price}</td>
                                <td>
                                    {
                                        myOrder.price && !myOrder.paid && <Link to={`/dashboard/payment/${myOrder._id}`}>
                                        <button className='btn btn-sm'>Pay</button>
                                        </Link>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyOrders;