import React from 'react'
import VehicleTypeSelection from '../components/VehicleTypeSelection';
import sedan1 from '../assets/sedan1.jpg';

const VehicleTypeSection = () => {
  return (
    <section className='py-6'>
        <h1 className='font-bold text-4xl'>Book a Ceramic Coating</h1>
        <h3 className='font-bold text-lg mt-12 mb-4 text-center'>Size. <span className='text-gray-500'>How Big is Your Car?</span></h3>
        <div className='bg-gray-200 mb-4 h-40'>
          <img src={sedan1} alt='Sedan 1' className='w-full h-full object-cover'/>
        </div>
        <VehicleTypeSelection/>
    </section>
  )
}

export default VehicleTypeSection