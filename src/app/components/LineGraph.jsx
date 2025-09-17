// src/components/LineGraph.jsx

"use client"; // This directive is necessary for client-side components in Next.js

import React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', uv: 1200 },
  { name: 'Feb', uv: 2400 },
  { name: 'Mar', uv: 2000 },
  { name: 'Apr', uv: 2780 },
  { name: 'May', uv: 1890 },
  { name: 'Jun', uv: 2390 },
  { name: 'Jul', uv: 3490 },
  { name: 'Aug', uv: 2100 },
  { name: 'Sep', uv: 4500 },
  { name: 'Oct', uv: 3200 },
  { name: 'Nov', uv: 4200 },
  { name: 'Dec', uv: 5900 },
];

const LineGraph = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <XAxis dataKey="name" stroke="#ccc" />
        <YAxis stroke="#ccc" />
        <Line 
          type="monotone" 
          dataKey="uv" 
          stroke="#8884d8" 
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineGraph;