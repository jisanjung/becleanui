import React, { useState } from 'react'
import RadioOption from './RadioOption';
import OptionSelectionContent from './OptionSelectionContent';

const GlassCoatingRadio = () => {

    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

  return (
    <div>
        <RadioOption
            label={<OptionSelectionContent 
                title={<span>Glass Dedicated<br/> Ceramic Coating</span>}
                price='$200'
                description={
                    <div className='mt-4 pt-4 border-t-1 border-black'>
                        <p className='mb-4 w-4/5'>Ceramic coating made specifically for windows</p>
                        <p className='mb-4 w-4/5'>Higher coating longevity and protection</p>
                        <p className='w-4/5'>Increased performance in snow and rain</p>
                    </div>
                }
            />}
            name='glassCoating'
            value='glass_ceramic_coating'
            checked={selectedValue === 'glass_ceramic_coating'}
            onChange={handleChange}
            className='mb-3'
        />
        <RadioOption
            label={<OptionSelectionContent 
                title='No Glass Ceramic Coating'
            />}
            name='glassCoating'
            value='none'
            checked={selectedValue === 'none'}
            onChange={handleChange}
            className='mb-3'
        />
    </div>
  )
}

export default GlassCoatingRadio