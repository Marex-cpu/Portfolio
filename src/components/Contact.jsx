import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { contactOption }  from '../constants/text';


import '../styles/Contact.scss';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kjqp8k5', 'template_88b7gvv', form.current, 'tXSWcODJAsyv4RO_P')
     
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="contactContainer">
        <div className="contactOptions">
          {contactOption.map(({icon, type, info, link, id}) => {
            return (
              <article className='contactOption' key={id}>
                {icon}
                <h4>{type}</h4>
                <h5>{info}</h5>
                <a href={link} target='_blank' rel='noreferrer'>Send a message</a>
              </article> 
            )
          })}
        </div>
        <form className='form' ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact