import React from 'react'
import { FaCheck } from "react-icons/fa6";

const InfoSection = ({ className }) => {
  return (
    <section className={`py-6 ${className}`}>
        <div className='mb-6 pb-6 border-b-1 border-gray-300'>
            <h1 className='font-bold text-4xl mb-6'>Ceramic Coating Information</h1>
            <h3 className='font-bold text-xl mb-3'>Ceramic Coating Overview</h3>
            <p>
            Thinking about making a strong impression with your car? Ceramic coatings are the best way to long-lasting paint protection while greatly
             improving the appearance of your car. Expert polishing revives the paint, removes scratches, and brings an amazing shine. 
             Necessary paint decontamination lets the coating stick to the paint and allows the coating to last longer. 
             A two-step ceramic coating application allows for the perfect blend of a long-lasting, smooth, and visually striking car.
            </p>
        </div>
        <div>
            <h3 className='font-bold text-xl mb-3'>What’s Included</h3>
            <ul>
                <li className='mb-4 flex items-center'>
                    <div><FaCheck className='text-xl text-green-600 mr-4'/></div> 
                    2-layer Ceramic Coating (All Painted Surfaces, Trim, and Rims)
                </li>
                <li className='mb-4 flex items-center'>
                    <div><FaCheck className='text-xl text-green-600 mr-4'/></div> 
                    Glass Ceramic Coating
                </li>
                <li className='mb-4 flex items-center'>
                    <div><FaCheck className='text-xl text-green-600 mr-4'/></div> 
                    Ceramic Coating Gift Box (Quick Detailer, Premium Microfiber Towel, & Coating Maintenance Guide)
                </li>
                <li className='mb-4 flex items-center'>
                    <div><FaCheck className='text-xl text-green-600 mr-4'/></div> 
                    Free Vehicle Drop-Off
                </li>
            </ul>
        </div>
    </section>
  )
}

export default InfoSection