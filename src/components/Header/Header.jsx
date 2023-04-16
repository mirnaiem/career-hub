import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
 return (
 <div className='bg-slate-50 pt-7'>
  <div className='w-80 mx-auto '>
   <nav className='flex  justify-between items-center'>
   <h2 className='font-bold text-3xl'>Mr. AllRounder</h2>
   <div className='flex gap-8 text-xl font-semibold'>
    <Link to="/">Home</Link>
    <Link to="/statistic">Statistic</Link>
    <Link to="/jobs">Applied Jobs</Link>
    <Link to="/blog">BLog</Link>
    <Link to="/about">About</Link>
   </div>
   <button className='bg-indigo-400 p-4 rounded-lg text-white font-semibold'>Start Applying</button>
  </nav>
 </div>
 </div>
 );
};

export default Header;