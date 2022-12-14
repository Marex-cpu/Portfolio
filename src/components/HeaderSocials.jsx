import React from 'react';
import { BsLinkedin, BsGithub, BsDribbble } from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className='headerSocials'>
        <a href="https://www.linkedin.com/in/marko-petrovi%C4%87-937b8323a/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/Marex-cpu" target='_blank'><BsGithub/></a>
        <a href="https://dribbble.com/M4rex" target='_blank'><BsDribbble/></a>
    </div>
  )
}

export default HeaderSocials