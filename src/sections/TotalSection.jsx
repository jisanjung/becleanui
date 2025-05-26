import React from 'react'
import totalSectionCar from '../assets/total_section.png';
import ButtonPrimary from '../components/ButtonPrimary';
import { TfiSpray } from "react-icons/tfi";
import { GoShieldCheck } from "react-icons/go";
import { useStoreState } from 'easy-peasy';
import { BOOKING_URL_MAPPING, PRICE_MAPPING } from '../constants';

const TotalSection = ({ className }) => {

    const vehicleTypeSelected = useStoreState(state => state.vehicleTypeSelected);
    const glassCoatingSelected = useStoreState(state => state.glassCoatingSelected);

    const computePriceFromSelections = () => {
        const vehicleTypePrice = !vehicleTypeSelected ? 0 : PRICE_MAPPING[vehicleTypeSelected];
        const glassCoatingPrice = (glassCoatingSelected === 'none' ? 0 : PRICE_MAPPING[glassCoatingSelected]) || 0;

        return vehicleTypePrice + glassCoatingPrice;
    };

    const getUrlFromSelections = () => {
        if (!vehicleTypeSelected) {
            return;
        }
        if (!glassCoatingSelected || glassCoatingSelected === 'none') {
            return BOOKING_URL_MAPPING[vehicleTypeSelected];
        }
        return BOOKING_URL_MAPPING[`${vehicleTypeSelected}+${glassCoatingSelected}`];
    };

  return (
    <section className={`py-4 md:py-6 lg:py-8 bg-gray-100 ${className}`}>
        <div className='wrapper lg:flex'>
            <div className='lg:w-3/5'>
                <h1 className='font-bold text-4xl mb-4'>Your ceramic coating. <span className='text-gray-500'>The Way You Want It.</span></h1>
                <div className='flex justify-center'>
                    <div className='w-80 sm:w-96 h-48 my-8'>
                        <img src={totalSectionCar} alt='Display Car' className='w-full h-full object-cover'/>
                    </div>
                </div>
            </div>
            <div className='lg:w-2/5 lg:px-10'>
                <ul className='mb-6 text-lg'>
                    <li className={`${!vehicleTypeSelected ? 'hidden' : 'flex'} items-center`}>
                        <TfiSpray className='mr-2'/>
                        2-layer Ceramic Coating
                    </li>
                    <li className={`${!glassCoatingSelected || glassCoatingSelected === 'none' ? 'hidden' : 'flex'} items-center`}>
                        <GoShieldCheck className='mr-2'/>
                        Glass Ceramic Coating
                    </li>
                </ul>
                <div className='flex font-bold mb-4 text-lg'>
                    <p>Total:</p>
                    <p className='mx-2'>
                        <span>
                            {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
                            .format(computePriceFromSelections())}
                        </span>
                    </p>
                </div>
                <div className='relative'>
                    <div className={`${!getUrlFromSelections() ? 'block' : 'hidden'} absolute inset-0 bg-white opacity-60`}></div>
                    <a href={`${getUrlFromSelections()}`}>
                        <ButtonPrimary>Continue Booking</ButtonPrimary>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TotalSection