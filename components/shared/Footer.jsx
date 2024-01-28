'use client';

import { motion } from 'framer-motion';
import { socials } from '@constants';

import styles from '@styles';
import { footerVariants } from '@utils/motion';
import Image from 'next/image';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <Image
          src={'/lg-logo.svg'}
          alt='logo'
          height={90}
          width={90}
        />
        <button type="button" onClick={() => window.open('https://github.com/minhajhameed')} className="flex items-center h-fit py-4 px-6 bg-[#16161679] border-white border-[1px] rounded-[32px] gap-[12px]">
          <img
            src="/github.svg"
            alt="headset"
            className="w-[24px] h-[24px] object-contain"
          />
          <span className="font-normal text-[16px] text-white">
            Github
          </span>
        </button>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">
            MINHAJ HAMEED
          </h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2024 minhajhameed. All rights reserved.
          </p>

          <button className="flex gap-4" onClick={() => window.open('https://linkedin.com/in/minhajhameed')}>
            {socials.map((social) => (
              <img
                key={social.name}
                src={social.url}
                alt={social.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
            ))}
          </button>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
