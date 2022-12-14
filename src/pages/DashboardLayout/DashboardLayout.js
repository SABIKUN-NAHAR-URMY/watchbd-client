import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useAdmin from '../../Hooks/useAdmin/useAdmin';
import useBuyer from '../../Hooks/useBuyer/useBuyer';
import useSeller from '../../Hooks/useSeller/useSeller';
import Navbar from '../Shared/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const[isAdmin] = useAdmin(user?.email);
    const[isSeller] = useSeller(user?.email);
    const[isBuyer] = useBuyer(user?.email);

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile mt-24">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <h2 className='flex justify-center items-center text-4xl font-bold'>WELCOME TO DASHBOARD</h2>
                        <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        { 
                            isAdmin && <>
                                <li><Link to='/dashboard/allSellers'>All Sellers</Link></li>
                                <li><Link to='/dashboard/allBuyers'>All Buyers</Link></li>
                                <li><Link to='/dashboard/reportedItems'>Reported Items</Link></li>
                            </>
                        }
                        {
                             isSeller && <>
                                <li><Link to='/dashboard/addProduct'>Add A Product</Link></li>
                                <li><Link to='/dashboard/myProduct'>My Products</Link></li>
                            </>
                        }
                        {
                             isBuyer && <>
                                <li><Link to='/dashboard/myOrders'>My Orders</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;