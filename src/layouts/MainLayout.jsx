import React, { Suspense } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Impact from '../components/Impact';
import TrendingApp from '../components/TrendingApp';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    
    return (
        <div className='h-full'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;