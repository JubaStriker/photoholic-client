import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-base-100 shadow-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to='/home' className={({ isActive }) =>
                            isActive ? "text-green-800 flex" : "text-amber-400"
                        }> <p className='font-bold text-lg'>Home</p>
                        </NavLink></li>
                        <li tabIndex={0}>
                            <NavLink to='/blog' className={({ isActive }) =>
                                isActive ? "text-green-800 flex" : "text-amber-400"
                            }> <p className='font-bold text-lg'>Blog</p>
                            </NavLink>
                        </li>
                        <li><NavLink to='/about' className={({ isActive }) =>
                            isActive ? "text-green-800 flex" : "text-amber-400"
                        }> <p className='font-bold text-lg'>About us</p>
                        </NavLink></li>
                    </ul>
                </div>
                <Link to='/'>
                    <span>P</span>
                    <span>H</span>
                    <span>O</span>
                    <span>T</span>
                    <span>O</span>
                    <span>H</span>
                    <span>O</span>
                    <span>L</span>
                    <span>I</span>
                    <span>C</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li>
                        <NavLink to='/home' className={({ isActive }) =>
                            isActive ? "text-green-600 flex" : "text-amber-400"
                        }> <p className='font-bold text-lg '>Home</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/blog' className={({ isActive }) =>
                            isActive ? "text-green-600 flex" : "text-amber-400"
                        }> <p className='font-bold text-lg'>Blog</p>
                        </NavLink>
                    </li>
                    <li><NavLink to='/about' className={({ isActive }) =>
                        isActive ? "text-green-600 flex" : "text-amber-400"
                    }> <p className='font-bold text-lg '>About us</p>
                    </NavLink>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-outline text-amber-400">Get started</button>
            </div>
        </div>
    );
};

export default Header;