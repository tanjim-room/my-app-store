import React from 'react';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const ReviewChart = ({ app }) => {
    const data = app.ratings;
    return (
        <div>
            <div>
                <h2 className='font-semibold text-2xl py-6'>Ratings</h2>
            </div>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data} layout="vertical">
                    <XAxis type="number" />
                    <YAxis type="category" dataKey="name" />
                    <Tooltip />

                    <Bar dataKey="count" fill="#f97316" radius={[5, 5, 5, 5]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ReviewChart;