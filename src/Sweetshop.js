import React from "react";
import f1 from './assets/sweetshop1.jpg';
import f2 from './assets/sweetshop3.jpg';
 import f3 from './assets/sweetshop4.jpg';
 import f4 from './assets/sweetshop5.jpg';
 


const Sweetshop = ()=>{
    
    return(
        <div className="container mt-4 text-center">
            <h1 className="border-bottom bg-dark text-light p-3"> Now Taste Bengal's Famous Sweets </h1>
            <section class="product"/>
  <div class="container py-5">
    <div class="row py-5">
      <div class="col-lg-5 m-auto text-center">
        <h1> Explore These SweetShops Linked With Us </h1>
        <h6>No Need To Go & Buy Sweets Offline,Taste The Bengal Sweets From Our Website!!!!</h6>
      
    </div>
    
  </div>
  <div class="row">
    <div class="col-lg-3 text-center">
      <div class="card border-0 bg-light mb-2">
        <div class="card-body">
          <img src={f1} class="img-fluid" height="400px" width="350px"/>

        
      </div>
    </div>
    <h6> Ganguram </h6>
   
    
    <p>4.2 ****</p>
  </div>


    <div class="col-lg-3 text-center">
      <div class="card border-0 bg-light mb-2">
        <div class="card-body">
          <img src={f2} class="img-fluid" height="400px" width="350px"/>

        
      </div>
    </div>
    <h6> Putiram</h6>
    
    
    <p>4.3 ****</p>

  </div>
  <div class="col-lg-3 text-center">
      <div class="card border-0 bg-light mb-2">
        <div class="card-body">
          <img src={f3} class="img-fluid" height="400px" width="350px"/>

        
      </div>
    </div>
    <h6> K C Das </h6>
    
    
    <p>4.4 ****</p>

  </div>
  <div class="col-lg-3 text-center">
      <div class="card border-0 bg-light mb-2">
        <div class="card-body">
          <img src={f4} class="img-fluid"height="400px" width="350px"/>

        
      </div>
    </div>
    <h6> Nabin Chandra Das </h6>
    
    
    <p>5.0 *****</p>
    
    </div>
  <div class="col-lg-5 m-auto text-center">
        <button class="btn1"> Buy Now </button>

        
      </div>
    

    </div>
  

          
    
    </div>
    </div>
    )
}
export default Sweetshop;
  