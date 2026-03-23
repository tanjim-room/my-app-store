import React, { createContext, Suspense, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Impact from '../components/Impact';
import TrendingApp from '../components/TrendingApp';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';
export const AppContext = createContext({})
const MainLayout = () => {
    const [install, setInstall] = useState([]);
   

    const handleInstall = (appId) => {
        if(!install.includes(appId)) {
            setInstall([...install, appId]);
        }
        else{
            alert('App is already installed');
        }
    }
    const handleUninstall = (appId) => {
        const updatedInstall = install.filter(id => id !== appId);
        setInstall(updatedInstall);
    }
     const appInfo = {
        install,
        setInstall,
        handleInstall,
        handleUninstall
    }


    return (
        <AppContext.Provider value={appInfo}>
            <div className='h-full'>
            <Navbar></Navbar>
            <main className='pt-16'>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
        </AppContext.Provider>
    );
};

export default MainLayout;