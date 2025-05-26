import React from 'react'
import { FOOTER_BACKGROUND_COLOR } from '../constants'
import LinkButton from './LinkButton'
import { FaLinkedinIn } from "react-icons/fa";
import { TfiFacebook } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='flex justify-center lg:block px-4 py-6 md:px-10' style={{
        background: FOOTER_BACKGROUND_COLOR,
    }}>
        <div className='lg:flex lg:items-center lg:justify-between wrapper'>
            <div>
                <p className='font-bold hidden lg:block lg:mb-2'>Copyright &copy; <span>{new Date().getFullYear()}</span> beclean </p>
                <div className='flex justify-center lg:justify-start mb-6 lg:mb-0'>
                    <LinkButton href="/#servicesSection" className='pr-8 lg:pr-4'>Services</LinkButton>
                    <LinkButton href="/#contactSection">Contact Us</LinkButton>
                </div>
            </div>
            <div>
                <div className='flex justify-center lg:justify-end items-end mb-6'>
                    <a href='https://www.linkedin.com/company/becleancars/'>
                        <FaLinkedinIn className='text-3xl mr-4'/>
                    </a>
                    <a href='https://www.facebook.com/BeCleanCars?mibextid=LQQJ4d'>
                        <TfiFacebook className='text-3xl mr-4'/>
                    </a>
                    <a href='https://www.instagram.com/becleancars?igsh=cTFxcHRnMTVsMDZh'>
                        <FaInstagram className='text-3xl mr-4 lg:mr-0'/>
                    </a>
                </div>
                <div className='flex flex-col items-center lg:items-end mb-6 lg:mb-0'>
                    <p>becleancars@gmail.com</p>
                    <LinkButton href='tel:+12674096913'>(267) 409-6913</LinkButton>
                </div>
            </div>
            <p className='font-bold lg:hidden'>Copyright &copy; <span>{new Date().getFullYear()}</span> beclean </p>
        </div>
    </footer>
  )
}

export default Footer