import React from 'react';
import Title from './Title';
import SubTitle from './SubTitle';
import { useLoaderData } from 'react-router';
import AppCard from './AppCard';
import { FaSearch } from 'react-icons/fa';

const AppsPage = () => {
    const appsData = useLoaderData();
    return (
        <div className='px-8'>
            <div className='py-16'>
                <Title title="Our All Applications"></Title>
            <SubTitle subTitle="Explore All Trending Apps on the Market developed by us"></SubTitle>
            </div>
            <div className='px-8 flex justify-between'>
                <div>
                    <h2 className='font-semibold text-lg'>({appsData.length}) Apps Found</h2>
                </div>
                <div className='relative'>
                    <FaSearch className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-500' size={14} />
                    <input type="search" placeholder='Search Apps' className='w-full min-w-64 rounded-lg border p-2 pl-9' />
                </div>
            </div>

            <div className='grid grid-cols-4 gap-4 p-8'>
                {
                    appsData.map((app, index) => <AppCard key={index} app={app}></AppCard>)
                } 
            </div>
        </div>
    );
};

export default AppsPage;