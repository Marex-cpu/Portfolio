import React from 'react';
import CV from '../assets/CV.pdf';

const CTA = ({ activeLink, handleClick }) => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className={`btn btnPrimary ${activeLink === '#contact' ? 'active' : ''}`} onClick={() => handleClick('#contact')}>Let's Talk</a>
    </div>
  )
}

export default CTA