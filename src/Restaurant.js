import React from "react";
import f1 from './assets/6ballygaungeplace.jpg';
import f2 from './assets/biriyani1.jpg';
 import f3 from './assets/biriyani2.jpg';
 import f4 from './assets/biriyani3.jpg';
 


const Restaurant = ()=>{
    
    return(
        <div className="container mt-4 text-center">
            <h1 className="border-bottom bg-dark text-light p-3">Explore These Restaurants For A Yummy Meal </h1>
            <section class="product"/>
  <div class="container py-5">
    <div class="row py-5">
      <div class="col-lg-5 m-auto text-center">
        <h1> Explore These Restaurants Linked With Us </h1>
        <h6>No Need To Wait In A Line,Just Book This Restaurants From Our Page In Advance!!! </h6>
      
    </div>
    
  </div>
  <div class="row">
    <div class="col-lg-3 text-center">
      <div class="card border-0 bg-light mb-2">
        <div class="card-body">
          <img src={f1} class="img-fluid" height="400px" width="350px"/>

        
      </div>
    </div>
    <h6> 6 Ballygaungeplace </h6>
   
    <p> Rs.1000 for one </p>
    <p>4.2 ****</p>
  </div>


    <div class="col-lg-3 text-center">
      <div class="card border-0 bg-light mb-2">
        <div class="card-body">
          <img src={f2} class="img-fluid" height="400px" width="350px"/>

        
      </div>
    </div>
    <h6> Aminia </h6>
    
    <p> Rs.500 for one </p>
    <p>4.3 ****</p>

  </div>
  <div class="col-lg-3 text-center">
      <div class="card border-0 bg-light mb-2">
        <div class="card-body">
          <img src={f3} class="img-fluid" height="400px" width="350px"/>

        
      </div>
    </div>
    <h6> Arsenal </h6>
    
    <p> Rs.800 per one </p>
    <p>4.4 ****</p>

  </div>
  <div class="col-lg-3 text-center">
      <div class="card border-0 bg-light mb-2">
        <div class="card-body">
          <img src={f4} class="img-fluid"height="400px" width="350px"/>

        
      </div>
    </div>
    <h6> Dada-Boudi </h6>
    
    <p> Rs.1200 per one </p>
    <p>5.0 *****</p>
    
    </div>
  <div class="col-lg-5 m-auto text-center">
        <button class="btn1"> Book Now </button>

        
      </div>
    

    </div>
  

          
    
    </div>
    </div>
    )
}
export default Restaurant;
  