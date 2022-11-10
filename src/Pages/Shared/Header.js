import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContextProvider';
import { getAuth, signOut } from "firebase/auth";


const Header = () => {

    const auth = getAuth();
    const { user } = useContext(AuthContext)

    const handleLogOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }


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
                        <li>
                            <NavLink to='/services' className={({ isActive }) =>
                                isActive ? "text-green-800 flex" : "text-amber-400"
                            }> <p className='font-bold text-lg'>Services</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/myReviews' className={({ isActive }) =>
                                isActive ? "text-green-800 flex" : "text-amber-400"
                            }> <p className='font-bold text-lg'>My Reviews</p>
                            </NavLink>
                        </li>
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
                <Link to='/home'>
                    <span className='text-2xl font-semibold text-green-700'>P</span>
                    <span className='text-2xl font-semibold text-amber-400'>H</span>
                    <span className='text-2xl font-semibold text-amber-400'>O</span>
                    <span className='text-2xl font-semibold text-amber-400'>T</span>
                    <span className='text-2xl font-semibold text-amber-400'>O</span>
                    <span className='text-2xl font-semibold text-amber-400'>H</span>
                    <span className='text-2xl font-semibold text-amber-400'>O</span>
                    <span className='text-2xl font-semibold text-amber-400'>L</span>
                    <span className='text-2xl font-semibold text-amber-400'>I</span>
                    <span className='text-2xl font-semibold text-green-700'>C</span>
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
                        <NavLink to='/services' className={({ isActive }) =>
                            isActive ? "text-green-600 flex" : "text-amber-400"
                        }> <p className='font-bold text-lg'>Services</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/myReviews' className={({ isActive }) =>
                            isActive ? "text-green-600 flex" : "text-amber-400"
                        }> <p className='font-bold text-lg'>My Reviews</p>
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


                {user ? <><button onClick={handleLogOut} className="btn btn-outline text-amber-400 hover:bg-orange-400 mr-2">Log Out</button> <p>{user.displayName}</p></> : <Link to='/login'><button className="btn btn-outline text-amber-400 hover:bg-orange-400">Log In</button></Link>}
            </div>
        </div>
    );
};

export default Header;