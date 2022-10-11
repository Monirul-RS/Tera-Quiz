import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
// import Topic from '../Topics/Topics';

const Home = () => {
    const topics = useLoaderData().data;
    // console.log(topics);
    return (
        <div>
            <div>
                <div>
                    <img src="" alt="" />
                </div>
                <div>
                    <h1>aushfujsdfsjdi</h1>
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