import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookSquare } from 'react-icons/fa';
import logo from '@/public/logo.png';

const sectionTwoData = [
  {
    title: 'Przejdź do:',
    links: [
      { text: 'Zabiegi', link: '/zabiegi' },
      {
        text: 'Metamorfozy',
        link: '/metamorfozy',
      },
      {
        text: 'Metamorfozy',
        link: '/uslugi/logo',
      },
      {
        text: 'O nas',
        link: '/o-nas',
      },
      {
        text: 'Cennik',
        link: '/cennik',
      },
      {
        text: 'Kontakt',
        link: '/kontakt',
      },
    ],
  },
];

const sectionThreeData = [
  {
    title: 'Dane kontaktowe:',
    text: [
      'Opolska 12a',
      '45-573 Wrocław',
      'E-mail: dentica@gmail.com',
      'Telefon: +48 321-123-332',
    ],
  },
];

const Footer = () => {
  return (
    <footer className='max-lg:footerMobileClipPath lg:footerClipPath   py-5 lg:py-10 z-50 min-h-[250px]   bg-[var(--main-color-80)] text-[var(--text-first-color)]'>
      <div className='w-3/4 flex justify-center items-center text-center lg:text-start flex-col xl:flex-row gap-4 lg:gap-1 container left-1/2 relative -translate-x-1/2'>
        <div className=' max-w-[20rem] items-center xl:items-start flex flex-col mb-2 xl:mb-0 '>
          <Link href='/'>
            <Image
              src={logo}
              alt='logo'
              width={100}
              height={100}
              sizes='100vh'
              className='mb-2 rounded-[17px]'
              loading='lazy'
            />
          </Link>
          <p className='text-lg'>
            Nowoczesna stomatologia w leczeniu bólu zębów oraz poprawy
            estetycznego ich wyglądu.
          </p>
          <Link
            href='/polityka-prywatnosci'
            className='text-xs lg:text-md  hover:text-blue-200 duration-150
              mt-1'>
            Polityka prywatności
          </Link>
        </div>

        <div className=' flex gap-3 lg:gap-0 flex-col md:flex-row justify-around w-full max-w-[40rem]'>
          <div className='w-full lg:ml-10'>
            {sectionTwoData.map((section, index) => (
              <NavSection key={index} data={section} />
            ))}
          </div>

          <div className='w-full '>
            {sectionThreeData.map((section, index) => (
              <Section key={index} data={section} />
            ))}

            {/* <a
              href='https://www.facebook.com/profile.php?id=61556577959946'
              className='flex gap-2 items-center justify-center lg:justify-start text-xs lg:text-base w-full  text-center hover:text-blue-400 duration-150'
              target='_blank'
              rel='noopener noreferrer'>
              <p>Znajdziesz nas również na facebooku</p>
              <FaFacebookSquare className=' text-blue-500 text-[20px]' />
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

type SectionType = {
  data: { title: string; text: string[] };
};
type NavSectionType = {
  data: { title: string; links: { text: string; link: string }[] };
};

const Section = ({ data }: SectionType) => {
  return (
    <div className='flex-1'>
      <div className='text-xl lg:text-2xl mb-1 font-semibold'>
        <p>{data.title}</p>
      </div>
      <ul className='text-lg lg:text-xl'>
        {data.text.map((item, i) => (
          <li key={i} className='flex items-center gap-2'>
            <div className='w-[2px] h-[2px] bg-[var(--text-first-color)]' />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
const NavSection = ({ data }: NavSectionType) => {
  return (
    <div className='flex-1'>
      <div className='text-xl lg:text-2xl mb-1 font-semibold '>
        <p>{data.title}</p>
      </div>
      <ul className='flex flex-col lg:gap-[1px] gap-1 items-center lg:items-start text-lg lg:text-xl '>
        {data.links.map((item, i) => (
          <li
            key={i}
            className='flex items-center justify-start hover:text-main-color duration-150 group relative '>
            <div className='w-[1px] h-[2px] bg-white mr-2 rounded-full group-hover:w-[100%] duration-500 transition-all bottom-[-2%] absolute left-0 hidden lg:inline-block' />
            <Link href={item.link}> {item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
