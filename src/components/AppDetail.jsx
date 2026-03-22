import React from 'react';
import { MdOutlineFileDownload, MdOutlineStar, MdReviews } from 'react-icons/md';
import { useLoaderData, useParams } from 'react-router';
import Description from './Description';

const AppDetail = () => {
    const appsData = useLoaderData();
    console.log(appsData);
    const { id } = useParams();

    const app = appsData.find(app => app.id === parseInt(id));
    const {description} = app
    return (
        <div className='px-16 mt-8 h-[620px]'>
            <div className="card card-side shadow-sm">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp" className='p-4 w-72 h-72'
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
                        <button className="btn border-none bg-[#00D390]">Install Now ({app?.size} MB)</button>
                    </div>
                    
                </div>
                
            </div>
            <Description description={description}></Description>
        </div>
    );
};

export default AppDetail;