import React from 'react';
import stomatologist from '@/public/stomatologist.jpg';
import assistant from '@/public/assistant.jpg';
import Image from 'next/image';

const personelData = [
  {
    name: 'Maciej Bąk',
    status: 'lek.den.',
    desc: 'Jestem doświadczonym dentystą, który stawia na indywidualne podejście do pacjenta, oferując kompleksową opiekę stomatologiczną oraz nowoczesne metody leczenia.',
    img: stomatologist,
  },
  {
    name: 'Elżbieta Kątek',
    status: 'Higienistka stomatologiczna',
    desc: 'Jako asystentka lekarza dentysty, moim głównym celem jest zapewnienie komfortu pacjentom oraz sprawnego funkcjonowania gabinetu, dbając o każdy szczegół podczas wizyty.',
    img: assistant,
  },
];

const PersonelBox = () => {
  return (
    <div className=' my-[120px] lg:my-[150px] w-full flex flex-col gap-2 px-5 md:px-10 overflow-hidden   relative  '>
      {personelData.map((person, index) => (
        <div
          className=' flex flex-col lg:re  gap-4 xs:gap-10 mb-5 lg:mb-10  max-w-[1100px] left-1/2 relative -translate-x-1/2 '
          key={index}>
          <div className=' w-full shadowImage'>
            <Image
              alt='person_img'
              src={person.img}
              className=' object-contain'
              width={650}
              height={690}
            />
          </div>

          <div className=' text-[var(--text-second-color)]  flex flex-col gap-2 w-full max-w-[30rem]'>
            <p className='text-lg xs:text-xl md:text-2xl font-bold '>
              {person.name}
            </p>
            <p className=' text-sm md:text-xl italic'>
              <span className='text-[var(--main-color)] font-semibold'>- </span>
              {person.status}
              <span className='text-[var(--main-color)] font-semibold'> -</span>
            </p>
            <p className='text-sm xs:text-base md:text-xl '>{person.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PersonelBox;
