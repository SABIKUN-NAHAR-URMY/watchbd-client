import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useUsers from '../../Hooks/useUsers/useUsers';
import Navbar from '../Shared/Navbar';

const DashboardLayout = () => {
    const {user} = useContext(AuthContext);
    const [isAdmin] = useUsers(user?.email);
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
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
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;