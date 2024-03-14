import Wrapper from '@/components/wrapper';
import OfferNav from '@/components/zabiegi-page/offer-nav';

import React from 'react';

export default async function GymLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className='mt-[50px] lg:mt-[150px] '>
      <Wrapper style='mt-[100px]'>
        <div className='flex justify-start w-full flex-col lg:flex-row'>
          <OfferNav />

          <div className=' '>{children}</div>
        </div>
      </Wrapper>
    </section>
  );
}
