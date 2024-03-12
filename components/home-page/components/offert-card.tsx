'use client';
import React from 'react';
import Image from 'next/image';
import tooth from '@/public/tooth.png';
import arrow from '@/public/Arrow.png';
import { motion } from 'framer-motion';

type OffertCard = {
  title: string;
  text: string;
};

const OffertCard = ({ title, text }: OffertCard) => {
  return (
    <div className='relative flex flex-col justify-center items-center gap-1 my-5 lg:hover:shadow-lg p-4 group transition-all duration-300 cursor-pointer'>
      <div className='w-[100px] lg:w-auto'>
        <Image
          alt=''
          src={tooth}
          width={145}
          height={138}
          className='divShadow'
        />
      </div>
      <div className='flex items-center gap-2'>
        <div className='w-[30px] h-[3px] bg-[var(--main-color)]' />
        <p className='text-xl lg:text-2xl font-bold'>{title}</p>
        <div className='w-[30px] h-[3px] bg-[var(--main-color)] ' />
      </div>
      <div>
        <p className='text-lg lg:text-xl font-semibold italic'>{text}</p>
      </div>
      <motion.div
        className='absolute top-[20%] right-[10%] lg:top-0 lg:right-0 p-2 lg:hidden lg:group-hover:inline-block w-[50px] lg:w-[60px]'
        whileTap={{ scale: 0.95 }}
        whileHover={{
          scale: 1.05,
        }}>
        <Image src={arrow} alt='' className='w-full' />
      </motion.div>
    </div>
  );
};

export default OffertCard;
