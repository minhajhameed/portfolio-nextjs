'use client';

import { motion } from 'framer-motion';

import styles from '@styles';
import { skillImg } from '@constants';
import { StartSteps, TitleText, TypingText } from '../shared';
import { staggerContainer, fadeIn, planetVariants } from '@utils/motion';

const ImgSteps = ({ imgUrl }) => (
  <div className={`${styles.flexCenter} flex-row justify-between`}>
    <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}>
      <div className="font-bold items-center flex justify-center text-[20px] text-white">
        <img
          src={imgUrl}
          alt=".."
          className="w-[80%] h-[80%] object-contain"
        />
      </div>
    </div>
  </div>
);
const Skill = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants('left')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/no-bg-pro.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain rounded-full"
        />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| A Profound Web Skillset" />
        <TitleText title={<>Expert in Various <br />Web Technologies</>} />
        <div className="mt-[31px] flex flex-wrap max-w-[370px] gap-[24px] justify-between">
        {skillImg.map((feature, index) => (
          <ImgSteps
            key={index}
            imgUrl={feature}
          />
        ))}
      </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Skill;
