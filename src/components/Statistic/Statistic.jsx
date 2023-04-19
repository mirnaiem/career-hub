import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
const Statistic = () => {
 


const data = [
  {
    name: "Assignment-1",
    mark: 60,
  
  },
  {
    name: "Assignment-2",
    mark: 29,
  },
  {
    name: "Assignment-3",
    mark: 60,
  },
  {
    name: "Assignment-4",
    mark: 57,
  },
  {
    name: "Assignment-5",
    mark: 60,
  },
  {
    name: "Assignment-6",
    mark: 60,
  },
  {
    name: "Assignment-7",
    mark: 60,
  },
  {
    name: "Assignment-8",
    mark: 60,
  }
];
 return (
  <div className='w-80 mx-auto mt-40'>
   <h2 className='text-4xl text-center mb-10'>Assignment Marks</h2>
   
   <AreaChart
    
    width={1000}
    height={400}
    data={data}
    margin={{
      top: 10,
      right: 30,
      left: 0,
      bottom: 0
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Area type="monotone" dataKey="mark" stroke="#8884d8" fill="#8884d8" />
  </AreaChart>
   
  </div>
 );
};

export default Statistic;