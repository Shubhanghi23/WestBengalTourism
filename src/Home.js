import React from 'react';
import './App.css';

import HeroSection from './HeroSection';
import Servicess from './Servicess';
import Heroo from './Heroo';
import Cards from './Cards';

import Testimonial from './Testimonial';

import Footer from './Footer';


function Home() {
  return (
    <>
      <HeroSection />
         

         <Servicess/>

      <Heroo/>
      <Cards />

      <Testimonial/>
      
     
      <Footer />
    </>
  );
}

export default Home;