import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
 import { CustomButton } from '../components';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';


const Home = () => {
    const snap = useSnapshot(state);
  return (
    
  <  AnimatePresence>
    {snap.intro && (
        <motion.section className='home' {...slideAnimation('left')}>
            <motion.header>
                <img
                src='./threejs.png'
                alt= 'logo'
                className='w-8 h-8 object-contain'
                />
            </motion.header>

            <motion.div className='home-content'{...headTextAnimation}>
                <h1 className='head-text'>
                    Let's <br className='xl:block hidden'/>Do It.
                </h1>
            </motion.div>
            <motion.div
            {...headContentAnimation}
            className='flex flex-col gap-5'
            >
              <p className='max-w-md font-normal text-gray-600 text-base'>
                Create your unique and exclusive shirt with our brand-new 3D customiaztion
                 tool.
                <strong>Unleash your imagination</strong>{" "}
                and define your own style.
              </p>
              <CustomButton
              type="filled"
              title="Custom It"
              handleClick = {() => state.intro = false}
              custtomStyles = "w-fit px-4 py-2.5 font-bold text-sm"
              ></CustomButton>
            </motion.div>
        
        </motion.section>
    )}
    </AnimatePresence>
   
  )
}

export default Home