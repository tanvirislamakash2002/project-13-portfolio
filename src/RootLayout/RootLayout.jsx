import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

const RootLayout = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <div className="">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default RootLayout;