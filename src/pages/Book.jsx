import React from 'react'
import VehicleTypeSelection from '../components/VehicleTypeSelection'
import ButtonPrimary from '../components/ButtonPrimary'
import DropdownInfo from '../components/DropdownInfo'

const Book = () => {
  return (
    <main>
      <div className='container px-4'>
        <VehicleTypeSelection/>
        <ButtonPrimary>Book Now</ButtonPrimary>
        <DropdownInfo title='Why do I need a ceramic coating?' description='some sample text'/>
      </div>
    </main>
  )
}

export default Book