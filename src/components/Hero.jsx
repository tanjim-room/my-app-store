import React from 'react';
import HeroHeading from './HeroHeading';
import HeroSubHeading from './HeroSubHeading';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import { FaAppStoreIos } from 'react-icons/fa';
import { Link } from 'react-router';

const Hero = () => {
    return (
        <div>
            <HeroHeading></HeroHeading>
            <HeroSubHeading></HeroSubHeading>
            <div className='text-center space-x-4 my-8'>
                <Link to={`https://play.google.com/store`} target='_blank'><button className='btn bg-white text-black border-gray-500 text-lg'><IoLogoGooglePlaystore size={20}></IoLogoGooglePlaystore> Google Play</button></Link>
                <Link to={`https://www.apple.com/app-store`} target='_blank'><button className='btn bg-white text-black border-gray-500 text-lg'><FaAppStoreIos size={20}></FaAppStoreIos> App Store</button></Link>
            </div>
            <div className='flex justify-center'>
                <img src="https://i.ibb.co.com/zHVDP9Q6/bg.png" alt="" className='object-contain' />
            </div>
        </div>
    );
};

export default Hero;