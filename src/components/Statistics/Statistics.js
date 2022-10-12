import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const quiz = useLoaderData();
    console.log(quiz.data);
    return (
        <div className='mt-6'>
     
            <ResponsiveContainer width='95%' height={400}>
            <BarChart width={500} height={400} data={quiz.data}>
            <Bar dataKey="total" fill="#8884d8" />
            <XAxis dataKey="name"></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>

            </BarChart>
            </ResponsiveContainer>
       

        </div>
    );
};

export default Statistics;