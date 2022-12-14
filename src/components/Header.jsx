import React from 'react';
import Me from '../assets/profile img.jpg';
import HeaderSocials from './HeaderSocials';
import CTA from './CTA';

import '../styles/Header.scss'

const Header = () => {
  return (
    <header>
      <h5>Hello I'm</h5>
      <h1>Marko Petrovic</h1>
      <h5 className='textLight'>FrontEnd Developer</h5>
      <CTA/>
      <HeaderSocials/>

      <div className='me'>
        <img src={Me} alt="Me" />
      </div>

      <a href="#contact" className='scrollDown'>Scroll Down</a>
   </header>
  )
}

export default Header