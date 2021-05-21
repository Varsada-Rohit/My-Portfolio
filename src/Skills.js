import React from 'react';
import css from './assets/css.png';
import html from './assets/html.png';
import react from './assets/react.png';
import firebase from './assets/firebase.png';
import mongoDb from './assets/mongoDb.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import './component.scss';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { useInView } from 'react-intersection-observer';

import SwiperCore, { Navigation } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation]);

export default function Skills() {
   const { ref, inView } = useInView({
      /* Optional options */
      threshold: 0.3,
      delay: 400,
   });

   const isDesktop = useMediaQuery({
      query: '(min-device-width: 600px)',
   });
   const container = {
      hidden: { opacity: 0, y: 50 },
      show: {
         y: 0,
         opacity: 1,
         transition: {
            staggerChildren: 0.15,
         },
      },
   };

   const item = {
      hidden: { opacity: 0, y: 50 },
      show: { opacity: 1, y: 0 },
   };

   return (
      <div className='skills-container '>
         <motion.div
            ref={ref}
            variants={container}
            initial='hidden'
            animate={inView ? 'show' : 'hidden'}
            className='container'
         >
            <motion.div variants={item} className='title text-center '>
               Skills
            </motion.div>
            <Swiper
               autoplay={true}
               loop={true}
               navigation={true}
               grabCursor
               slidesPerView={isDesktop ? 4 : 2}
               onSlideChange={() => console.log('slide change')}
               onSwiper={(swiper) => console.log(swiper)}
            >
               <motion.div variants={item} className='row'>
                  <SwiperSlide>
                     <div className='skill'>
                        <img
                           className='skill-image'
                           src={html}
                           alt='HTML'
                           height={100}
                        />
                        <div className='skill-name'>HTML</div>
                     </div>
                  </SwiperSlide>

                  <SwiperSlide>
                     <div className='skill'>
                        <img
                           className='skill-image'
                           src={css}
                           alt='CSS'
                           height={100}
                        />
                        <div className='skill-name'>CSS</div>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className='skill'>
                        <img
                           className='skill-image'
                           src={react}
                           alt='REACT'
                           height={100}
                        />
                        <div className='skill-name'>React js</div>
                     </div>
                  </SwiperSlide>
                  <dSwiperSlidev>
                     <div className='skill'>
                        <img
                           className='skill-image'
                           src={react}
                           alt='React Native'
                           height={100}
                        />
                        <div className='skill-name'>React-Native</div>
                     </div>
                  </dSwiperSlidev>

                  <SwiperSlide>
                     <div className='skill'>
                        <img
                           className='skill-image'
                           src={firebase}
                           height={100}
                           alt='Firebase'
                        />
                        <div className='skill-name'>Firebase</div>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className='skill'>
                        <img
                           className='skill-image'
                           src={mongoDb}
                           height={100}
                           alt='MongoDB'
                        />
                        <div className='skill-name'>MongoDB</div>
                     </div>
                  </SwiperSlide>
               </motion.div>
            </Swiper>
         </motion.div>
      </div>
   );
}
