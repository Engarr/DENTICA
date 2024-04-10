import React from 'react';
import ContactForm from '@/components/home-page/components/contact-form';
import SectionTitle from '@/components/home-page/components/section-title';
import Wrapper from '@/components/wrapper';
import { sintony } from '@/lib/fonts';
import { FaPhone } from 'react-icons/fa6';
import { MdAlternateEmail } from 'react-icons/md';

const KontaktPage = () => {
  return (
    <section className='mt-[100px] lg:my-[150px]'>
      <div className=''>
        <SectionTitle text='Kontakt' />
      </div>
      <Wrapper style='h-auto mt-[100px] lg:mt-[200px]  flex-col'>
        <div className='flex flex-col items-center justify-center gap-6 mb-10 w-full bg-cyan-20 '>
          <p className={`${sintony.className} text-3xl`}>
            Zadzwoń lub napisz i umów wizytę
          </p>
          <div className=' text-xl flex justify-between  w-full max-w-[600px]'>
            <div className='flex items-center gap-2'>
              <FaPhone className='text-[var(--main-color)]' />
              <p className='font-semibold'>+48 321 123 332</p>
            </div>
            <div className='flex items-center gap-2'>
              <MdAlternateEmail className='text-[var(--main-color)]' />
              <p className='font-semibold'>dentica@gmail.com</p>
            </div>
          </div>
          <p>Jesteśmy pod telefonem: Pn - Pt: od 9:00 do 21:00</p>
        </div>
        <div className='bg-[var(--main-color)] p-10 divShadow gradient'>
          <p className='text-3xl mb-4 text-[var(--text-first-color)]'>
            Napisz do nas
          </p>
          <ContactForm />
        </div>
      </Wrapper>
    </section>
  );
};

export default KontaktPage;
