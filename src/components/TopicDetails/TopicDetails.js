import React from 'react';
import { useLoaderData } from 'react-router-dom';

const TopicDetails = () => {
    const topic = useLoaderData();
    console.log(topic.questions);
    return (
        <div>
            <h2>Everything about topic{topic.name}</h2>
            <h2>{topic.questions}</h2>
        </div>
    );
};

export default TopicDetails;