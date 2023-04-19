import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getShoppingCart } from '../../utilities/fakedb';
import AppliedJob from '../AppliedJob/AppliedJob';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faArrowDown} from '@fortawesome/free-solid-svg-icons'

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
  const [showDropdown, setShowDropdown] = useState(false);
  
  const handleRemoteOrOnsiteJob = jobType => {
    const filteredJobs = savedJobs.filter(
      job => job.remote_or_onsite === jobType
    );
    setRemoteJobs(filteredJobs);
    setShowDropdown(false);
  };

  return (
    <div>
      <h1 className="bg-slate-50 text-center text-2xl font-bold py-28">
        Applied Jobs
      </h1>

      <div className="w-80 mx-auto my-20">
        <div className="flex justify-between">
          <div></div>
          <div className="mb-3 relative">
            <button className="border px-3 py-2 rounded-lg mr-2" onClick={() => setShowDropdown(!showDropdown)}>Filter by <FontAwesomeIcon className='me-1 text-gray-500' icon={faArrowDown} /></button>
           
            {showDropdown && (
              <div className="absolute right-0 top-8 bg-white rounded-lg shadow-lg py-2">
                <button
                  onClick={() => handleRemoteOrOnsiteJob("Remote")}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Remote
                </button>
                <button
                  onClick={() => handleRemoteOrOnsiteJob("Onsite")}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Onsite
                </button>
              </div>
            )}
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
