import React from 'react';
import logo from '../../images/logo.png';

const Footer = () => {
    return (
        <footer className="footer rounded-lg justify-around items-center mt-5 p-4  text-black">
            <div className="items-center grid-flow-col">
                <img className='w-32' src={logo} alt="" />
                <p>Copyright © 2022 - All right reserved</p>
            </div>
            <div className="footer p-10 ">
                <div>
                    <span className="footer-title">ABOUT WatchBD</span>
                    <p>There are several different avenues you can use to sell <br /> your watch, such as selling or consigning directly to dealers, <br /> consigning with auction houses or posting to online classifieds or forums. <br /> Not every one will work for every watch.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;