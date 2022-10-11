import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topics from '../Topics/Topics';

const Home = () => {
    const topics = useLoaderData().data;
    console.log(topics);
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-2 p-9'>
            {
                topics.map(topic => <Topics
                key={topic.id}
                topic={topic}
                ></Topics>)
            }
        </div>
    );
};

export default Home;