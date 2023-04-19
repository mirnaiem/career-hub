import React, { useEffect, useState } from 'react';
import FeaturedJob from '../FeaturedJob/FeaturedJob';
import JobDetails from '../JobDetails/JobDetails';
import { Link } from 'react-router-dom';

const Featured = () => {
  const [jobs, setJobs] = useState([]);
  const [numToShow, setNumToShow] = useState(4); 

  useEffect(() => {
    fetch('featured.json')
      .then(res => res.json())
      .then(data => setJobs(data))
  }, []);

  const handleShowAll = () => {
    setNumToShow(jobs.length);
  }

  return (
    <div className='w-80 mx-auto mb-10 '>
      <h1 className='text-4xl font-semibold text-center'>Featured Jobs</h1>
      <p className='text-gray-500 text-center mt-2 mb-8'>Explore thousands of job opportunities with all the information you need. Its your future</p>
      <div className='grid md:grid-cols-2 gap-6'>
        {
          jobs.slice(0, numToShow).map(job => <FeaturedJob key={job.id} job={job} />)
        }
      </div>
      {numToShow < jobs.length && (
        <div className='text-center'>
          <button className='my-4  bg-indigo-700 py-5 px-10 text-white font-medium text-xl rounded-lg' onClick={handleShowAll}>Show All Jobs</button>
        </div>
      )}
    </div>
  );
};

export default Featured;
