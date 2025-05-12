import React from 'react'
import ButtonPrimary from '../components/ButtonPrimary'
import DropdownInfo from '../components/DropdownInfo'
import VehicleTypeSection from '../sections/VehicleTypeSection'
import GlassCoatingSection from '../sections/GlassCoatingSection'
import DropOffSection from '../sections/DropOffSection'

const Book = () => {
  return (
    <main>
      <div className='container px-4'>
        <VehicleTypeSection/>
        <GlassCoatingSection/>
        <DropOffSection/>
        <ButtonPrimary>Book Now</ButtonPrimary>
        <DropdownInfo title='Why do I need a ceramic coating?' description='some sample text'/>
      </div>
    </main>
  )
}

export default Book