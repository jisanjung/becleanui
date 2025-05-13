import React from 'react'
import GlassCoatingRadio from '../components/GlassCoatingRadio';

const GlassCoatingSection = ({ className }) => {
  return (
    <section className={`py-4 ${className}`}>
        <h1 className='font-bold text-4xl mb-4'>Glass Coating. <span className='text-gray-500'>Full Ceramic Protection.</span></h1>
        <GlassCoatingRadio/>
    </section>
  )
}

export default GlassCoatingSection