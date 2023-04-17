import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const AppliedJobs = () => {
 const loadedData=useLoaderData();
 const [appliedJobs,setAppliedJobs]=useState([]);
 
 return (
  <div>
   <h1>here will be displayed applied jobs</h1>
  </div>
 );
};

export default AppliedJobs;