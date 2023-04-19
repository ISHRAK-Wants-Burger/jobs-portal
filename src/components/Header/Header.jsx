import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            {/* HeaderNav */}
            <nav className="navbar bg-base-100 px-28 bg-gradient-to-r from-indigo-100 py-10 flex sm:flex-col md:flex-row">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52  text-bold">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/statistics'>Statistics</Link></li>
                            <li><Link to='/applied-jobs'>Applied Jobs</Link></li>
                            <li><Link to='/blogs'>Blogs</Link></li>
                        </ul>
                    </div>
                    <Link to='/' className="text-primary font-bold normal-case text-xl md:text-4xl">Jobs Portal</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-xl text-gray-500">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/statistics'>Statistics</Link></li>
                        <li><Link to='/applied-jobs'>Applied Jobs</Link></li>
                        <li><Link to='/blogs'>Blogs</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn bg-indigo-400 bg-gradient-to-l from-indigo-500">Start Applying</button>
                </div>
            </nav>
        </div>
    );
};

export default Header;