import React, { useState } from 'react'
import { IoChevronDownSharp } from "react-icons/io5";

const DropdownInfo = ({ title, description }) => {

  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div className='py-4 border-b-1 border-gray-300'>
      <div className='flex justify-between items-center'>
        <p className='font-bold'>{title}</p>
        <button>
          <IoChevronDownSharp className='text-3xl transition-all'
            onClick={() => setOpenDropdown(!openDropdown)}
            style={{
              transform: openDropdown ? 'rotate(180deg)' : 'none'
            }}
          />
        </button>
      </div>
      {
        (description && openDropdown) &&
        (<div className='pt-4'
        >
          <p>{description}</p>
        </div>)
      }
    </div>
  )
}

export default DropdownInfo