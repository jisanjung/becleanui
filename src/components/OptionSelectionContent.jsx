import React from 'react'

const OptionSelectionContent = ({ title, price, description }) => {
  return (
    <div>
        <div className='flex items-center justify-between'>
            <p className='font-bold text-xl'>{title}</p>
            <small>{price}</small>
        </div>
        {description &&
            <p>{description}</p>
        }
    </div>
  )
}

export default OptionSelectionContent