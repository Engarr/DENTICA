'use client';
import { motion } from 'framer-motion';
import React from 'react';
import ScrollDownBtn from '@/components/UI/scroll-down-btn';
import Wrapper from '@/components/wrapper';

const WelcomeText = () => {
  return (
    <motion.div
      className=' absolute top-1/2 flex flex-col justify-center items-center xl:left-[55%] bg-white/70 xl:bg-transparent w-full xl:w-auto py-5 xl:top-[35%] gap-1 xl:gap-5 z-50 '
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}>
      <h2 className='text-[var(--main-color)] font-bold text-sm xs:text-base  s:text-lg md:text-2xl 2xl:text-3xl px-1'>
        Twój zdrowy uśmiech jest dla nas celem
      </h2>
      <p className='text-[var(--text-second-color)] font-semibold text-xs xs:text-sm s:text-base md:text-xl 2xl:text-2xl'>
        Zrealizujmy ten cel razem
      </p>
      <ScrollDownBtn />
    </motion.div>
  );
};

export default WelcomeText;
