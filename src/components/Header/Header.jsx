import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import {faBars,faXmark} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
 const [open,setOpen]=useState(false)
 return (
 <div className='bg-slate-50 py-7 sticky top-0'>
  <div className='w-80 mx-auto '>
   <nav className='flex  justify-between items-center'>
   <h2 className='font-bold text-2xl md:text-3xl'>Mr. AllRounder</h2>
   <div className='md:hidden' onClick={()=>setOpen(!open)}>
    <span>{!open?<FontAwesomeIcon icon={faBars} />:<FontAwesomeIcon icon={faXmark} />}</span>
   </div>
   <div className={`flex flex-col md:flex-row  p-1 rounded-lg text-white md:text-black m:p-0 mt-3 m:mt-0 bg-indigo-500 md:bg-gray-50 gap-2 md:gap-8 text-xl absolute md:static font-semibold duration-1000 ${open? 'top-20 right-2':'-top-48  right-2'}`}>
    <Link to="/">Home</Link>
    <Link to="/statistic">Statistic</Link>
    <Link to="/jobs">Applied Jobs</Link>
    <Link to="/blog">BLog</Link>
    <Link to="/about">About</Link>
   </div>
   
   
   
   <button className={`bg-indigo-700 md:text-lg text-sm p-2 md:p-4 rounded-lg text-white font-semibold absolute md:static duration-1000  ${open? 'top-20':'-top-36 '}`}>Start Applying</button>
  </nav>
 </div>
 </div>
 );
};

export default Header;