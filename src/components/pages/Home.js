import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Card from "../Card";
import Courses from "../Courses";
import faker from 'faker';


const Home =() =>{
  return (
    <div style={{
      background: /*linear-gradient(to left, #ff99cc 0%, #66ffff 105%)*/' #87bdd8'}}>
      <HeroSection/>
      <h1 style={{marginLeft:'40%'}} className="ui huge header">Course we Offer</h1><br/><p style={{marginLeft:'25%'}}>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
      <Courses/>
      <div className="ui divider"></div>
      <h1 style={{marginLeft:'40%'}} className="ui huge header">Alumni</h1>
      <Card/>
      <div className="ui segment" style={{backgroundColor:'#CDC8B1',textAlign:'center',color:'#fff',opacity:'.8'}}>
        <div className="card">
        <h1>Testimonials</h1>
        <img src={faker.image.image()} style={{borderRadius:'50%',height:'150px',width:"150px"}}/>
        <h3>Mike Smith</h3>
        <h5 style={{color:'black'}}>“I just wanted to share a quick note and let you know that you guys do a really good job.<br/> I'm glad I decided to work with you. It's really great how easy your websites are to update and manage.<br/> I never have any problem at all.</h5>
        </div>
      </div>
    </div>
  );
}

export default Home;
