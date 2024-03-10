import AppointmentButton from '@/components/UI/appointment-button';
import Wrapper from '@/components/wrapper';
import React from 'react';

const BottomBar = () => {
  return (
    <Wrapper style=' absolute bottom-0 z-20 bg-red-200'>
      <div className='divShadow absolute right-[1%] bottom-[5px] lg:bottom-[17px] w-[95%] md:w-auto'>
        <div className='navClipPath bg-[var(--main-color)] w-full h-[80px] lg:h-[80px] md:w-[624px]  xl:w-[824px] xl:h-[100px]'>
          <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
            <AppointmentButton />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default BottomBar;
