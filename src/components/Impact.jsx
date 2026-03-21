import React from 'react';
import Title from './Title';

const Impact = () => {
    return (
        <div className='bg-[#9F62F2] text-white py-16'>
            <Title title="Trusted by Millions, Built for You"></Title>
            <div className='flex justify-evenly items-center mt-8'>
                <div className='text-center space-y-2'>
                    <h4>Total Downloads</h4>
                    <p className='font-bold text-4xl'>29.6M</p>
                    <p>21% more than last month</p>
                </div>
                 <div className='text-center  space-y-2'>
                    <h4>Total  Reviews</h4>
                    <p className='font-bold text-4xl'>906K</p>
                    <p>46% more than last month</p>
                </div>
                 <div className='text-center  space-y-2'>
                    <h4>Active Apps</h4>
                    <p className='font-bold text-4xl'>130+</p>
                    <p>31 more will Launch</p>
                </div>
            </div>
        </div>
    );
};

export default Impact;