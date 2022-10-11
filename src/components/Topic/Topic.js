import React from 'react';

const Topic = ({ topic }) => {
    const { logo, name, total } = topic
    return (
        <div>

            <div className='border-2 rounded-xl m-4'>
                <div>
                    <img className='bg-blue-200 img-fluid rounded-xl' src={logo} alt="" />
                </div>
                <div className='flex justify-between m-4'>
                    <div>
                    <h2 className='text-xl font-semibold'>{name}</h2>
                    <h2>Total-Quiz: {total}</h2>
                    </div>
                    <button className='btn py-0 btn-primary'>Start</button>
                </div>
            </div>

        </div>
    );
};

export default Topic;