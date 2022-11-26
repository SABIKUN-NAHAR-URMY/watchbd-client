import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AllBuyers = () => {
    const [allBuyers, setAllBuyers] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/users/allBuyers')
            .then(data => {
                console.log(data.data);
                setAllBuyers(data.data);
            })
    }, [])
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
                            allBuyers.map((buyers, i) =>  <tr key={i}>
                                <th>{i+1}</th>
                                <td>{buyers.name}</td>
                                <td>{buyers.email}</td>
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

export default AllBuyers;