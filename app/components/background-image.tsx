import React from 'react';
import Image from 'next/image';
import bg from '@/public/bg.jpg';

const BackgroundImage = () => {
  return (
    <div className='absolute top-0 left-0 w-full h-full overflow-x-hidden'>
      <div className='relative top-0 left-[-25%] sm:left-0 w-full h-[100vh] min-w-[180vh] lg:min-w-[300vh'>
        <Image
          alt=''
          src={bg}
          width={5955}
          height={2881}
          priority
          quality={80}
          className=' top-0 left-0 absolute h-full w-full'
        />
      </div>
    </div>
  );
};

export default BackgroundImage;
