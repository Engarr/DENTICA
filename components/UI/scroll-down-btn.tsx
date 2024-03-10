'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { IoIosArrowDown } from 'react-icons/io';

const ScrollDownBtn = () => {
  const scrolltoHash = function () {
    const element = document.getElementById('second-section');
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  };
  return (
    <div className={``}>
      <motion.button
        aria-label='scroll-down'
        className=' p-2 mt-2 xl:p-2 rounded-[50%] border border-[var(--main-color)] '
        whileTap={{ scale: 0.95 }}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.1 },
        }}
        onClick={scrolltoHash}>
        <motion.div
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.1 },
          }}>
          <IoIosArrowDown className='text-[15px] xs:text-[20px]  text-main-color' />
        </motion.div>
      </motion.button>
    </div>
  );
};

export default ScrollDownBtn;
