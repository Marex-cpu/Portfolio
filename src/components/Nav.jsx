import React from 'react';
import { AiOutlineHome, AiOutlineUser, AiOutlineBook, AiOutlineMessage } from 'react-icons/ai';
import { RiServiceLine } from 'react-icons/ri';

import '../styles/Nav.scss';

const Nav = ({ activeLink, handleClick }) => {
  return (
    <nav>
      <a 
        className={`linkItem ${activeLink === '#' ? 'active' : ''}`} 
        href="#"
        onClick={() => handleClick('#')} 
      >
          <AiOutlineHome/>
      </a>
      <a 
        className={`linkItem ${activeLink === '#about' ? 'active' : ''}`} 
        href="#about"
        onClick={() => handleClick('#about')}  
      >
          <AiOutlineUser/>
      </a>
      <a 
        className={`linkItem ${activeLink === '#experience' ? 'active' : ''}`} 
        href="#experience"
        onClick={() => handleClick('#experience')} 
      >
          <AiOutlineBook/>
      </a>
      <a 
        className={`linkItem ${activeLink === '#portfolio' ? 'active' : ''}`} 
        href="#portfolio"
        onClick={() => handleClick('#portfolio')} 
      >
          <RiServiceLine/>
      </a>
      <a 
        className={`linkItem ${activeLink === '#contact' ? 'active' : ''}`} 
        href="#contact"
        onClick={() => handleClick('#contact')} 
      >
          <AiOutlineMessage/>
      </a>
    </nav>
  )
}

export default Nav