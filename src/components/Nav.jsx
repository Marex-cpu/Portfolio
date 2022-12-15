import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineUser, AiOutlineBook, AiOutlineMessage } from 'react-icons/ai';
import { RiServiceLine } from 'react-icons/ri';

import '../styles/Nav.scss';

const Nav = () => {
  const [activeLink, setActiveLink] = useState('#');
  return (
    <nav>
      <a 
        className={`linkItem ${activeLink === '#' ? 'active' : ''}`} 
        href="#" 
        onClick={() => setActiveLink('#')}>
          <AiOutlineHome/>
      </a>
      <a 
        className={`linkItem ${activeLink === '#about' ? 'active' : ''}`} 
        href="#about" 
        onClick={() => setActiveLink('#about')}>
          <AiOutlineUser/>
      </a>
      <a 
        className={`linkItem ${activeLink === '#experience' ? 'active' : ''}`} 
        href="#experience" 
        onClick={() => setActiveLink('#experience')}>
          <AiOutlineBook/>
      </a>
      <a 
        className={`linkItem ${activeLink === '#services' ? 'active' : ''}`} 
        href="#services" 
        onClick={() => setActiveLink('#services')}>
          <RiServiceLine/>
      </a>
      <a 
        className={`linkItem ${activeLink === '#contact' ? 'active' : ''}`} 
        href="#contact" 
        onClick={() => setActiveLink('#contact')}>
          <AiOutlineMessage/>
      </a>
    </nav>
  )
}

export default Nav