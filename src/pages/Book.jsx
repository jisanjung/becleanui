import React from 'react'
import VehicleTypeSection from '../sections/VehicleTypeSection'
import GlassCoatingSection from '../sections/GlassCoatingSection'
import DropOffSection from '../sections/DropOffSection'
import TotalSection from '../sections/TotalSection'
import InfoSection from '../sections/InfoSection'
import FaqSection from '../sections/FaqSection'
import '../custom.css';
import StickyVehicleType from '../components/StickyVehicleType'

const Book = () => {
  return (
    <main>
      <div>
        <div className='wrapper lg:flex'>
          <div className='px-4 md:px-10 lg:pr-0 p-4 md:pt-8 lg:w-3/5'>
            <h1 className='font-bold text-4xl'>Book a Ceramic Coating</h1>
            <StickyVehicleType/>
          </div>
          <div className='lg:w-2/5 lg:mt-16'>
            <VehicleTypeSection className='px-4 md:px-10'/>
            <GlassCoatingSection className='px-4 md:px-10'/>
            <DropOffSection className='px-4 md:px-10'/>
          </div>
        </div>
        <TotalSection className='px-4 md:px-10'/>
        <InfoSection className='px-4 md:px-10 wrapper'/>
        <FaqSection className='px-4 md:px-10 wrapper'/>
      </div>
    </main>
  )
}

export default Book