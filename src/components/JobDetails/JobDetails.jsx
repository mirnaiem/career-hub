import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faLocationDot,faDollar,faCalendar,faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons'

const JobDetails = () => {
 const jobData=useLoaderData();
 // console.log(jobData)
 const {jobId}=useParams();


 const findData=jobData.find(data=>parseInt(data.id)===parseInt(jobId));
 console.log(findData)
const {job_description,job_responsibility,educational_requirements,experiences,salary,job_title,contact_information,location}=findData
 return (
  <div>
   <h1 className='bg-slate-50 text-center text-2xl font-bold py-28'>Job Details</h1>
   <div className='flex justify-between w-80 mx-auto my-20'>
    <div className='flex flex-col gap-5'>
     <p><span className='font-bold'>Job Description:</span> {job_description}</p>
     <p><span className='font-bold'>Job Responsibility:</span> {job_responsibility}</p>
     <p><span className='font-bold'>Educational Requirements:</span> {educational_requirements}</p>
     <p><span className='font-bold'>Experiences:</span> {experiences}</p>
    </div>
    <div>
     <div className='bg-slate-200 p-8 rounded-lg'>
      <h1 className='text-xl font-bold'>Job Details</h1>
      <hr className='border my-2 border-gray-300' />
      <p className='my-2'><FontAwesomeIcon className='me-1 text-gray-500' icon={faDollar} /><span className='font-semibold'>Salary:</span> {salary}</p>
      <p className='my-2'><FontAwesomeIcon className='me-1 text-gray-500' icon={faCalendar} /><span className='font-semibold'>Job Title:</span> {job_title}</p>
      <h2 className='text-xl font-bold my-4'>Contact Information</h2>
      <hr className='border my-2 border-gray-300' />
      <p className='my-2'><FontAwesomeIcon className='me-1 text-gray-500' icon={faPhone} /><span className='font-semibold'>Phone:</span> {contact_information.phone}</p>
      <p className='my-2'><FontAwesomeIcon className='me-1 text-gray-500' icon={faEnvelope} /><span className='font-semibold'>Email:</span> {contact_information.email}</p>
      <p className='my-2'><FontAwesomeIcon className='me-1 text-gray-500' icon={faLocationDot} /><span className='font-semibold'>Address:</span> {location}</p>

     </div>
     <button className='my-4 bg-indigo-700 py-5 px-40 text-white font-medium text-xl rounded-lg'>Apply Now</button>
    </div>
   </div>
  </div>
 );
};

export default JobDetails;