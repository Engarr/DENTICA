import { cn } from '@/lib/utils';
import React from 'react';

const textData = [
  'PROFESIONALIZM',
  'EMPATIA',
  'NOWOCZESNE TECHNOLOGIE',
  'DOŚWIADCZENIE',
  'PROFESIONALIZM',
  'EMPATIA',
  'NOWOCZESNE TECHNOLOGIE',
  'DOŚWIADCZENIE',
];
type TextBarType = {
  direction: string;
};
const TextBar = ({ direction }: TextBarType) => {
  const animation = direction === 'left' ? 'animate' : 'animate-reversed';
  return (
    <div className='w-screen box-border flex overflow-hidden bg-[var(--bar-bg-30)] text-xs  lg:text-base py-2 text-[var(--text-first-color)] font-semibold items-center justify-center z-20'>
      <div className='max-w-[1920px]  w-full overflow-hidden flex'>
        <div className={cn('animate flex gap-5  lg:gap-24', animation)}>
          {textData.map((t, i) => (
            <div
              key={i}
              className='text-[var(--text-first-color)] whitespace-nowrap inline-flex items-center justify-center'>
              <p className=' last:ml:[20px] lg:last:ml-[96px]'>{t}</p>
            </div>
          ))}
        </div>
        <div className={cn('animate flex gap-5  lg:gap-24', animation)}>
          {textData.map((t, i) => (
            <div
              key={i}
              className='text-[var(--text-first-color)] whitespace-nowrap inline-flex items-center justify-center'>
              <p className='last:ml:[20px] lg:last:ml-[96px]'>{t}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TextBar;
