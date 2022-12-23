import React from 'react';
import { qoutes }  from '../constants/text';

import '../styles/Qoutes.scss';

// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


const Qoutes = () => {
  return (
    <section id='qoutes'>
      <h5>Quotes that meant a lot to me</h5>
      <h2>Inspirations qoutes</h2>

      <Swiper className='qoutesContainer' 
      modules={[Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {qoutes.map(({name, qoute}, index) => {
         return (
          <SwiperSlide className='qoute' key={index}>
            <h5>{name}</h5>
            <small className='text'>"{qoute}"</small>
          </SwiperSlide>
         ) 
        })}

        {/* <article className='qoute'>
          <h5>Ime profesora</h5>
          <small className='text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, ipsum. Quod non aliquam labore tenetur?
          </small>
        </article> */}
      </Swiper>
    </section>
  )
}

export default Qoutes