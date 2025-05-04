import React from 'react'
import VehicleTypeSelection from '../components/VehicleTypeSelection'
import ButtonPrimary from '../components/ButtonPrimary'

const Book = () => {
  return (
    <main>
      <div className='container px-4'>
        <VehicleTypeSelection/>
        <ButtonPrimary>Book Now</ButtonPrimary>
      </div>
    </main>
  )
}

export default Book