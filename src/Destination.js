import React from 'react';
import './App.css';
import Cards from './Cards';
import Footer from './Footer';
import Order from './Order';
import Testimonial from './Testimonial';
import Servicess from './Servicess';
import Hotels from './Hotels';
import Restaurant from './Restaurant';
import Sweetshop from './Sweetshop';
import Place from './Place';



export default function Destination() {
  return(
  <div>
  
  <Cards/>
  
  <Servicess/>
  <Order/>
  <Hotels/>
  <Restaurant/>
  <Sweetshop/>
  <Place/>
  
  
  
  <Testimonial/>
  <Footer/> ;
 

  

  

 
 
  </div>
  )
}