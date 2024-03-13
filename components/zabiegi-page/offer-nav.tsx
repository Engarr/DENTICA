'use client';
import React from 'react';
import { offerNavData } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import tooth from '@/public/tooth.png';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utilis';

const OfferNav = () => {
  const url = usePathname();
  const parts = url.split('/');
  const lastPartEncoded = parts[parts.length - 1];
  const lastPart = decodeURIComponent(lastPartEncoded);

  return (
    <div className=' max-w-[20rem] w-full'>
      <ul className=' flex flex-col gap-2 '>
        {offerNavData.map((o, i) => (
          <div
            key={o.title}
            className={cn('border-b-2 duration-300 transition-all', {})}>
            <li
              className={cn(
                'flex items-center hover:text-[var(--main-color)] font-semibold',
                {
                  'text-[var(--main-color)] font-bold ':
                    lastPart === o.title.toLowerCase(),
                }
              )}>
              <div className='w-[80px]'>
                <Image
                  alt=''
                  src={tooth}
                  width={145}
                  height={138}
                  className='w-full h-full'
                />
              </div>
              <Link href={o.hash}>{o.title}</Link>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default OfferNav;
