import React from 'react';
import { Link } from 'react-router-dom';

const NotFounded = () => {
 return (
  <div className='bg-indigo-300 h-screen my-auto  flex flex-col gap-4 items-center justify-center'>
   <h2 className='text-5xl text-gray-600 text-center '>404 NOT FOUND</h2>
   <p className='text-2xl'>Back to <Link className='text-blue-700' to="/">Home</Link></p>
   
  </div>
 );
};

export default NotFounded;