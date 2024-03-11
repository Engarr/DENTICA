import React from 'react';
import TextBar from './components/text-bar';
import SecondSectionBg from './components/second-section-bg';
import SecondSectionTextBox from './components/second-section-text-box';

const SecondSection = () => {
  return (
    <section
      id='second-section'
      className=' relative w-full h-[100vh] lg:min-h-[919px] overflow-x-hidden'>
      <TextBar direction='left' />
      <div>
        <SecondSectionBg />
      </div>
      <SecondSectionTextBox />
      <div className='absolute bottom-0'>
        <TextBar direction='right' />
      </div>
    </section>
  );
};

export default SecondSection;
