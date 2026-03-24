import React, { useContext, useMemo, useState } from 'react';
import Title from './Title';
import SubTitle from './SubTitle';
import { AppContext } from '../layouts/MainLayout';
import { useLoaderData, useNavigate } from 'react-router';
import InstalledCard from './InstalledCard';

const InstallPage = () => {
    const navigate = useNavigate();
    const {install} = useContext(AppContext);
    const allApps = useLoaderData();
    const [sortOrder, setSortOrder] = useState('');
    const installedApps = allApps.filter((app) => install.includes(app.id));

    const sortedInstalledApps = useMemo(() => {
        if (!sortOrder) {
            return installedApps;
        }

        const sortedApps = [...installedApps];

        if (sortOrder === 'downloads-asc') {
            sortedApps.sort((a, b) => a.downloads - b.downloads);
        }

        if (sortOrder === 'downloads-desc') {
            sortedApps.sort((a, b) => b.downloads - a.downloads);
        }

        return sortedApps;
    }, [installedApps, sortOrder]);

    return (
        <div className='mt-8 min-h-[680px]'>
            <Title title="Your Installed Apps"></Title>
            <SubTitle subTitle="Explore All Trending Apps on the Market developed by us"></SubTitle>
            <div className='mt-2 mx-20 flex flex-col md:flex-row justify-between items-center'>
                <div>
                    <p className='text-xl font-semibold'>{sortedInstalledApps.length} Apps Found</p>
                </div>
                <div>
                    <select
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                        className='font-semibold p-2 border-1 rounded-md'
                    >
                        <option value="">Sort By</option>
                        <option value="downloads-asc">Downloads: Low-High</option>
                        <option value="downloads-desc">Downloads: High-Low</option>
                    </select>
                </div>
            </div>
            <div className="mt-8">
                {
                    sortedInstalledApps.length > 0 ? sortedInstalledApps.map((app) => (
                       <InstalledCard key={app.id} app={app} />
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