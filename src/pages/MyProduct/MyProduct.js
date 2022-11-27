import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Loading from '../Loading/Loading';

const MyProduct = () => {
    const { user } = useContext(AuthContext);
    const [myProductAd, setMyProductAd] = useState([]);

    const { data: myProducts = [], isLoading } = useQuery({
        queryKey: ['myProducts'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myProducts/${user?.email}`)
            const data = await res.json();
            return data;
        }
    })

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
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            myProducts.map((myProduct, i) =>  <tr key={myProduct._id}>
                                <th>{i+1}</th>
                                <td>{myProduct.productName}</td>
                                {
                                   myProduct.paid === true  ?
                                   <td>Sold</td>  
                                   :
                                   <td>{myProduct.sell} <button onClick={()=>setMyProductAd(myProduct._id)} className='btn btn-xs'>Ad</button></td>
                                }
                                <td>{myProduct.originalPrice}</td>
                                <td>{myProduct.resalePrice}</td>
                                <td><button className='btn btn-sm'>Delete</button></td>
                              </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProduct;