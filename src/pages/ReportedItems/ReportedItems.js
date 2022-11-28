import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Loading from '../Loading/Loading';

const ReportedItems = () => {
    const { data: reportedItems = [], isLoading, refetch } = useQuery({
        queryKey: ['reportedItems'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/reported`)
            const data = await res.json();
            return data;
        }
    })

    // const [reportedItemsData, setReportedItemsData] = useState(reportedItems);

    const handelDelete = id => {
        const agree = window.confirm('Are you sure you want to delete?');
        if (agree) {
            fetch(`http://localhost:5000/reported/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success('Deleted Reported Item successfully.');
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
                            <th>Seller Email Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            reportedItems.map((reportedItem, i) => <tr key={reportedItem._id}>
                                <th>{i + 1}</th>
                                <td>{reportedItem.productName}</td>
                                <td>{reportedItem.email}</td>
                                <td><button onClick={() => handelDelete(reportedItem._id)} className='btn btn-sm'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReportedItems;