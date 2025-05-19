import React from 'react'
import totalSectionCar from '../assets/total_section.png';
import ButtonPrimary from '../components/ButtonPrimary';
import { TfiSpray } from "react-icons/tfi";
import { GoShieldCheck } from "react-icons/go";

const TotalSection = ({ className }) => {
  return (
    <section className={`py-4 md:py-6 bg-gray-100 ${className}`}>
        <h1 className='font-bold text-4xl mb-4'>Your ceramic coating. <span className='text-gray-500'>The Way You Want It.</span></h1>
        <div className='flex justify-center'>
            <div className='w-80 sm:w-96 h-48 my-8'>
                <img src={totalSectionCar} alt='Display Car' className='w-full h-full object-cover'/>
            </div>
        </div>
        <ul className='mb-6 text-lg'>
            <li className='flex items-center'>
                <TfiSpray className='mr-2'/>
                2-layer Ceramic Coating
            </li>
            <li className='flex items-center'>
                <GoShieldCheck className='mr-2'/>
                Glass Ceramic Coating
            </li>
        </ul>
        <div className='flex font-bold mb-4 text-lg'>
            <p>Total:</p>
            <p className='mx-2'>
                <span>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(1700)}</span>
            </p>
        </div>
        <ButtonPrimary>Continue Booking</ButtonPrimary>
    </section>
  )
}

export default TotalSection