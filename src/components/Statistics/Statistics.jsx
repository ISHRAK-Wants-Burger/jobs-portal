import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const data = [
        {
            id: '1',
            assignment: 'Assignment 1',
            marks: '48'
        },
        {
            id: '2',
            assignment: 'Assignment 2',
            marks: '59'
        },
        {
            id: '3',
            assignment: 'Assignment 3',
            marks: '57'
        },
        {
            id: '4',
            assignment: 'Assignment 4',
            marks: '59'
        },
        {
            id: '5',
            assignment: 'Assignment 5',
            marks: '35'
        },
        {
            id: '6',
            assignment: 'Assignment 6',
            marks: '55'
        },
        {
            id: '7',
            assignment: 'Assignment 7',
            marks: '60'
        }
    ];

    return (
        <div>
            <h1 className='text-center text-bold text-4xl pt-6 pb-16 mb-16 bg-gradient-to-r from-indigo-100'>Statistics</h1>
            <div className='m-16'>
                <AreaChart
                    width={1400}
                    height={600}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <XAxis dataKey="assignment" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="marks" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </div>
        </div>
    );
};

export default Statistics;