import React from 'react';
import Wrapper from '../wrapper';
import Image from 'next/image';
import doctor from '@/public/doctor.png';
import Button from '../UI/button';
import ContactForm from './components/contact-form';
import { sintony } from '@/lib/fonts';

const ContactSection = () => {
  return (
    <section className='w-full relative h-full '>
      <Wrapper>
        <div className='divShadow relative top-0 w-full xl:w-[85%] 2xl:w-4/5 px-2 '>
          <div className=' mb-24 max-lg:mobileContactClipPath lg:contactClipPath '>
            <div className=' relative left-1/2 lg:left-[65%] -translate-x-1/2 py-10 px-4 xs:py-16 xs:px-4 w-full flex flex-col gap-3 lg:gap-5 text-[var(--text-first-color)] max-w-[45rem]  tracking-wide'>
              <h4
                className={`text-lg xs:text-xl md:text-2xl xl:text-3xl font-bold ${sintony.className}`}>
                Postaw na praktyczną wiedzę z Dentica
              </h4>
              <div className=''>
                <Button style='w-full md:w-auto ' href='/kontakt'>
                  Umów wizytę online
                </Button>
              </div>
              <p className='text-base xs:text-lg md:text-xl xl:text-2xl '>
                Chętnie odpowiemy na Twoje pytanie
              </p>
              <ContactForm />
            </div>
          </div>

          <div className='hidden lg:inline-block lg:absolute w-[550px] lg:w-[500px] lg:left-[-11%] lg:top-[22%] xl:top-[24%] 2xl:w-[600px] 2xl:left-[-10%] 2xl:top-[10%] '>
            <Image
              src={doctor}
              alt='zdjęcie lekarza'
              width={717}
              height={820}
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default ContactSection;
{
  /* <Wrapper>
<div className='divShadow absolute  top-0 w-full xl:w-[85%] 2xl:w-3/4 px-2 '>
  <div className='lg:contactClipPath w-full h-[709px] bg-[var(--main-color)] mb-[100px] relative '>
    {' '}
    <div className='absolute z-30 lg:top-1/2  lg:left-[60%] lg:-translate-x-1/2  lg:-translate-y-1/2 w-full p-3 lg:p-0'>
      <h4 className='text-xl 2xl:text-3xl text-[var(--text-first-color)] font-bold mb-5'>
        Postaw na praktyczną wiedzę z Dentica
      </h4>
      <Button style='text-md xs:text-base md:text-lg lg:text-xl w-full '>
        UMÓW WIZYTĘ ONLINE
      </Button>
      <p className='text-[var(--text-first-color)] my-6 text-lg font-semibold'>
        Chętnie odpowiemy na Twoje pytanie
      </p>
      <ContactForm />
    </div>
  </div>

  <div className='absolute w-[650px] xs:left-[-20%] xs:top-[3%] xl:left-[-20%] xl:top-[-4%]  xl:w-[700px] hidden '>
    <Image
      src={doctor}
      alt='zdjęcie lekarza'
      width={717}
      height={820}
    />
  </div>
</div>
</Wrapper> */
}
