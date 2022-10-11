import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const quiz = useLoaderData();
    console.log(quiz.data);
    return (
        <div>
        
            <ResponsiveContainer>
                <LineChart width={500} height={500} data={quiz.data}>
                    <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                    <XAxis dataKey="name" />
                    <YAxis />

                </LineChart>
            </ResponsiveContainer>

        </div>
    );
};

export default Statistics;