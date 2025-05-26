import React from 'react'
import sedan_sideview from '../assets/sedan_sideview.png';
import suv_sideview from '../assets/suv_sideview.png';
import truck_sideview from '../assets/truck_sideview.png';
import { useStoreState } from 'easy-peasy';

const StickyVehicleType = ({ className }) => {

  const vehicleTypeSelected = useStoreState(state => state.vehicleTypeSelected);

  const getVehicleImageBasedOnSelection = () => {
    if (!vehicleTypeSelected || vehicleTypeSelected === 'sedan') {
      return sedan_sideview;
    }
    if (vehicleTypeSelected === 'suv') {
      return suv_sideview;
    }
    if (vehicleTypeSelected === 'truck') {
      return truck_sideview;
    }
  };

  return (
    <div className={`sticky-vehicle lg:sticky lg:top-0 ${className}`}>
      <h3 className='block lg:hidden font-bold text-lg mt-12 mb-4 text-center lg:text-left'>Size. <span className='text-gray-500'>How Big is Your Car?</span></h3>
      <div className='flex justify-center lg:items-center lg:h-full'>
        <div className='mb-4 w-80 sm:w-96 h-40 lg:w-full lg:h-full lg:mt-8 relative'>
          <img src={getVehicleImageBasedOnSelection()} alt='Sedan 1' className='w-full h-full object-cover'/>
          <div className='absolute lg:h-10 w-full bg-white bottom-0'></div>
        </div>
      </div>
    </div>
  )
}

export default StickyVehicleType