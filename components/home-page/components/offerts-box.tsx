'use client';
import React, { useState } from 'react';
import OffertCard from './offert-card';
import { offerData } from '@/lib/data';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Wrapper from '@/components/wrapper';

type OfferType = {
  title: string;
  text: string;
};
const SPRING_OPTIONS = {
  // type: 'spring',
  mass: 4,
  stiffness: 500,
  damping: 100,
};

const OffertsBox = () => {
  const [transformIndex, setTransformIndex] = useState(0);
  const dots = [0, 1, 2];
  return (
    <Wrapper>
      <div className='relative overflow-x-hidden my-[100px] lg:my-[200px] lg:px-20'>
        <div className='lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-4 hidden '>
          {offerData.map((offer, i) => (
            <React.Fragment key={i}>
              <OffertCard text={offer.text} title={offer.title} />
            </React.Fragment>
          ))}
        </div>
        <div className='w-full flex justify-center gap-2 my-5 lg:hidden'>
          {dots.map((dot, index) => (
            <div
              key={index}
              className={cn(
                'bg-[var(--main-color)] w-[20px] h-[20px] rounded-full',
                { 'bg-[var(--main-color-30)]': dot !== transformIndex }
              )}
              onClick={() => setTransformIndex(dot)}
            />
          ))}
        </div>
        <div className='flex relative lg:hidden'>
          {offerData
            .reduce((acc: OfferType[][], curr: OfferType, i: number) => {
              if (i % 3 === 0) acc.push([]);
              acc[acc.length - 1].push(curr);
              return acc;
            }, [])
            .map((column, columnIndex) => (
              <motion.div
                key={columnIndex}
                className='grid grid-cols-1 gap-1 w-full shrink-0  relative '
                animate={{ translateX: `-${transformIndex * 100}%` }}
                transition={SPRING_OPTIONS}>
                {column.map((offer: OfferType, offerIndex: number) => (
                  <div key={offerIndex} className='w-full'>
                    <OffertCard text={offer.text} title={offer.title} />
                  </div>
                ))}
              </motion.div>
            ))}
        </div>
        <div className='w-full flex justify-center gap-2 my-5 lg:hidden'>
          {dots.map((dot, index) => (
            <div
              key={index}
              className={cn(
                'bg-[var(--main-color)] w-[20px] h-[20px] rounded-full',
                { 'bg-[var(--main-color-30)]': dot !== transformIndex }
              )}
              onClick={() => setTransformIndex(dot)}
            />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default OffertsBox;
