import React from 'react';
import Title from './Title';
import SubTitle from './SubTitle';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from 'react-router';

const ErrorPage = () => {
    const navigate = useNavigate()
    return (
        <div className='h-full relative'>
            
            <div className='flex justify-center mt-16'>
                <img src="https://i.ibb.co.com/hq6rXvx/Untitled-design-3.png" alt="" />
                
            </div>
            <div className='mb-4 absolute top-25 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <Title title="Oops, page not found!"></Title>
                <SubTitle subTitle="The page you are looking for is not available."></SubTitle>
                <div className='flex justify-center mt-4'>
                    <button onClick={() => {
                        navigate(-1)
                    }} className='btn text-center bg-[#9F62F2] border-none'>Go Back</button>
                </div>
            </div>
            
            
        </div>
    );
};

export default ErrorPage;