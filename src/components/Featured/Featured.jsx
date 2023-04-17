import React, { useEffect, useState } from 'react';
import FeaturedJob from '../FeaturedJob/FeaturedJob';
import JobDetails from '../JobDetails/JobDetails';

const Featured = () => {
 const [jobs,setJobs]=useState([]);
 useEffect(()=>{
  fetch('featured.json')
  .then(res=>res.json())
  .then(data=> setJobs(data))
 })
 const [jobDetails,setJobDetails]=useState([])
 const handleViewDetails=(id)=>{
  const newJob=[...jobDetails,id];
  setJobDetails(newJob)
 }
 return (
  <div className='w-80 mx-auto mb-10 '>
   <h1 className='text-4xl font-semibold text-center'>Featured Jobs</h1>
   <p className='text-gray-500 text-center mt-2 mb-8'>Explore thousands of job opportunities with all the information you need. Its your future</p>
   <div className='grid grid-cols-2 gap-6'>
    {
    jobs.map(job=><FeaturedJob key={job.id} job={job} handleViewDetails={handleViewDetails}></FeaturedJob>)
   }
   {
    jobDetails.map(detail=><JobDetails key={detail.id} detail={detail}></JobDetails>)
   }
   </div>
   
  </div>
 );
};

export default Featured;