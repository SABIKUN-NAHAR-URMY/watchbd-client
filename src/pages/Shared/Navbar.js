import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import logo from '../../images/logo.png';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handelLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.error(err))
    }
    const menuItem = <React.Fragment>
        <li className='text-xl font-semibold'><Link to='/'>Home</Link></li>
        <li className='text-xl font-semibold'><Link to='/blog'>Blog</Link></li>
        {
            user?.uid ?
                <>
                    <li className='text-xl font-semibold'><Link to='/dashboard'>Dashboard</Link></li>
                    <li className='text-xl font-semibold'><button onClick={handelLogOut}>Sing Out</button></li>
                </>
                :
                <>
                    <li className='text-xl font-semibold'><Link to='/login'>Login</Link></li>
                    <li className='text-xl font-semibold'><Link to='/signup'>Signup</Link></li>
                </>
        }
    </React.Fragment>
    return (
        <div className=''>
            <div className="navbar fixed top-0 z-30 bg-white shadow-xl p-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                menuItem
                            }
                        </ul>
                    </div>
                    <img className='w-10' src={logo} alt="" />
                    <Link className="btn btn-ghost normal-case text-xl">WatchBD</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {
                            menuItem
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;