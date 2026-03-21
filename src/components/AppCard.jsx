import React from 'react';
import { MdOutlineFileDownload } from "react-icons/md";
import { MdOutlineStar } from "react-icons/md";

const AppCard = ({app}) => {
    return (
        <div>
            <div className="card  shadow-sm">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
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
        </div>
    );
};

export default AppCard;