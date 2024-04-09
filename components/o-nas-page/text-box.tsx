import React from 'react';
import Image from 'next/image';
import officeImg from '@/public/office.jpg';
import { sintony } from '@/lib/fonts';
import Button from '../UI/button';

const TextBox = () => {
  return (
    <div className='flex flex-col lg:flex-row md:px-5  lg:my-20 h-full  max-lg:gap-6 '>
      <div className='max-w-[30rem] mx-5 lg:mx-20 text-[var(--text-second-color)] flex flex-col gap-2 lg:gap-6'>
        <h2 className={` text-xl lg:text-3xl font-bold ${sintony.className}`}>
          Drodzy pacjenci
        </h2>
        <p className=' text-base lg:text-lg'>
          Naszą misją jest aby przywracać uśmiech, zarówno przez estetyczne
          odbudowy zębów np. przy pomocy licówek jak i leczenie bólu z którym
          trafiają pacjenci do naszego gabinetu, a także zapobieganie
          powstawaniu chorób zębów i jamy ustnej prowadząc odpowiednią
          profilaktykę stomatologiczną. Zapraszamy na konsultacje do naszego
          gabinetu.
        </p>

        <Button
          style='text-[var(--text-second-color)] border-[var(--text-second-color)] max-w-[300px] '
          href='/kontakt'>
          Umów się na wizytę
        </Button>
      </div>
      <div>
        <div className=' max-lg:px-5 lg:max-w-[600px] shadowImage'>
          <Image
            alt=' '
            src={officeImg}
            width={1920}
            height={920}
            className='object-contain'
          />
        </div>
      </div>
    </div>
  );
};

export default TextBox;
