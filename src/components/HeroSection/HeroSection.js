import React from 'react';
import './HeroSection.css';
import '../../App.css';
import { Button } from '../Button/Button.js';

export default function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted></video>
      <h1>Adventure Awaits</h1>
      <p>What are you waiting for</p>
      <div className="hero-btns">
        <Button clasname="btns" buttonStyle="btn--outline" buttonSize="btn--large">
          GET STARTED
        </Button>
        <Button clasname="btns" buttonStyle="btn--primary" buttonSize="btn--large">
          WATCH TRAILER <i className="far fa-play-circle" /> 
        </Button>
      </div>
    </div>
  )
}
