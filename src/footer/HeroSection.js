import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>STOCK INSURANCE</h1>
    
      <p>It provides financial protection against losses or damages to inventory or stock, ensures business continuity, and mitigates risks.
         Stock insurance is an important investment for small businesses to safeguard their assets and maintain stability.</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          STOCKS
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Know More About Stocks <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;