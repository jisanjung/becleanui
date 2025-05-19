import React from 'react'
import DropOffRadio from '../components/DropOffRadio'

const DropOffSection = ({ className }) => {
  return (
    <section className={`py-4 md:py-6 ${className}`}>
        <h1 className='font-bold text-4xl mb-4'>Free Drop Off After Coating</h1>
        <DropOffRadio/>
    </section>
  )
}

export default DropOffSection