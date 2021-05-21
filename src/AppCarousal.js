import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import css from './assets/css.png';
import html from './assets/html.png';
import './component.scss';

export default function AppCarousal() {
   return (
      <div className='row'>
         <Swiper
            // spaceBetween={10}
            autoplay={true}
            loop
            slidesPerView={4}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
         >
            <SwiperSlide className='text-center col-12  col-lg-3'>
               <div className='skill'>
                  <img
                     className='skill-image'
                     src={html}
                     height={100}
                     alt='html'
                  />
                  <div className='skill-name'>HTML</div>
               </div>
            </SwiperSlide>
            <SwiperSlide className='text-center  col-12  col-lg-3'>
               <div className='skill'>
                  <img
                     className='skill-image'
                     src={css}
                     height={100}
                     alt='CSS'
                  />
                  <div className='skill-name'>CSS</div>
               </div>
            </SwiperSlide>
            <SwiperSlide className='text-center col-12  col-lg-3'>
               Slide 3
            </SwiperSlide>
            <SwiperSlide className='text-center col-12  col-lg-3'>
               Slide 4
            </SwiperSlide>
         </Swiper>
      </div>
   );
}
