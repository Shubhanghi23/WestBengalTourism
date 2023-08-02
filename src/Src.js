import React from "react";
import f1 from './assets/ser1.jpg';
import f2 from './assets/ser2.jpg';
 import f3 from './assets/ser3.jpg';
 import f4 from './assets/ser4.jpg';
 import './Src.css';

const Src = () => {
    
    return(
        <div>
            <div class="service py-5">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-10 col-11 mx-auto">
            <div class="mt-2 mb-5 text-center">
              <h1 class="service_heading">OUR SERVICES</h1>
            </div>
            <div class="row ">
              
              <div class="col-md-6 mt-md-2 m-0">
                <span class="badge-info badge rounded-pill px-3 py-1 my-2 font-weight-light">
                  What We Do
                </span>
                <h4>Awesome with Extra Ordinary Flexibility Features</h4>
                <h6 class="font-weight-light subtitle">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</h6>
                
                <div class="row mt-md-5">
                  <div class="col-md-6 mt-3">
                    <h6 class="font-weight-medium">Quick Services</h6>
                    <p>Our Customer Service Is Very Quick And We Respond In 10 mins After Logged In.</p>
                  </div>
                  <div class="col-md-6 mt-3">
                    <h6 class="font-weight-medium">Easy Booking</h6>
                    <p>No More Complications,Book Easily And Email Us For Assistance.</p>
                  </div>
                  <div class="col-md-6 mt-3">
                    <h6 class="font-weight-medium">Travel Safety</h6>
                    <p>We Will Look After You As We Think Ourself As Our Travel Family.</p>
                  </div>
                  <div class="col-md-6 mt-3">
                    <h6 class="font-weight-medium">Quck Responses</h6>
                    <p>Our Responses Is Quick And Efficient,Check Out Our Reviews For More Information.</p>
                  </div>
                  <div class="col-lg-12 my-4">
                    <a class="btn btn-sm btn-info" href="#"> check More </a>
                  </div>
                </div>
              </div>
              
              <div class="col-md-6 mt-md-5 m-0">
                <div class="row wrap-service">
                  
                  <div class="col-md-6">
                    <div class="row">
                      <div class="col-md-12 img-hover mb-4">
                        <img alt="ux" class="rounded img-shadow img-fluid" src={f1} />
                      </div>
                      <div class="col-md-12 img-hover mb-4">
                        <img alt="ux" class="rounded img-shadow img-fluid" src={f2} />
                      </div>
                    </div>
                  </div>
                  
                  <div class="col-md-6 uneven-box">
                  <div class="row">
                      <div class="col-md-12 img-hover mb-4">
                        <img alt="ux" class="rounded img-shadow img-fluid" src={f3} />
                      </div>
                      <div class="col-md-12 img-hover mb-4">
                        <img alt="ux" class="rounded img-shadow img-fluid" src={f4} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
        </div>


    )
}
export default Src;