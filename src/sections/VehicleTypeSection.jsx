import React from 'react'
import VehicleTypeRadio from '../components/VehicleTypeRadio';

const VehicleTypeSection = ({ className }) => {
  return (
    <section className={`py-4 ${className}`}>
        <h3 className='hidden lg:block font-bold text-lg mt-12 mb-4 text-center lg:text-left'>Size. <span className='text-gray-500'>How Big is Your Car?</span></h3>
        <VehicleTypeRadio/>
    </section>
  )
}

export default VehicleTypeSection