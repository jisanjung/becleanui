import React, { useState } from 'react'
import RadioOption from './RadioOption';
import OptionSelectionContent from './OptionSelectionContent';

const DropOffSelection = () => {

    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

  return (
    <div>
        <RadioOption
            label={<OptionSelectionContent 
                title='Drop-Off'
                price='Free'
                description={
                    <p className='mt-4 w-4/5'>
                        Remove the headache around scheduling the right time to pick-up your car. 
                        As soon as the coating cures, we drop it off for you.
                    </p>
                }
            />}
            name='dropOff'
            value='drop_off'
            checked={selectedValue === 'drop_off'}
            onChange={handleChange}
            className='mb-3'
        />
        <RadioOption
            label={<OptionSelectionContent 
                title='No Drop-Off'
            />}
            name='dropOff'
            value='none'
            checked={selectedValue === 'none'}
            onChange={handleChange}
            className='mb-3'
        />
    </div>
  )
}

export default DropOffSelection