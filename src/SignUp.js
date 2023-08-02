import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";
import f2 from './assets/sign.jpg';
import Footer from "./Footer";
import './Sign.css';



import './App.css';





 
      const SignUp = ()=>{
     const nav = useNavigate();
   const handleLogin = ()=>{
        localStorage.setItem('signup','Token')
         nav('/signup')
    }
     useEffect(()=>{
         const SignUpID = localStorage.getItem('signup')
         if(SignUpID){
            nav('/signup')
         }
     },[])
     return(
       
           
        
          <div>
            

        <div className="container text-center mt-5">
            <h1>SignUp Now</h1>
        
            <input className="m-1 bg-dark text-light"  type="text" placeholder="Enter Username"/><br/>
           <input className="m-1 bg-dark text-light" type="text" placeholder="Enter Email"/><br/>
          
            
                <button class='btn1' onClick={handleLogin}>SignUp</button> 
                

                
                
         </div>
         <img src={f2} width="100%"/>
         <Footer/>
         </div>
        
         
        
   

  
 
  )
 }
 export default SignUp;
 

