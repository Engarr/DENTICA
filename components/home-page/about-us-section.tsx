import React from 'react';
import SectionTitle from './components/section-title';
import Wrapper from '../wrapper';
import Image from 'next/image';
import image from '@/public/portrait-smiling-caucasian-man-dentist-posing-modern-dental-office.jpg';
import Button from '../UI/button';

const AboutUsSection = () => {
  return (
    <section className='w-full'>
      <SectionTitle text='Poznaj nas' />
      <Wrapper style=''>
        <div className=' relative flex flex-col lg:flex-row justify-around gap-6 lg:gap-20 items-center md:items-start px-4 xs:px-5 md:px-10 2xl:px-0  py-20 mt-[40px] lg:mt-[200px]'>
          <div className='flex flex-col gap-2 xs:gap-4 lg:gap-5 flex-wrap text-[var(--text-second-color)]'>
            <h4 className='text-base xs:text-lg lg:text-3xl font-semibold'>
              Wyposażenie gabinetu
            </h4>
            <p className=' text-sm xs:text-base lg:text-2xl lg:max-w-[600px] tracking-wide'>
              Nasz nowoczesny sprzęt dentystyczny pozwala na dostarczanie
              najwyższej jakości usług. Leczenie staje się komfortowe,
              bezpieczne i bardzo dokładne.
            </p>
            <ul className='flex flex-col gap-2 text-sm s:text-base  lg:text-xl '>
              <li className='flex items-center gap-2 font-semibold'>
                <div className='w-[10px] h-[2px] bg-[var(--main-color)] relative' />
                Cyfrowy rentgen
              </li>
              <li className='flex items-center gap-2  font-semibold'>
                <div className='w-[10px] h-[2px] bg-[var(--main-color)] relative' />
                Lampa wybielająca
              </li>
              <li className='flex items-center gap-2  font-semibold'>
                <div className='w-[10px] h-[2px] bg-[var(--main-color)] relative' />
                Nowoczesny unit stomatologiczny
              </li>
              <li className='flex items-center gap-2 font-semibold'>
                <div className='w-[10px] h-[2px] bg-[var(--main-color)] relative' />
                RTG z Radiowizjografią
              </li>
            </ul>
            <div className='xl:w-[300px]'>
              <Button style='text-[var(--main-color)] text-lg xs:text-lg md:text-lg lg:text-2xl w-full border-[var(--main-color)]'>
                Więcej o nas
              </Button>
            </div>
          </div>
          <div className=' h-full relative right-0 z-[-10] w-full lg:w-[700px] shadow-2xl shadowImage'>
            <Image
              alt=''
              src={image}
              width={1920}
              height={1280}
              loading='lazy'
              quality={80}
              className='w-full right-0  relative'
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default AboutUsSection;
