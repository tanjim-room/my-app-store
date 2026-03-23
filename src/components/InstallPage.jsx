import React, { useContext } from 'react';
import Title from './Title';
import SubTitle from './SubTitle';
import { AppContext } from '../layouts/MainLayout';
import { useLoaderData, useNavigate } from 'react-router';
import InstalledCard from './InstalledCard';

const InstallPage = () => {
    const navigate = useNavigate();
    const {install, handleInstall} = useContext(AppContext);
    const allApps = useLoaderData();
    const installedApps = allApps.filter(app => install.includes(app.id));

    return (
        <div className='mt-8 min-h-[680px]'>
            <Title title="Your Installed Apps"></Title>
            <SubTitle subTitle="Explore All Trending Apps on the Market developed by us"></SubTitle>
            <div className='mx-20 flex justify-between items-center'>
                <div>
                    <p className='text-xl font-semibold'>{installedApps.length} Apps Found</p>
                </div>
                <div>
                    <select name="" id="" className='font-semibold p-2 border-1 rounded-md'>
                        <option value="">Sort By X</option>
                        <option value="">Sort By y</option>
                    </select>
                </div>
            </div>
            <div className="mt-8">
                {
                    installedApps.length > 0 ? installedApps.map((app, index) => (
                       <InstalledCard key={index} app={app} />
                    )) : (
                       <div>
                         
                        <div className='flex justify-center items-start'>
                            
                            <img src="https://i.ibb.co.com/NvxZqJF/noot.png" alt="" />
                        </div>
                        <div className='my-8'>
                            <Title title="OPPS!! APP NOT FOUND"></Title>
                         <SubTitle subTitle="The App you are requesting is not found on our system.  please try another apps"></SubTitle>
                        </div>
                         <div className='flex justify-center my-2 mb-4'>
                    <button onClick={() => navigate(-1)} className='btn text-center bg-[#9F62F2] border-none'>Go Back</button>
                </div>
                       </div>
                    )

                }
            </div>
        </div>
    );
};

export default InstallPage;