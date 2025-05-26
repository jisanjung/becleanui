import React from 'react'
import './styles/global.css';
import './styles/home.css';
import heroImage from './images/home_section.jpeg';

const Hero = ({ className }) => {
  return (
    <section id="homeSection" className={`${className}`}>
        <img src={heroImage} alt="Guy cleaning car" className="h-100 object-cover"/>
        <div className="tint"></div>
        <div id="homeHero" className="absolute center-y">
          <div className="container">
            <h1 className="title-md">The Finest Detail</h1>
            <p className="text">Unveil the Beauty of Your Vehicle With Our Mobile Detailing Services.</p>
            <div id="heroButtons" className="flex">
              <a href="#servicesSection" className="button">Learn More</a>
              <a href="/book" className="button">Book Now</a>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Hero