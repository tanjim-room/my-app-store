import React, { createContext, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet, useNavigation } from 'react-router';
import { toast, ToastContainer, Bounce } from 'react-toastify';
import { addToInstallList, getInstallApps, uninstallFromList } from '../components/utilities/addToInstall';
export const AppContext = createContext({})
const MainLayout = () => {
    const [install, setInstall] = useState([]);
    const navigation = useNavigation();
    const isPageLoading = navigation.state === 'loading';

    useEffect(() => {
        setInstall(getInstallApps());
    }, []);

    const handleInstall = (appId) => {
        if (install.includes(appId)) {
            toast.error('App is already installed');
            return;
        }

        addToInstallList(appId);
        setInstall((prevInstall) => [...prevInstall, appId]);
        toast.success('App installed successfully!');
    }

    const handleUninstall = (appId) => {
        uninstallFromList(appId);
        setInstall((prevInstall) => prevInstall.filter((id) => id !== appId));
        toast.success('App uninstalled successfully!');
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
                     {isPageLoading && (
                    <div className='flex justify-center left-0 z-40  w-full items-center py-2'>
                        <span className="loading loading-ring loading-xl"></span>
                    </div>
                )}
                        <Outlet></Outlet>
                 
                </main>
                <Footer></Footer>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </AppContext.Provider>
    );
};

export default MainLayout;