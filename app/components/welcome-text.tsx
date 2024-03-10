'use client';
import { motion } from 'framer-motion';
import React from 'react';
import ScrollDownBtn from '@/components/UI/scroll-down-btn';
import Wrapper from '@/components/wrapper';

const WelcomeText = () => {
  return (
    <Wrapper style='h-[100vh] top-0 absolute'>
      <motion.div
        className=' absolute top-1/2 flex flex-col justify-center items-center lg:left-[55%] bg-white/70 lg:bg-transparent w-full lg:w-auto py-5 lg:top-[35%] gap-1 xl:gap-5'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}>
        <h1 className='text-[var(--main-color)] font-bold text-xl s:text-2xl  md:text-4xl lg:text-3xl xl:text-4xl'>
          Twój zdrowy uśmiech jest dla nas celem
        </h1>
        <p className='text-[var(--text-second-color)] font-semibold text-lg s:text-xl  md:text-3xl lg:text-2xl xl:text-3xl'>
          Zrealizujmy ten cel razem
        </p>
        <ScrollDownBtn />
      </motion.div>
    </Wrapper>
  );
};

export default WelcomeText;
// z-20 absolute top-1/2 lg:top-[35%] xl:top-[40%] xl:left-[100%] text-center gap-1 xl:gap-5 flex flex-col xl:mr-28 bg-white/65 w-full translate-x-1/2 left-1/2
// lg:text-2xl xl:text-[2.5rem]
// lg:text-xl xl:text-4xl
