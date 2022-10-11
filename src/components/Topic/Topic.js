import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
    const { id, logo, name, total } = topic;
    return (
        <div>

            <div className='border-2 rounded-xl m-4'>
                <div>
                    <img className='bg-indigo-200 w-full rounded-xl' src={logo} alt="" />
                </div>
                <div className='flex justify-between m-4'>
                    <div>
                    <h2 className='text-xl font-semibold'>{name}</h2>
                    <h2>Total-Quiz: {total}</h2>
                    </div>
                    <Link to={`/quiz/${id}`}><button className='btn py-0 btn-primary'>Start</button></Link>
                </div>
            </div>

        </div>
    );
};

export default Topic;