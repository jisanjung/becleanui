import React from 'react'

const DesktopNav = ({ className }) => {
  return (
    <nav className={`${className}`}>
        <ul className='flex pt-2'>
            <li className='pr-4 hover:font-bold'><a href="/#homeSection">Home</a></li>
            <li className='pr-4 hover:font-bold'><a href="/#servicesSection">Services</a></li>
            <li className='pr-4 hover:font-bold'><a href="/#pricingSection">Pricing</a></li>
            <li className='pr-4 hover:font-bold'><a href="/#contactSection">Contact</a></li>
            <li className='hover:font-bold'><a href="/#ourStorySection">Our Story</a></li>
        </ul>
    </nav>
  )
}

export default DesktopNav