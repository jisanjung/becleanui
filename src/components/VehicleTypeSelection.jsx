import React, { useState } from 'react'
import RadioOption from './RadioOption';
import OptionSelectionContent from './OptionSelectionContent';

const VehicleTypeSelection = () => {

    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

  return (
    <div>
        <RadioOption
            label={<OptionSelectionContent 
                title='Sedans, Coupes & Hatchbacks'
                price='$1,500'
            />}
            name='vehicleType'
            value='sedan'
            checked={selectedValue === 'sedan'}
            onChange={handleChange}
            className='mb-3'
        />
        <RadioOption
            label={<OptionSelectionContent 
                title='SUVs'
                price='$1,700'
            />}
            name='vehicleType'
            value='suv'
            checked={selectedValue === 'suv'}
            onChange={handleChange}
            className='mb-3'
            styleOverrides={{
                minHeight: '90px'
            }}
        />
        <RadioOption
            label={<OptionSelectionContent 
                title='Trucks & 3-Row'
                price='$2,000'
            />}
            name='vehicleType'
            value='truck'
            checked={selectedValue === 'truck'}
            onChange={handleChange}
            className='mb-3'
            styleOverrides={{
                minHeight: '90px'
            }}
        />
    </div>
  )
}

export default VehicleTypeSelection