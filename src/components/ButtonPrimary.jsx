import React from 'react'
import { BECLEAN_PRIMARY_BLUE_COLOR } from '../constants';

const ButtonPrimary = ({ children, className, onClick }) => {
  return (
    <button 
      className={`btn-primary text-white font-bold w-full p-4 rounded-xl cursor-pointer ${className}`}
      onClick={() => onClick()}
    >
        {children}
    </button>
  )
}

export default ButtonPrimary