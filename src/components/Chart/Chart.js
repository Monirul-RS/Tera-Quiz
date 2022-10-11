import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = ({ chart }) => {
    console.log(chart);
    const { name, total } = chart;
    return (
        <div>
            <ResponsiveContainer>
                <LineChart width={500} height={400} data={chart.data}>
                    <Line type="monotone" dataKey="total"stroke="#82ca9d" />
                    <XAxis dataKey="name" />
                    <YAxis />

                </LineChart>

            </ResponsiveContainer>

        </div>
    );
};

export default Chart;