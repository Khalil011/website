import React from 'react';
import '../App.css';
import Button  from './Button';
import './HeroSection.css';


function HeroSection() {
  return (
    <div className='container'>
      <h1>A PATH TO SmartEDU</h1>
      <p>What are you waiting for?</p>
      <div>
        <Button/>
      </div>
    </div>
  );
}
export default HeroSection;
