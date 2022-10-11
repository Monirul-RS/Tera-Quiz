import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-blue-600 mt-14'>404 <span className='text-3xl text-blue-500' > This page cannot be found!</span></h1>
            <h1 className='text-2xl'>Go to the Home page <Link className='underline' to='/'>Topics</Link></h1>
        </div>
    );
};

export default ErrorPage;