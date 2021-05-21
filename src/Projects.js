import React from 'react';
import Card from './Card';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import fandb from './assets/fandbnew.png';
import SES from './assets/ses1.png';

export default function Projects() {
   const { ref, inView } = useInView({
      /* Optional options */
      threshold: 0.3,
      delay: 400,
   });

   return (
      <div className='container' id='projects' style={{ position: 'relative' }}>
         <div className=' container projects-container'>
            <div className='title my-5 text-center'>Projects</div>
            <div className='row'>
               <motion.div
                  transition={{ type: 'tween', duration: 0.6 }}
                  ref={ref}
                  initial={{ x: -100, opacity: 0 }}
                  animate={
                     inView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }
                  }
                  className='col-12 col-lg-6 text-center'
               >
                  <Card
                     live={'https://fandbfrontend.vercel.app/'}
                     image={fandb}
                  />
               </motion.div>
               <motion.div
                  transition={{ type: 'tween', duration: 0.6 }}
                  ref={ref}
                  initial={{ x: 100, opacity: 0 }}
                  animate={
                     inView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }
                  }
                  className='col-12 col-lg-6 text-center'
               >
                  <Card image={SES} />
               </motion.div>
            </div>
            {/* <div className="triangle"></div> */}
         </div>
      </div>
   );
}
