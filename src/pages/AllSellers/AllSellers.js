import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const AllSellers = () => {
    const [allSellers, setAllSellers] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/users/allSellers')
            .then(data => {
                setAllSellers(data.data);
            })
    }, [])

    const handelVerify = sellers => {
        fetch(`http://localhost:5000/users/${sellers._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(sellers)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Verified Seller');
                }
            })
    }

    const handelDelete = sellers => {
        const agree = window.confirm(`Are you sure you want to delete : ${sellers.name} ? `);
        if (agree) {
            fetch(`http://localhost:5000/users/allSellers/${sellers._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success('User deleted successfully.');
                        const remainingSellers = allSellers.filter(seller => seller._id !== sellers._id);
                        setAllSellers(remainingSellers);
                    }
                })
        }
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email Address</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allSellers.map((sellers, i) => <tr key={i}>
                                <th>{i + 1}</th>
                                <td>{sellers.name}</td>
                                <td>{sellers.email}</td>
                                <td><button onClick={() => handelDelete(sellers)} className='btn btn-sm'>Delete</button></td>
                                <td>{
                                    sellers?.status ?
                                    <button className='btn btn-sm btn-disabled'>Verified</button>
                                    :
                                    <button onClick={()=>handelVerify(sellers)} className='btn btn-sm'>Verify</button>
                                }</td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;