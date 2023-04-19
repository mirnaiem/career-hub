import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';

const JobCategory = () => {
 const[jobs,setJobs]=useState([]);
 useEffect(()=>{
 fetch('category.json')
 .then(res=>res.json())
 .then(data=>setJobs(data))
 },[])
 return (
  <div className='my-32'>
   <h1 className='text-center text-4xl font-bold mb-2'>Job Category List</h1>
  <p className='text-center text-gray-500 mb-8'>Explore thousands of job opportunities with all the information you need. Its your future</p>
  <div className='w-80 mx-auto grid grid-cols-2 md:grid-cols-4 md:gap-10 gap-6 '>
   {
    jobs.map(job=><Job key={job.category_name} job={job}></Job>)
   }
  </div></div>
 );
};

export default JobCategory;