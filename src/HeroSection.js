import React from 'react';
import './App.css';
import { Button } from './Button';
import './HeroSection.css';
import f1 from './assets/Darjeeling.MP4'

function HeroSection() {
  return (
    <div className='hero-container'>
      
      <video src={f1} autoPlay loop muted />
       <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p> 
       <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRULIFE VLOGS <i className='far fa-play-circle' />
        </Button> 
      </div> 
    </div>
  );
}

export default HeroSection;