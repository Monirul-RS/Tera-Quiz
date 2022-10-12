import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const quiz = useLoaderData();
    console.log(quiz.data);
    return (
        <div className='mt-6'>
            <h1 className='text-3xl underline font-bold text-blue-400 mb-12'>BarChart</h1>
            <ResponsiveContainer width='70%' height={400}>
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