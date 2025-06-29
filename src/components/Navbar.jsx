import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {

    const links =
        <>
            <li>
                <NavLink
                    to="#home"
                    className={({ isActive }) => isActive ? "active" : ""}
                    onClick={(e) => {
                        if (window.location.pathname === '/') {
                            e.preventDefault();
                            const element = document.getElementById('home');
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                            }
                        }
                    }}
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="#about-me"
                    className={({ isActive }) => isActive ? "active" : ""}
                    onClick={(e) => {
                        if (window.location.pathname === '/') {
                            e.preventDefault();
                            const element = document.getElementById('about-me');
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                            }
                        }
                    }}
                >
                    About me
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="#skills"
                    className={({ isActive }) => isActive ? "active" : ""}
                    onClick={(e) => {
                        if (window.location.pathname === '/') {
                            e.preventDefault();
                            const element = document.getElementById('skills');
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                            }
                        }
                    }}
                >
                    My Skills
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="#project-section"
                    className={({ isActive }) => isActive ? "active" : ""}
                    onClick={(e) => {
                        if (window.location.pathname === '/') {
                            e.preventDefault();
                            const element = document.getElementById('project-section');
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                            }
                        }
                    }}
                >
                    My Projects
                </NavLink>
            </li>

        </>


    return (
        <div className="fixed top-0 z-50 navbar bg-base-100 max-w-7xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <div className="w-24"><img src="logo.png" alt="" /></div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-blue-500 hover:bg-blue-600 border-blue-600 text-white rounded-xl">Resume</a>
            </div>
        </div>
    );
};

export default Navbar;