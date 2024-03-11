import React from 'react';
import Image from 'next/image';
import bg from '@/public/vecteezy_modern-dental-office-with-clean-bright-design-and-stainless_25482497.jpg';

const SecondSectionBg = () => {
  return (
    <div className=' w-full h-[100vh] lg:min-h-[100vh] top-0  absolute z-[-10]'>
      <div className='absolute top-0 left-0 w-full  bg-black z-[1] opacity-35 h-[100vh] ' />
      <Image
        alt='backgorund_image'
        src={bg}
        width={3067}
        height={1753}
        quality={80}
        className=' top-0 left-0 absolute h-full w-full  lg:min-h-[919px] object-cover'
      />
    </div>
  );
};

export default SecondSectionBg;
