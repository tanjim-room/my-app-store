import React, { Suspense } from 'react';
import Hero from './Hero';
import Impact from './Impact';
import TrendingApp from './TrendingApp';

const HomePage = () => {
    const appsPromise = fetch('apps.json').then(res => res.json());
    return (
        <div>
            <Hero></Hero>
            <Impact></Impact>
            <Suspense fallback={<p>Loading...</p>}>
                <TrendingApp appsPromise={appsPromise}></TrendingApp>
            </Suspense>
        </div>
    );
};

export default HomePage;