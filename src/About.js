import React from "react";
import f1 from './assets/destination.jpg';
import f2 from './assets/signup.jpg';
import f3 from './assets/home.jpg';



const About = ()=>{
    
    return(
        <div className="container mt-4 text-center">
            
            <div class="row">
        <div class="col-lg-4">
          <img src={f1} class="img-fluid mb-3" height="300px" width="350px"/>
          <h5> Book your travel destination without any tension </h5>
          <p>The origin of the word "travel" is most likely lost to history. The term "travel" may originate from the Old French word travail, which means 'work'.[2] According to the Merriam-Webster dictionary, the first known use of the word travel was in the 14th century. It also states that the word comes from Middle English travailen, travelen (which means to torment, labor, strive, journey) and earlier from Old French travailler (which means to work strenuously, toil).

In English, people still occasionally use the words travail, which means struggle. According to Simon Winchester in his book The Best Travelers' Tales (2004), the words travel and travail both share an even more ancient root: a Roman instrument of torture called the tripalium (in Latin it means "three stakes", as in to impale).[citation needed] This link may reflect the extreme difficulty of travel in ancient times. Travel in modern times may or may not be much easier, depending upon the destination. Travel to Mount Everest, the Amazon rainforest, extreme tourism, and adventure travel are more difficult forms of travel. Travel can also be more difficult depending on the method of travel, such as by bus, cruise ship, or even by bullock cart.</p>
          
        </div>
        <div class="col-lg-4">
          <img src={f2} class="img-fluid mb-3" height="300px" width="550px"/>
          <h5> It's easy to book,Let's do travel with TRULIFE </h5>
          <p>Authorities emphasize the importance of taking precautions to ensure travel safety.[16] When traveling abroad, the odds favor a safe and incident-free trip, however, travelers can be subject to difficulties, crime and violence.[17] Some safety considerations include being aware of one's surroundings,[16] avoiding being the target of a crime,[16] leaving copies of one's passport and itinerary information with trusted people,[16] obtaining medical insurance valid in the country being visited[16] and registering with one's national embassy when arriving in a foreign country.[16] Many countries do not recognize drivers' licenses from other countries; however most countries accept international driving permits.[18] Automobile insurance policies issued in one's own country are often invalid in foreign countries.</p>
          
        </div>
        <div class="col-lg-4">
          <img src={f3} class="img-fluid mb-3" height="300px" width="550px"/>
          <h5>Enjoy travel with your family with TRULIFE</h5>
          <p> Travel by water often provided more comfort and speed than land-travel, at least until the advent of a network of railways in the 19th century. Travel for the purpose of tourism is reported to have started around this time when people began to travel for fun as travel was no longer a hard and challenging task. This was capitalized on by people like Thomas Cook selling tourism packages where trains and hotels were booked together.[11] Airships and airplanes took over much of the role of long-distance surface travel in the 20th century, notably after the Second World War where there was a surplus of both aircraft and pilots.[8] Air travel has become so ubiquitous in the 21st century that one woman, Alexis Alford, visited all 196 countries before the age of 21.</p>
          
        </div>
         <div class="col-lg-5 m-auto text-center">
        <button class="btn1">Click to know more </button>

        
      </div>
      
    </div>
    
  </div>
  

            
    )
}
export default About;