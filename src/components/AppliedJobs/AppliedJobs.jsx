import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { getShoppingCart } from '../../utilities/fakedb';
import AppliedJob from '../AppliedJob/AppliedJob';

const AppliedJobs = () => {
 const loadedJobs=useLoaderData();
 const getJobsData=getShoppingCart();
 const savedJobs=[]
 for(const id in getJobsData){
  const findData=loadedJobs.find(data=>parseInt(data.id)===parseInt(id))
  if(findData){
   savedJobs.push(findData)
  }
 }
 console.log(savedJobs)
 return (
  <div>
   <h1 className='bg-slate-50 text-center text-2xl font-bold py-28'>Applied Jobs</h1>
  
   <div className='w-80 mx-auto my-20'>
    {savedJobs?savedJobs.map(job=><AppliedJob key={job.id} job={job}></AppliedJob>):<h1 className='text-center text-5xl text-green-600'>No Applied Job Available!!!</h1>
    
   }
   
   </div>
  </div>
 );
};

export default AppliedJobs;