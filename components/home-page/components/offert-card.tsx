'use client';
import React from 'react';
import Image from 'next/image';
import tooth from '@/public/tooth.png';
import arrow from '@/public/Arrow.png';
import { motion } from 'framer-motion';
import Link from 'next/link';

type OffertCard = {
  title: string;
  text: string;
};

const OffertCard = ({ title, text }: OffertCard) => {
  return (
    <Link href={`/zabiegi/${title.toLocaleLowerCase()}`}>
      <motion.div
        className='relative flex flex-col justify-center items-center gap-1 my-5 lg:hover:shadow-lg p-4 group transition-all duration-300 cursor-pointer rounded-md'
        whileTap={{ scale: 0.95 }}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.1 },
        }}>
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
          <p className='text-base lg:text-xl font-semibold'>{title}</p>
          <div className='w-[30px] h-[3px] bg-[var(--main-color)] ' />
        </div>
        <div>
          <p className='text-sm lg:text-lg  italic'>{text}</p>
        </div>

        <motion.div
          className='absolute top-[20%] right-[10%] lg:top-0 lg:right-0 p-2 lg:hidden lg:group-hover:inline-block w-[50px] lg:w-[60px]'
          whileTap={{ scale: 0.95 }}
          whileHover={{
            scale: 1.05,
          }}>
          <Image src={arrow} alt='' className='w-full' />
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default OffertCard;
