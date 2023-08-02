import React from 'react';
import './App.css';
import Footer from './Footer';
import Contact from './Contact';
import About from './About';
import Src from './Src'


import f4 from './assets/services.jpg';


export default function Services() {
  return (
    <div>
   {/* <h1 className='services'>SERVICES</h1>; */}
   <div className="container mt-4 text-center">
            <img src={f4}/>
            <Src/>
            <About/>

            <Contact/>
   
   </div>
   <Footer/> ;
   </div>

  )
}