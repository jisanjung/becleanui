import React from 'react'
import VehicleTypeRadio from '../components/VehicleTypeRadio';
import sedan1 from '../assets/sedan1.jpg';

const VehicleTypeSection = () => {
  return (
    <section className='py-4'>
        <h1 className='font-bold text-4xl'>Book a Ceramic Coating</h1>
        <h3 className='font-bold text-lg mt-12 mb-4 text-center'>Size. <span className='text-gray-500'>How Big is Your Car?</span></h3>
        <div className='bg-gray-200 mb-4 h-40'>
          <img src={sedan1} alt='Sedan 1' className='w-full h-full object-cover'/>
        </div>
        <VehicleTypeRadio/>
    </section>
  )
}

export default VehicleTypeSection