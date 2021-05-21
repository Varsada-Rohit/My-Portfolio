import React, { useEffect, useState } from 'react';
import './navbar.scss';

export default function Navbar() {
   const [sticky, setSticky] = useState(false);
   const [showNav, setShowNav] = useState(false);

   useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
         // window.removeEventListener("scroll");
      };
   }, []);

   const handleScroll = () => {
      if (window.pageYOffset > 100) {
         setSticky(true);
      } else {
         setSticky(false);
      }
   };

   const toggleNav = () => {
      setShowNav(!showNav);
   };

   return (
      <div
         className='navbar '
         style={{
            position: sticky ? 'fixed' : 'absolute',
         }}
         id='navbar'
      >
         <div className='container'>
            <div className='col-12 col-lg-6 col-md-6 nav-left'>
               <div className='logo'>
                  <a href='/'>VR</a>
                  <i
                     onClick={() => toggleNav()}
                     className='bi bi-list nav-toggle'
                  ></i>
               </div>
            </div>
            <div
               className={
                  showNav
                     ? 'col-12 col-lg-6 col-md-6 nav-right showNav'
                     : 'col-12 col-lg-6 col-md-6 nav-right'
               }
               id='nav-right'
            >
               <a href='/#home'>Home</a>
               <a href='/#projects'>Projects</a>
               <a href='/#skills'>About</a>
            </div>
         </div>
      </div>
   );
}
