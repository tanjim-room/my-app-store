import React from 'react';

const Description = ({description}) => {
    return (
        <div className='w-1/2 py-6'>
            <h2 className='text-2xl font-semibold'>Description</h2>
            <p className='py-4'>{description}</p>
        </div>
    );
};

export default Description;