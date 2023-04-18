import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faLocationDot,faDollar } from '@fortawesome/free-solid-svg-icons'

const AppliedJob = ({job}) => {
 const {id,company_logo,job_title,company_name,remote_or_onsite,fulltime_or_parttime,location,salary}=job;
 return (
  <div className='border-2 border-indigo-200 mb-5 rounded-lg p-4 flex items-center justify-between'>
   <section className='flex gap-2 items-center'>
    <div className='bg-slate-200 py-16 px-10 text-center rounded-lg'>
     <img className='w-40  rounded-lg  ' src={company_logo} alt="" /></div>
    <div>
    <h2 className='text-2xl font-semibold'>{job_title}</h2>
   <h3 className='text-xl font-medium text-gray-500 my-4'>{company_name}</h3>
   <p className='my-4'> <span className='border-2 border-indigo-500 py-2 px-5 text-indigo-600 font-bold rounded-lg'>{remote_or_onsite}</span> <span className='ms-4 border-2 border-indigo-500 py-2 px-5 text-indigo-600 font-bold rounded-lg'>{fulltime_or_parttime}</span> </p>
   <p className='flex gap-6'> <span className='text-xl text-gray-500 font-medium'>  <FontAwesomeIcon className='me-1' icon={faLocationDot} />
 {location}</span> <span className='text-xl text-gray-500 font-medium'>Salary: <FontAwesomeIcon className='me-1' icon={faDollar} />{salary}</span></p>
    </div>
   </section>
   <button className='bg-indigo-700 mt-2 px-3 py-2 text-white font-semibold rounded-lg'>View Details</button>
  </div>
 );
};

export default AppliedJob;