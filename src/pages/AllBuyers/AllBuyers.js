import userEvent from '@testing-library/user-event';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const AllBuyers = () => {
    const [allBuyers, setAllBuyers] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/users/allBuyers')
            .then(data => {
                setAllBuyers(data.data);
            })
    }, [])

    const handelDelete = buyers => {
        const agree = window.confirm(`Are you sure you want to delete : ${buyers.name} ? `);
        if(agree){
            fetch(`http://localhost:5000/users/allBuyers/${buyers._id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    toast.success('User deleted successfully.');
                    const remainingBuyers = allBuyers.filter(buyer => buyer._id !== buyers._id);
                    setAllBuyers(remainingBuyers);
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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allBuyers.map((buyers, i) =>  <tr key={i}>
                                <th>{i+1}</th>
                                <td>{buyers.name}</td>
                                <td>{buyers.email}</td>
                                <td><button onClick={()=>handelDelete(buyers)} className='btn btn-sm'>Delete</button></td>
                              </tr>)
                        }
                        
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;