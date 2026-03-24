import React, { useContext } from 'react';
import { MdOutlineFileDownload } from 'react-icons/md';
import { MdOutlineStar } from "react-icons/md";
import { AppContext } from '../layouts/MainLayout';

const InstalledCard = ({ app }) => {
    const {install, handleUninstall} = useContext(AppContext);
    return (
        <div className='flex flex-col md:flex-row justify-between items-center gap-2 py-4 border-1 rounded-md mx-20 border-gray-300 px-4 mb-4'>
            <div className='flex gap-4 flex-col md:flex-row items-center gap-2'>
                <div>
                    <img src={app?.image} alt="" className='h-16 w-16 bg-gray-200 rounded-md' />
                </div>
                <div className='space-y-1'>
                    <h2 className='text-lg font-semibold text-center md:text-left'>{app.title}</h2>
                    <div className='flex flex-col sm:flex-row gap-2 justify-center sm:justify-between items-center bg-white space-x-2'>
                        <div className="badge border-none rounded-md text-[#00D390] text-md  py-2 font-semibold"><MdOutlineFileDownload></MdOutlineFileDownload> {app.downloads}</div>
                        <div className="badge border-none rounded-md text-[#FF8811] text-md  py-2 font-semibold"><MdOutlineStar></MdOutlineStar> {app.ratingAvg}</div>
                        <div className='badge border-none rounded-md text-white text-md  py-2 font-semibold'>{app.size} MB</div>
                    </div>
                </div>
            </div>
            <div>
                <button onClick={() => handleUninstall(app.id)} className="bg-green-500 text-white px-4 py-2 rounded-md font-semibold">
                    Uninstall
                </button>
            </div>
        </div>
    );
};

export default InstalledCard;