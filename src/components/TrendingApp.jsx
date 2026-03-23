import React, { Suspense, use } from 'react';
import Title from './Title';
import SubTitle from './SubTitle';
import AppCard from './AppCard';
import { Link } from 'react-router';

const TrendingApp = ({ appsPromise }) => {
    const appsData = use(appsPromise);

    return (
        <div className='px-8 mt-8'>
            <Title title="Trending Apps"></Title>
            <SubTitle subTitle="Explore All Trending Apps on the Market developed by us"></SubTitle>

           <div className='grid grid-cols-4 p-8 gap-4 mt-8'>
            {
                appsData.slice(0,8).map((app, index) => <AppCard key={index} app={app}></AppCard>)
            }
           </div>

           <div className='text-center mb-8'>
            <Link to="apps"><button className='bg-[#9F62F2] btn border-none'>Show All</button></Link>
           </div>

        </div>
    );
};

export default TrendingApp;