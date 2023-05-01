import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const HomeLayOut = () => {
    return (
        <div>
            <Navbar></Navbar>

            <Outlet></Outlet>
        </div>
    );
};

export default HomeLayOut;