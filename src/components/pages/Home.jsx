import React from 'react';
// import Carousel from './Home/Carousel';
import Section1 from './Home/Section1';
import Competitions from './Home/Competitions';
import HURRY from './Home/HURRY';
import CardHomeList from './Home/CardHomeList';
import HomeSection from './Home/HomeSection';


const Home = () => {
  return (
    <>
      {/* <Carousel /> */}
      <HomeSection />
      <CardHomeList />
      <Section1 />
      <Competitions />
      <HURRY />

    </>
  )
}

export default Home;