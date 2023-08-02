import React from "react";


const Contact = () => {
    
    return(
        <div className="container mt-4 text-center">
            {/* <h1 className="border-bottom bg-info text-light p-3"> ContactUs Components </h1> */}
            <section class="contact py-5">

  <div class="container py-5">
    <div class="row">
      <div class="col-lg-5 m-auto text-center">
        <h1> Contact Us </h1>
        <h6>Always Be In touch With US </h6>

      </div>

      

    </div>
    <div class="row py-5">
      <div class="col-lg-9 m-auto">

        <div class="row">
          <div class="col-lg-4">
            <h6> Location</h6>
            <p> Sodepur Kolkata-700110</p>
            
          
            <h6> Phone</h6>
            <p> 7980386146</p>
            
          
            <h6> Email</h6>
            <p> majumdershubhanghi@gmail.com</p>
            
          </div>
          <div class="col-lg-7">
            <div class="row">
              <div class="col-lg-6">
                <input type="text" class="form-control bg-light" placeholder="First Name"/>
                
              </div>
              <div class="col-lg-6">
                <input type="text" class="form-control bg-light" placeholder="Last Name"/>
                
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12 py-3">
                <textarea name="" class="form-control bg-light"placeholder="Enter Your Message" rows="5" cols="10"></textarea>
                
              </div>
             
        <button class="btn1"> Submit </button>

        
     
            </div>
            
          </div>
        </div>
      </div>

    </div>
    
  </div>
  </section>
            </div>
    )
}
export default Contact;