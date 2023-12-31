import React from 'react';

const Job = ({job}) => {
 const{category_name,category_logo,jobs_available}=job;
 return (
 
  
   <div className='bg-slate-50 md:pe-28 py-10 ps-5 md:ps-10 rounded-lg '>
   <img className='w-20 h-20 rounded-lg md:mb-8 md:bg-slate-200 md:p-4' src={category_logo} alt="" />
   <h2 className='md:text-2xl text-gray-900 font-semibold mb-2'>{category_name}</h2>
   <p>{jobs_available} Jobs Available</p>
  </div>
 
 );
};

export default Job;