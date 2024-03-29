"use client";

import { motion } from "framer-motion";
import { TypingText } from "../shared";

import styles from "@styles";
import { fadeIn, staggerContainer } from "@utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Me" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] px-8 font-normal sm:text-[32px] text-[20px] sand_font text-center text-secondary-white"
      >
        I'm a Fullstack Developer passionate about
        crafting dynamic web applications. With expertise in <span className="text-white sand_font font-semibold"> Next.js, Node.js,
        and Web3, </span> I specialize in creating seamless user experiences. My skills
        extend to <span className="text-white sand_font font-semibold">Docker</span> for streamlined deployment. <br /> <br /> Proficient in <span className="font-semibold text-white sand_font"> TypeScript,
        JavaScript,</span> and <span className="text-white sand_font font-semibold"> Solidity</span>, I bring innovation to every project. Explore
        my work to witness the intersection of creativity and technical
        excellence in Fullstack development.
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
