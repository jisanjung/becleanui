import React, { useState } from 'react'
import MobileNav from './MobileNav'
import { HEADER_BACKGROUND_COLOR } from '../constants'
import { GiHamburgerMenu } from "react-icons/gi";
import becleanLogo from '../assets/beclean_logo.png';

const Header = () => {

  const [menuToggled, setMenuToggled] = useState(false);

  return (
    <header style={{
      background: HEADER_BACKGROUND_COLOR,
      color: '#fff',
    }}
      className='py-2 px-4'
    >
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <div style={{
            width: '50px'
          }}>
            <img src={becleanLogo} alt='Beclean Logo'/>
          </div>
          <p className='font-bold text-lg'>beclean</p>
        </div>
        <button onClick={() => setMenuToggled(!menuToggled)}>
          <GiHamburgerMenu className='text-3xl'/>
        </button>
      </div>
      <MobileNav menuToggled={menuToggled}/>
    </header>
  )
}

export default Header