import React, { useEffect, useMemo, useRef, useState } from 'react';
import Title from './Title';
import SubTitle from './SubTitle';
import { useLoaderData, useNavigate } from 'react-router';
import AppCard from './AppCard';
import { FaSearch } from 'react-icons/fa';

const AppsPage = () => {
    const appsData = useLoaderData();
    const [searchText, setSearchText] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchLoading, setIsSearchLoading] = useState(false);
    const firstRender = useRef(true);
    const navigate = useNavigate()

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }

        setIsSearchLoading(true);
        const timer = setTimeout(() => {
            setSearchQuery(searchText);
            setIsSearchLoading(false);
        }, 250);

        return () => clearTimeout(timer);
    }, [searchText]);

    const filteredApps = useMemo(() => {
        const query = searchQuery.trim().toLowerCase();

        if (!query) {
            return appsData;
        }

        return appsData.filter((app) => {
            const title = app.title?.toLowerCase() || '';
           
            return title.includes(query);
        });
    }, [appsData, searchQuery]);

    return (
        <div className='px-8'>
            <div className='py-16'>
                <Title title="Our All Applications"></Title>
            <SubTitle subTitle="Explore All Trending Apps on the Market developed by us"></SubTitle>
            </div>
            <div className='px-8 flex flex-col sm:flex-row justify-between'>
                <div>
                    <h2 className='font-semibold text-lg'>({filteredApps.length}) Apps Found</h2>
                </div>
                <div className='relative'>
                    {isSearchLoading ? (
                        <span className='loading loading-spinner loading-xs absolute left-3 top-1/2 -translate-y-1/2 text-[#9F62F2]'></span>
                    ) : (
                        <FaSearch className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-500' size={14} />
                    )}
                    <input
                        type="search"
                        placeholder='Search Apps'
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        className='w-full min-w-64 rounded-lg border p-2 pl-9'
                    />
                </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-8'>
                {
                    isSearchLoading
                        ? <div className='col-span-4 flex justify-center py-10'><span className='loading loading-dots loading-lg text-[#9F62F2]'></span></div>
                        : filteredApps.map((app) => <AppCard key={app.id} app={app}></AppCard>)
                } 
            </div>

            {filteredApps.length === 0 && (
                <p className='pb-8 text-2xl  font-semibold text-center text-gray-500'>No apps match your search. <br /> <button onClick={() => setSearchText("")} className=' mt-2 bg-purple-500 border-none text-center btn'>Show All Apps</button></p>
            
            )}
        </div>
    );
};

export default AppsPage;