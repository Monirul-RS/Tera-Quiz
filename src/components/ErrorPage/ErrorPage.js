import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div className='mt-32 border-2 lg:w-2/5 p-6 rounded-xl bg-blue-200 shadow-xl shadow-indigo-600 mx-auto'>
                <h1 className='text-4xl font-bold text-blue-600 '>404! <span className='text-3xl text-blue-500' > This page cannot be found!</span></h1>
                <h1 className='text-3xl mt-4'>Go to the Home page <Link to='/'><button className='btn btn-info'>Topics</button></Link></h1>
            </div>
        </div>
    );
};

export default ErrorPage;