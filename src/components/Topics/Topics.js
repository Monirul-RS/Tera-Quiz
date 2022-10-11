import React from 'react';

const Topics = ({ topic }) => {
    const { logo, name } = topic

    return (
        <div>
            <div className='border-2 rounded-xl ml-4'>
                <div>
                <img className='bg-blue-200 sm:img-fluid rounded-xl' src={logo} alt="" />
                </div>
                <div className='flex justify-between m-6'>
                    <h2 className='text-xl'>{name}</h2>
                    <button className='btn btn-primary'>Start</button>
                </div>
            </div>
        </div>
    );
};

export default Topics;