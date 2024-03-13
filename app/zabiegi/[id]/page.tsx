'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import { DUMMY_DATA } from '@/lib/data';
import { poppins } from '@/lib/fonts';

const Page = () => {
  const url = usePathname();
  const parts = url.split('/');
  const lastPartEncoded = parts[parts.length - 1];
  const lastPart = decodeURIComponent(lastPartEncoded);

  const foundInfo = DUMMY_DATA.find(
    (item) => item.id.toLowerCase() === lastPart.toLowerCase()
  );

  return (
    <div className={`${poppins.className} `}>
      <h4 className='text-2xl my-2'>{foundInfo?.title}</h4>
      <div className='flex flex-col gap-4 text-xl'>
        {foundInfo?.desc.map((desc, i) => (
          <p key={i} className=''>
            {desc}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Page;
