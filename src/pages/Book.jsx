import React from 'react'
import ButtonPrimary from '../components/ButtonPrimary'
import DropdownInfo from '../components/DropdownInfo'
import VehicleTypeSection from '../sections/VehicleTypeSection'
import GlassCoatingSection from '../sections/GlassCoatingSection'
import DropOffSection from '../sections/DropOffSection'
import TotalSection from '../sections/TotalSection'

const Book = () => {
  return (
    <main>
      <div className='container'>
        <VehicleTypeSection className='px-4'/>
        <GlassCoatingSection className='px-4'/>
        <DropOffSection className='px-4'/>
        <TotalSection className='px-4'/>
        <DropdownInfo title='Why do I need a ceramic coating?' description='some sample text'/>
      </div>
    </main>
  )
}

export default Book