import React from 'react';
import Title from './Title';
import SubTitle from './SubTitle';
import { useLoaderData } from 'react-router';
import AppCard from './AppCard';

const AppsPage = () => {
    const appsData = useLoaderData();
    return (
        <div>
            <div className='py-16'>
                <Title title="Our All Applications"></Title>
            <SubTitle subTitle="Explore All Trending Apps on the Market developed by us"></SubTitle>
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