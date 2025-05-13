import React from 'react'
import VehicleTypeSection from '../sections/VehicleTypeSection'
import GlassCoatingSection from '../sections/GlassCoatingSection'
import DropOffSection from '../sections/DropOffSection'
import TotalSection from '../sections/TotalSection'
import InfoSection from '../sections/InfoSection'
import FaqSection from '../sections/FaqSection'

const Book = () => {
  return (
    <main>
      <div className='container'>
        <VehicleTypeSection className='px-4'/>
        <GlassCoatingSection className='px-4'/>
        <DropOffSection className='px-4'/>
        <TotalSection className='px-4'/>
        <InfoSection className='px-4'/>
        <FaqSection className='px-4'/>
      </div>
    </main>
  )
}

export default Book