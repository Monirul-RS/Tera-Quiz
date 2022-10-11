import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import img from '../images/Banner5.jpg'
const Home = () => {
    const topics = useLoaderData().data;
    // console.log(topics);
    return (
        <div>
            <div>
                <div className='lg:flex border-2 p-4'>
                    <img className='lg:w-1/2 h-96 border md:w-full rounded-xl' src={img} alt="" /> 
                    <h1 className=' text-indigo-600 lg:text-6xl md:text-5xl sm:text-3xl font-bold ml-3 '>Welcome to Tera Quiz
                    <br />
                    <span className='text-indigo-400'>Test your skills and practice.</span>
                    </h1>   
               
                </div>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 p-9'>
                {
                    topics.map(topic => <Topic
                        key={topic.id}
                        topic={topic}
                    ></Topic>)
                }
            </div>
        </div>
    );
};

export default Home;