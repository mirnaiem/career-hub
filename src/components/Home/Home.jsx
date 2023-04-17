import React from 'react';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import JobCategory from '../JobCategory/JobCategory';
import Featured from '../Featured/Featured';


const Home = () => {
 return (
  <div>
   <Banner></Banner>
   <JobCategory></JobCategory>
   <Featured></Featured>
  </div>
 );
};

export default Home;