'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import { DUMMY_DATA } from '@/lib/data';
import { poppins } from '@/lib/fonts';
import Image from 'next/image';
import Button from '@/components/UI/button';

const Page = () => {
  const url = usePathname();
  const parts = url.split('/');
  const lastPartEncoded = parts[parts.length - 1];
  const lastPart = decodeURIComponent(lastPartEncoded);

  const foundInfo = DUMMY_DATA.find(
    (item) => item.id.toLowerCase() === lastPart.toLowerCase()
  );

  return (
    <div className={`${poppins.className} w-full px-5 lg:px-10 lg:dmb-[100px]`}>
      <div className='divShadow py-5 lg:pb-10'>
        <div className='text-base md:text-xl lg:text-2xl 2xl:text-3xl my-2 w-full sectionClipPath h-[60px] lg:h-[80px] bg-[var(--main-color)] text-[var(--text-first-color)] relative'>
          <h4 className='top-1/2 -translate-y-1/2 relative px-2 lg:px-5'>
            {foundInfo?.title}
          </h4>
        </div>
      </div>
      <div className='flex flex-col gap-2 lg:ap-4 text-base lg:text-lg xl:text-xl max-w-[50rem] px-2 lg:px-5'>
        {foundInfo?.desc.map((desc, i) => (
          <div key={i} className='mb-1'>
            <p>
              <span className='font-semibold'>{desc?.split(' ')[0]}</span>{' '}
              {desc?.substring(desc?.indexOf(' ') + 1)}
            </p>
          </div>
        ))}
        <Button
          style='text-[var(--text-second-color)] my-5 border-[var(--main-color-80)]'
          href='/kontakt'>
          Umów wizytę Online
        </Button>
        {foundInfo?.ul && (
          <div className='flex flex-col gap-2'>
            <p className='mb-2 font-semibold text-lg lg:text-xl'>
              {foundInfo.ul.title}
            </p>
            <ul className='flex flex-col gap-2'>
              {foundInfo.ul.li.map((li, i) => (
                <div key={i} className='flex'>
                  <div className='min-w-[8px] min-h-[8px] max-h-[8px] rounded-full bg-[var(--main-color-80)] mt-2 mr-2' />
                  <li>{li}</li>
                </div>
              ))}
            </ul>
          </div>
        )}
        {foundInfo?.img && (
          <div className='w-auto  my-2 md:my-5 lg:mt-10 shadowImage h-[300px] lg:h-[500px] relative'>
            <Image
              alt=' '
              src={foundInfo?.img}
              fill
              quality={80}
              loading='lazy'
              className='object-contain absolute left-0 top-0 object-center lg:object-left'
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
