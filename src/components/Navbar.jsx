import React from 'react';
import { NavLink } from 'react-router';

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
        <div>
            <div className="navbar shadow-sm">
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
                    <a className="btn btn-ghost text-xl">NOA IO</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navLinks.map((link, index) => <li key={index}><NavLink to={link.path}>{link.name}</NavLink></li>)
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Contribute</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;