import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = () => {
    const data = [
        {
            name: 'React',
            quiz: 8,
        },
        {
            name: 'JavaScript',
            quiz: 9,
        },
        {
            name: 'CSS',
            quiz: 8,
        },
        {
            name: 'Git',
            quiz: 11,
        },

    ];
    return (
        <div>
            <ResponsiveContainer>
            <LineChart width={500} height={400} data={data}>
                <Line type="monotone" dataKey="quiz" stroke="#82ca9d" />
                <XAxis dataKey="name" />
                <YAxis />

            </LineChart>

        </ResponsiveContainer>
            
        </div>
    );
};

export default Chart;