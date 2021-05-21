import React from 'react';

export default function Card({ live, image }) {
   return (
      <div className='card-container'>
         <div className='card-image-container'>
            <img src={image} width='100%' alt='Project' />
         </div>
         <div className='card-text-container'>
            <p className='left'>
               <a href={live}>
                  View Code <i class='bi bi-code-slash'></i>
               </a>
            </p>
            <p className='right'>
               <a href={live} target='_blank' rel='noreferrer'>
                  live <i class='bi bi-chevron-right icon'></i>
               </a>
            </p>
         </div>
      </div>
   );
}
