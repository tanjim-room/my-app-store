import React, { Suspense } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Impact from '../components/Impact';
import TrendingApp from '../components/TrendingApp';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    const appsPromise = fetch('apps.json').then(res => res.json());
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;