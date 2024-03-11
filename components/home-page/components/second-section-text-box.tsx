import AppointmentButton from '@/components/UI/appointment-button';

import React from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

const SecondSectionTextBox = () => {
  return (
    <div className='divShadow absolute top-1/2 -translate-y-1/2  p-2 text-[var(--text-first-color)] max-w-full lg:ml-[5%]'>
      <div className='infoClipPath bg-black/60  px-4 py-4 lg:py-8 lg:px-10  flex flex-col gap-3'>
        <h3 className='text-xl xs:text-3xl lg:text-5xl font-bold'>
          Drodzy pacjenci
        </h3>
        <p className='text-lg xs:text-xl lg:text-3xl font-semibold max-w-[800px]'>
          Naszą misją jest aby przywracać uśmiech, zarówno przez estetyczne
          odbudowy zębów np. przy pomocy licówek jak i leczenie bólu z którym
          trafiają pacjenci do naszego gabinetu, a także zapobieganie
          powstawaniu chorób zębów i jamy ustnej prowadząc odpowiednią
          profilaktykę stomatologiczną. Zapraszamy na konsultacje do naszego
          gabinetu.
        </p>
        <div className=' text-lg xs:text-xl lg:text-2xl tracking-wider '>
          <div className='flex gap-2 justify-start items-center'>
            <BsFillTelephoneFill /> <p className='font-bold'>+48 321-123-332</p>
          </div>
          <div className='flex gap-2 justify-start items-center'>
            <MdEmail /> <p className='font-bold'>dentica@gmail.com</p>
          </div>
        </div>
        <div className='w-[200px] lg:w-[400px] mb-6'>
          <AppointmentButton style='xs:w-full xs:text-xl' />
        </div>
      </div>
    </div>
  );
};

export default SecondSectionTextBox;
