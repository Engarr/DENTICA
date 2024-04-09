import React from 'react';
import Wrapper from '@/components/wrapper';
import { cn } from '@/lib/utilis';
import { sintony } from '@/lib/fonts';

type SectionTitleType = {
  text: string;
  style?: string;
};
const SectionTitle = ({ text, style }: SectionTitleType) => {
  return (
    <Wrapper style=''>
      <div className='relative top-0 w-full'>
        <div
          className={cn(
            'divShadow absolute top-[17px] left-[5%] lg:left-[17px] w-[92%] lg:w-2/5',
            style
          )}>
          <div className='sectionClipPath  h-[60px] lg:h-[80px] bg-[var(--main-color)] '>
            <h3
              className={` relative top-1/2 -translate-y-1/2 text-2xl lg:text-3xl px-5 font-bold text-[var(--text-first-color)] ${sintony.className} `}>
              {text}
            </h3>
          </div>
        </div>
        <div className='divShadow hidden lg:inline-block lg:absolute top-[27px] right-[17px] w-3/5 '>
          <div className='oppositeSectionClipPath h-[80px]  bg-[var(--main-color)]' />
        </div>
      </div>
    </Wrapper>
  );
};

export default SectionTitle;
