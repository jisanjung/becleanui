import React from 'react'
import sedan1 from '../assets/sedan1.jpg';

const StickyVehicleType = ({ className }) => {
  return (
    <div className={`lg:sticky lg:top-0 lg:h-96 ${className}`}>
      <h3 className='block lg:hidden font-bold text-lg mt-12 mb-4 text-center lg:text-left'>Size. <span className='text-gray-500'>How Big is Your Car?</span></h3>
      <div className='flex justify-center lg:items-center lg:h-full'>
        <div className='bg-gray-200 mb-4 w-80 sm:w-96 h-40 lg:w-full lg:h-full lg:mt-8'>
          <img src={sedan1} alt='Sedan 1' className='w-full h-full object-cover'/>
        </div>
      </div>
    </div>
  )
}

export default StickyVehicleType