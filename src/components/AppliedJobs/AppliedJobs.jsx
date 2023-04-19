import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getShoppingCart } from '../../utilities/fakedb';
import AppliedJob from '../AppliedJob/AppliedJob';

const AppliedJobs = () => {
  const loadedJobs = useLoaderData();
  const getJobsData = getShoppingCart();
  const savedJobs = [];
  for (const id in getJobsData) {
    const findData = loadedJobs.find(
      (data) => parseInt(data.id) === parseInt(id)
    );
    if (findData) {
      savedJobs.push(findData);
    }
  }
  const [remoteJobs, setRemoteJobs] = useState([]);
  const [selectedOption, setSelectedOption] = useState("All");

  const handleFilterChange = (event) => {
    setSelectedOption(event.target.value);
    if (event.target.value === "Remote") {
      handleRemoteOrOnsiteJob("Remote");
    } else if (event.target.value === "Onsite") {
      handleRemoteOrOnsiteJob("Onsite");
    } else {
      setRemoteJobs([]);
    }
  };

  const handleRemoteOrOnsiteJob = (jobType) => {
    const filteredJobs = savedJobs.filter(
      (job) => job.remote_or_onsite === jobType
    );
    setRemoteJobs(filteredJobs);
  };

  return (
    <div>
      <h1 className="bg-slate-50 text-center text-2xl font-bold py-28">
        Applied Jobs
      </h1>

      <div className="w-80 mx-auto my-20">
        <div className="flex justify-between">
          <div></div>
          <div className="mb-3">
            
            <select className='py-1 px-4 border-2 border-gray-500' value={selectedOption} onChange={handleFilterChange}>
              <option value="All">All</option>
              <option value="Remote">Remote</option>
              <option value="Onsite">Onsite</option>
            </select>
          </div>
        </div>
        {remoteJobs[0] ? (
          remoteJobs.map((job) => (
            <AppliedJob key={job.id} job={job}></AppliedJob>
          ))
        ) : savedJobs[0] ? (
          savedJobs.map((job) => (
            <AppliedJob
              
              key={job.id}
              job={job}
            ></AppliedJob>
          ))
        ) : (
          <h1 className="text-center text-5xl text-green-600">
            No Applied Job Available!!!
          </h1>
        )}
      </div>
    </div>
  );
};

export default AppliedJobs;
