import React from 'react';
import Wrapper from '@/components/wrapper';

type SectionTitleType = {
  text: string;
};
const SectionTitle = ({ text }: SectionTitleType) => {
  return (
    <Wrapper style=''>
      <div>
        <div className='divShadow absolute top-[17px] left-[5%] lg:left-[17px] w-[92%] lg:w-2/5'>
          <div className='sectionClipPath  h-[60px] lg:h-[80px] bg-[var(--main-color)] '>
            <h3 className=' relative top-1/2 -translate-y-1/2 text-2xl lg:text-3xl px-5 font-bold text-[var(--text-first-color)]'>
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
