import React from 'react'
import { FOOTER_BACKGROUND_COLOR } from '../constants'
import LinkButton from './LinkButton'
import { FaLinkedinIn } from "react-icons/fa";
import { TfiFacebook } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='flex justify-center px-4 py-6' style={{
        background: FOOTER_BACKGROUND_COLOR,
    }}>
        <div>
            <div className='flex justify-center mb-6'>
                <LinkButton href="#" className='pr-8'>Services</LinkButton>
                <LinkButton href="#">Contact Us</LinkButton>
            </div>
            <div className='flex justify-center items-end mb-6'>
                <a href='https://www.linkedin.com/company/becleancars/'>
                    <FaLinkedinIn className='text-3xl mr-4'/>
                </a>
                <a href='https://www.facebook.com/BeCleanCars?mibextid=LQQJ4d'>
                    <TfiFacebook className='text-3xl mr-4'/>
                </a>
                <a href='https://www.instagram.com/becleancars?igsh=cTFxcHRnMTVsMDZh'>
                    <FaInstagram className='text-3xl mr-4'/>
                </a>
            </div>
            <div className='flex flex-col items-center mb-6'>
                <p>becleancars@gmail.com</p>
                <LinkButton href='tel:+12674096913'>(267) 409-6913</LinkButton>
            </div>
            <p className='font-bold'>Copyright &copy; <span>{new Date().getFullYear()}</span> beclean </p>
        </div>
    </footer>
  )
}

export default Footer