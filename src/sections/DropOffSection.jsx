import React from 'react'
import DropOffRadio from '../components/DropOffRadio'

const DropOffSection = ({ disabled, className }) => {
  return (
    <section className={`py-4 md:py-6 ${className} relative`}>
        <div className={`${disabled ? 'block cursor-not-allowed' : 'hidden'} absolute inset-0 bg-white opacity-60`}></div>
        <h1 className='font-bold text-4xl mb-4 lg:text-2xl'>Free Drop Off After Coating</h1>
        <DropOffRadio/>
    </section>
  )
}

export default DropOffSection