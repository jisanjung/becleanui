import React from 'react'
import GlassCoatingSelection from '../components/GlassCoatingSelection';

const GlassCoatingSection = () => {
  return (
    <section className='py-4'>
        <h1 className='font-bold text-4xl mb-4'>Glass Coating. <span className='text-gray-500'>Full Ceramic Protection.</span></h1>
        <GlassCoatingSelection/>
    </section>
  )
}

export default GlassCoatingSection