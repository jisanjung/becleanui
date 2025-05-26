import React, { useEffect } from 'react'
import Hero from '../landing/Hero'
import Services from '../landing/Services'
import { useLocation } from 'react-router-dom'
import Contact from '../landing/Contact'
import OurStory from '../landing/OurStory'

const Home = () => {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        // Optional: smooth scroll
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <main>
        <Hero className='landing'/>
        <Services className='landing'/>
        <Contact className='landing'/>
        <OurStory className='landing'/>
    </main>
  )
}

export default Home