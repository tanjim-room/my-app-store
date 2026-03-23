import React from 'react';
import { MdOutlineFileDownload } from "react-icons/md";
import { MdOutlineStar } from "react-icons/md";
import { Link } from 'react-router';

const AppCard = ({ app }) => {
    return (
        <div>
            <Link to={`/apps/${app.id}`}>
                <div className="card  shadow-sm">
                    <figure>
                        <img
                            src={app.image} className='p-4 w-full h-48 object-cover'
                            alt="Shoes" />
                    </figure>
                    <div className="card-body bg-white">
                        <h2 className="card-title">
                            {app.title}

                        </h2>
                        <div className='flex justify-between items-center bg-white'>
                            <div className="badge border-none rounded-md text-[#00D390] text-lg bg-[#F1F5E8] py-4 font-semibold"><MdOutlineFileDownload></MdOutlineFileDownload> {app.downloads}</div>
                            <div className="badge border-none rounded-md text-[#FF8811] text-lg bg-[#F1F5E8] py-4 font-semibold"><MdOutlineStar></MdOutlineStar> {app.ratingAvg}</div>
                        </div>

                    </div>

                </div>
            </Link>
        </div>
    );
};

export default AppCard;