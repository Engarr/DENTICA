'use client';
import React from 'react';

import Wrapper from '@/components/wrapper';
import { motion } from 'framer-motion';
import Button from '@/components/UI/button';

const BottomBar = () => {
  return (
    <Wrapper style=' absolute bottom-0 z-20'>
      <motion.div
        className='divShadow absolute right-[1%] bottom-[5px] lg:bottom-[17px] w-[95%] md:w-auto'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}>
        <div className='navClipPath bg-[var(--main-color)] w-full h-[80px] lg:h-[80px] md:w-[624px]  xl:w-[824px] xl:h-[100px]'>
          <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[30rem] px-10 '>
            <Button
              href='/kontakt'
              style=' border-b-2 w-full text-sm xs:text-base md:text-lg lg:text-xl'>
              Umów się na wizytę
            </Button>
          </div>
        </div>
      </motion.div>
    </Wrapper>
  );
};

export default BottomBar;
