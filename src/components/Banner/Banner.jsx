import React from 'react';

const Banner = () => {
 return (
  <div className='bg-slate-50'>
   <section className='flex justify-between w-80 mx-auto items-center pt-10'>
    <div>
     <h1 className='text-5xl font-semibold mb-6'>Hard Work <br /> Makes Dreams <br /> <span className='text-cyan-400'>Come True</span></h1>
     <p className='text-gray-400'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
     <button className='mt-6 bg-indigo-700 p-4 rounded-lg text-white font-semibold'>Get Started</button>
    </div>
    <div>
     <img className='bg-slate-50' src="https://img.freepik.com/free-photo/handsome-man-with-his-arms-crossed-white-background_1368-4287.jpg?size=626&ext=jpg&ga=GA1.1.1419972379.1680192737&semt=ais" alt="" />
    </div>
   </section>
  </div>
 );
};

export default Banner;