import SectionTitle from '@/components/home-page/components/section-title';
import PersonelBox from '@/components/o-nas-page/personel-box';
import TextBox from '@/components/o-nas-page/text-box';
import Wrapper from '@/components/wrapper';

import React from 'react';

const Page = () => {
  return (
    <section className=' mt-[100px] lg:mt-[150px] '>
      <div>
        <SectionTitle text='O nas' />
      </div>

      <Wrapper style='h-auto mt-[100px] lg:mt-[150px]'>
        <TextBox />
      </Wrapper>
      <div>
        <SectionTitle text='Nasz zespół' />
      </div>
      <Wrapper style=''>
        <PersonelBox />
      </Wrapper>
    </section>
  );
};

export default Page;
