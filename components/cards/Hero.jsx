'use client';

import { motion } from 'framer-motion';

import styles from '@styles';
import { slideIn, staggerContainer, textVariant } from '@utils/motion';
import Image from 'next/image';
import { TypingText } from '@components/shared';

const Hero = () => (
  <section className={`sm:py-16 xs:py-8 py-12 sm:px-4 `}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
     

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className=""
      >
        <div className="flex flex-row justify-center content-around md:-mt-[20px] -mt-[12px] relative w-full h-[600px] gray_gradient rounded-3xl z-[0] -top-[30px] w-sm:h-screen object-cover" >
       
        <section className='w-full flex flex-center flex-col items-center'>
    <h1 className='head_text text-center pop_font'>
        Hi, I'm
        <span className='sky_gradient text-center pop_font'> Minhaj Hameed</span>
    </h1>
    <p className='desc text-center barlow_font'>
      Proficient full-stack developer in <span className='text-white barlow_font'> Next.js, Docker, TypeScript, Node.js, and Solidity for Web3 technologies.</span>
        <br className='max-md:hidden'/> Explore my portfolio for professional and innovative web solutions showcasing expertise in these technologies.
    </p>
    
    <div className="flex mt-8 max-w-6xl items-center pop_font">
        <button className="flex flex-row items-center white_btn m-4" onClick={() => window.open('https://linkedin.com/in/minhajhameed')}>
        <div className='mr-1'>LinkedIn</div>
        <Image 
          src={'/linked.svg'}
          alt='linkedin'
          width={20}
          height={20}
        />
        </button>
        <button className="flex flex-row items-center black_btn m-4" onClick={() => window.open('https://github.com/minhajhameed')}>
        <div className='mr-1'>Github</div>
        <Image 
          src={'/github.svg'}
          alt='github'
          width={18}
          height={18}
        />
        </button>
    </div>
    <TypingText title="○ ○ ○" textStyles="text-center mt-2" />
    <TypingText title="Discover Portfolio Brilliance ▼" textStyles="text-center mt-4" />
  </section>
    </div>

      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
