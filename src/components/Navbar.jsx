import React from 'react';
import { Link, NavLink } from 'react-router';
import { IoLogoGithub, IoLogoIonic } from "react-icons/io5";

const Navbar = () => {
    const navLinks = [
        {
            name: 'Home', path: '/'
        },

        {
            name: 'Apps', path: '/apps'
        },
          
        {name: 'Installation', path: '/installation'
        }
    ]
    return (
        <div className=''>
            <div className="navbar shadow-sm px-4 md:px-8 lg:px-16 fixed top-0 left-0 w-full z-50 bg-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                          {
                            navLinks.map((link, index) => <li key={index}><NavLink to={link.path}>{link.name}</NavLink></li>)
                        }
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost text-xl"><IoLogoIonic className="text-blue-500" />
                                <span>NOA IO</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navLinks.map((link, index) => <li key={index}><NavLink to={link.path}>{link.name}</NavLink></li>)
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-[#9F62F2] border-none" href='https://github.com/tanjim-room/' target='_blank'><IoLogoGithub size={20}></IoLogoGithub> Contribute</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;