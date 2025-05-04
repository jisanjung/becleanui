import React from 'react'
import { BECLEAN_PRIMARY_BLUE_COLOR } from '../constants';

const RadioOption = ({ label, name, value, checked, onChange, className }) => {
  return (
      <label className={`block radio-option border-1 border-gray-500 rounded-xl p-4 ${className}`}
        style={{
          borderColor: checked ? BECLEAN_PRIMARY_BLUE_COLOR : '#6b7280',
          borderWidth: checked ? '2px' : '1px',
        }}
      >
          <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          />
          {label}
      </label>
  )
}

export default RadioOption