import React, { useContext } from 'react';
import errorImg from '../../../images/404-pages.jpg';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const ErrorPage = () => {
    const {logOut} = useContext(AuthContext);
    const error = useRouteError();
    const navigate = useNavigate();
    const handelLogOut = () => {
        logOut()
            .then(() => { 
                navigate('/');
            })
            .catch(err => console.error(err))
    }
    return (
        <div>
            <h2 className="text-2xl text-red-600">Something went wrong!!</h2>
            <h2 className="text-2xl text-red-600">{error.statusText || error.message}</h2>
            <h3 className='text-3xl'>Please <button className='btn btn-primary' onClick={handelLogOut}>Sing Out</button></h3>
            <img src={errorImg} alt="" />
        </div>
    );
};

export default ErrorPage;