import './My.scss';
import Lottie from 'react-lottie';
import coding from './assets/coding.json';
import Navbar from './Navbar';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import { motion } from 'framer-motion';

function App() {
   return (
      <div>
         <Navbar />
         <div className='home-container'>
            <div className='container'>
               <Lottie
                  options={{
                     autoplay: true,
                     loop: true,
                     animationData: coding,
                     rendererSettings: {
                        preserveAspectRatio: 'xMidYMid slice',
                     },
                  }}
                  width={200}
                  height={200}
                  style={{ margin: 20 }}
               />
            </div>

            <motion.div
               animate={{ opacity: 1, y: 0 }}
               initial={{ opacity: 0, y: 30 }}
               className='title text-center'
            >
               Varsada Rohit
            </motion.div>
            <div className='subTitle text-center'>Web and Mobile Debeloper</div>
            <button>
               View my work <i class='bi bi-arrow-right'></i>
            </button>
            {/* <div className="triangle"></div> */}
         </div>

         <Projects />
         <Skills />
         <Contact />
      </div>
   );
}

export default App;
