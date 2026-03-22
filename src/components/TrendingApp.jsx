import React, { Suspense, use } from 'react';
import Title from './Title';
import SubTitle from './SubTitle';
import AppCard from './AppCard';

const TrendingApp = ({ appsPromise }) => {
    const appsData = use(appsPromise);

    return (
        <div className='px-8'>
            <Title title="Trending Apps"></Title>
            <SubTitle subTitle="Explore All Trending Apps on the Market developed by us"></SubTitle>

           <div className='grid grid-cols-4 p-8 gap-4'>
            {
                appsData.map((app, index) => <AppCard key={index} app={app}></AppCard>)
            }
           </div>

        </div>
    );
};

export default TrendingApp;