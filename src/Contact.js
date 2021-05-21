import React from 'react';

export default function Contact() {
   return (
      <div className='contact-container  py-5'>
         {/* <div className="py-5"> */}
         <p className='title'>Interseted working with me </p>

         <div className='social-media-container'>
            <a href='https://www.facebook.com/Rohit0928/'>
               <i class='bi bi-facebook'></i>
            </a>

            <a href='https://www.instagram.com/patel_.rohit/'>
               <i class='bi bi-instagram'></i>
            </a>
            <a href='https://github.com/varsada-rohit'>
               <i class='bi bi-github'></i>
            </a>
            <a href='mailto:varsadarohit@gmail.com?body=mail From portfolio'>
               <i class='bi bi-envelope'></i>
            </a>
         </div>
         <p className='my-2'>Get In Touch</p>
         {/* </div> */}
      </div>
   );
}
