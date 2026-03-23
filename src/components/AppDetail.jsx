import React, { useContext } from 'react';
import { MdOutlineFileDownload, MdOutlineStar, MdReviews } from 'react-icons/md';
import { useLoaderData, useParams } from 'react-router';
import Description from './Description';
import { AppContext } from '../layouts/MainLayout';
import { ToastContainer } from 'react-toastify';
import ReviewChart from './ReviewChart';

const AppDetail = () => {
    const { install, setInstall, handleInstall } = useContext(AppContext);
    const appsData = useLoaderData();
    console.log(appsData);
    const { id } = useParams();

    const app = appsData.find(app => app.id === parseInt(id));
    if (!app) {
        return (
            <div className='px-16 mt-8 min-h-[620px] text-center flex flex-col items-center justify-center'>
                <h2 className='text-2xl font-semibold'>App not found</h2>
                <p className='mt-2 text-gray-600'>The app you requested does not exist.</p>
            </div>
        );
    }

    const { description } = app
    console.log(install)
    return (
        <div className='px-16 mt-8 min-h-[620px]'>
           
            <div className="card card-side shadow-sm">
                <figure>
                    <img
                        src={app?.image} className='p-4 w-72 h-72'
                        alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl">{app?.title}</h2>
                    <p>Developed by <span className='text-[#9F62F2] font-semibold'>{app?.companyName}</span></p>
                    <hr />
                    <div className='flex gap-16 my-4'>
                        <div>
                            <p className='text-[#00D390]'><MdOutlineFileDownload size={30} /></p>
                            <p>Downloads</p>
                            <p className='text-2xl font-semibold'>{app?.downloads}</p>
                        </div>
                        <div>
                            <p className='text-[#FF8811]'><MdOutlineStar size={30} /></p>
                            <p>Rating</p>
                            <p className='text-2xl font-semibold'>{app?.ratingAvg}</p>
                        </div>
                        <div>
                            <p className='text-[#9F62F2]'><MdReviews size={30} /></p>
                            <p>Reviews</p>
                            <p className='text-2xl font-semibold'>{app?.reviews}</p>
                        </div>
                    </div>

                    <div className="card-actions mt-2">
                        {
                            install.includes(app.id) ? <button className='btn bg-[#00D390] border-none text-gray-500' disabled>Installed</button> : <button onClick={() => handleInstall(app.id)} className='btn bg-[#00D390] border-none'>Install Now ({app?.size} MB)</button>
                        }
                    </div>

                </div>

            </div>
            <ReviewChart app={app}></ReviewChart>
            <Description description={description}></Description>
        </div>
    );
};

export default AppDetail;