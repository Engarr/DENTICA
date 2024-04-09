import Button from '@/components/UI/button';
import SectionTitle from '@/components/home-page/components/section-title';
import Wrapper from '@/components/wrapper';
import { priceData } from '@/lib/data';
import { sintony } from '@/lib/fonts';
import React from 'react';

const CennikPage = () => {
  return (
    <section className='mt-[100px] lg:my-[150px]'>
      <div>
        <SectionTitle text='Cennik' />
      </div>
      <Wrapper style='h-auto mt-[100px] lg:mt-[150px] flex-col'>
        <div className='flex flex-col relative w-full px-3 py-2 xs:px-5 xs:py-3 lg:px-[15rem] lg:py-[5rem] text-[var(--text-second-color)] left-1/2 -translate-x-1/2 '>
          {priceData.map((el, i) => (
            <div
              key={i}
              className=' flex flex-col gap-4 lg:gap-6 lg:max-w-[40rem] w-full mb-10'>
              <p
                className={`text-lg xs:text-xl lg:text-3xl font-extrabold italic tracking-wider ${sintony.className}  `}>
                {el.title}
              </p>
              <ul
                className={`flex flex-col gap-1 lg:gap-2 text-sm lg:text-base  px-2 lg:px-10`}>
                {el.treatments.map((t, i) => (
                  <li
                    key={i}
                    className='py-1 w-full flex flex-col justify-between '>
                    <div className='flex justify-between items-end'>
                      <p className=' w-4/5'>{t.title} </p>
                      <p className='font-semibold '>{t.price} zł</p>
                    </div>
                    <div className='w-full border-b-sky-200/35 border-b-2 py-1' />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Button
          href='/kontakt'
          style='text-[var(--text-second-color)] my-5  w-full max-w-[400px] border-[var(--main-color-80)]'>
          Umów Wizytę Online
        </Button>
      </Wrapper>
    </section>
  );
};

export default CennikPage;
