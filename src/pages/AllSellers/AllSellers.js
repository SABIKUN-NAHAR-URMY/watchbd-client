import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AllSellers = () => {
    const [allSellers, setAllSellers] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/users/allSellers')
            .then(data => {
                setAllSellers(data.data);
            })
    }, [])

    console.log(allSellers);
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email Address</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allSellers.map((sellers, i) =>  <tr key={i}>
                                <th>{i+1}</th>
                                <td>{sellers.name}</td>
                                <td>{sellers.email}</td>
                                <td><button className='btn btn-sm'>Delete</button></td>
                                <td><button className='btn btn-sm'>Verify</button></td>
                              </tr>)
                        }
                        
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;