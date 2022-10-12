import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import img from '../images/Banner3.jpg'



const Home = () => {
    const topics = useLoaderData().data;
    // console.log(topics);
    return (
        <div>
            <div>
                <div className='lg:flex border-2 p-4'>
                    <img className='lg:w-full h-96 border md:w-full rounded-xl' src={img} alt="" />
                </div>
                <div className='border-0 m-6 p-8'>
                    <h1 className=' text-indigo-600 text-6xl  font-bold ml-3 '>Welcome to Tera Quiz
                        <br />
                        <span className='text-indigo-400 text-4xl'>Test your skills and practice.</span>
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