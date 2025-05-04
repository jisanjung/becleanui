import React from 'react'

const MobileNav = ({ menuToggled }) => {
  return (
    <nav className={`transition-all ${menuToggled ? 'py-4 h-auto' : 'h-0 p-0' }`}>
        <ul className={`${menuToggled ? 'block' : 'hidden'}`}>
            <li className='pb-4'><a href="#homeSection">Home</a></li>
            <li className='pb-4'><a href="#servicesSection">Services</a></li>
            <li className='pb-4'><a href="#pricingSection">Pricing</a></li>
            <li className='pb-4'><a href="#contactSection">Contact</a></li>
            <li><a href="#ourStorySection">Our Story</a></li>
        </ul>
    </nav>
  )
}

export default MobileNav