import Wrapper from '@/components/wrapper';
import OfferNav from '@/components/zabiegi-page/offer-nav';

import React from 'react';

export default async function GymLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className='my-[150px] '>
      <Wrapper style=''>
        <div className='flex justify-start w-full px-20'>
          <OfferNav />

          <div className='w-3/5 px-20'>{children}</div>
        </div>
      </Wrapper>
    </section>
  );
}
