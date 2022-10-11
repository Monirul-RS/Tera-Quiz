import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chart from '../Chart/Chart';



const Statistics = () => {
    const charts = useLoaderData().data;
    console.log(charts);
    
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-2 p-9'>
        {
            charts.map(chart => <Chart
                key={chart.id}
                chart={chart}
            ></Chart>)
        }
    </div>
        
    );
};

export default Statistics;