'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import BurgerMenuBtn from './UI/burger-menu-btn';
import { cn } from '../lib/utilis';
import { usePathname } from 'next/navigation';
import MobileMenu from './mobile-menu';
import { links } from '../lib/links';
import logo from '@/public/logo.png';
import { sintony } from '@/lib/fonts';

const Header = () => {
  const url = usePathname();
  const linkParts = url.split('/');
  const [hidden, setHidden] = useState(false);

  const [menuVisible, setMenuVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();
    if (previous) {
      if (latest > 50) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    }
  });

  const handleToggleMenu = () => {
    setMenuVisible((prev) => {
      !prev
        ? (document.body.style.overflow = 'hidden')
        : (document.body.style.overflow = 'auto');
      return !prev;
    });
  };
  const animation = 'transition-all duration-300';
  return (
    <>
      <motion.header
        className={`flex fixed sm:justify-center justify-between w-[100%] sm:h-[80px]  top-0  z-[9999] pointer-events-none ${sintony.className} `}
        variants={{
          visible: { y: 0 },
          hidden: { y: -200 },
        }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}>
        <motion.nav
          className=' max-w-[1920px] flex justify-between items-center py-2 w-full relative '
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          <div className=' w-full pointer-events-auto'>
            <Link href='/'>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.1 },
                }}
                className='flex items-center absolute left-[1%] top-[17px] '>
                <div
                  className={cn(
                    `custom:inline ml-[0.5rem] sm:ml-0 w-[4rem] lg:w-[90px] h-auto rounded-[17px] overflow-hidden z-[999] mr-2 ${animation}`,
                    { 'lg:w-[60px]': hidden }
                  )}>
                  {' '}
                  <Image
                    src={logo}
                    alt='logo'
                    width={345}
                    height={346}
                    priority
                  />
                </div>
                <div className='relative hidden lg:inline-block '>
                  <div
                    className={cn(
                      `relative hidden lg:flex h-[80px]  flex-col bg-slate-200/75 px-3 rounded-[2px] blur-[2px] w-[200px] ${animation}`,
                      { 'h-[45px] w-[100px]': hidden }
                    )}
                  />
                  <h1
                    className={cn(
                      `absolute top-0 p-3 flex flex-col  text-[var(--main-color)] text-2xl uppercase font-bold tracking-wider w-[200px] ${animation} `,
                      { 'text-base': hidden }
                    )}>
                    Dentica
                    <span
                      className={cn(
                        `text-xs tracking-tight inline-block transition delay-150 duration-300 ease-in-out opacity-1`,
                        {
                          'opacity-0 delay-0': hidden,
                        }
                      )}>
                      Gabinet stomatologiczny
                    </span>
                  </h1>
                </div>
              </motion.div>
            </Link>
          </div>
          <div className='divShadow absolute right-[1%] top-[17px] pointer-events-auto'>
            <div
              className={cn(
                `hidden lg:flex items-center  navClipPath bg-[var(--main-color)] h-[80px] w-[624px] xl:w-[824px] xl:h-[100px] text-center ${animation}`,
                { ' h-[60px] xl:h-[65px] navClipPath2 xl:w-[624px]': hidden }
              )}>
              <ul
                className={cn(
                  `flex items-start text-base xl:text-xl absolute w-4/5 justify-between left-1/2 -translate-x-1/2 ${animation}`,
                  { 'xl:text-base ': hidden }
                )}>
                {links.map((link, index) => {
                  const splitlink = link.path.split('/');

                  return (
                    <li
                      key={index}
                      className={cn(
                        `text-[var(--text-first-color)] hover:text-[var(--text-first-color-hover)] transition-colors text-center relative w-full group whitespace-nowrap  px-3`,
                        {}
                      )}>
                      <Link href={link.path} className='w-auto relative'>
                        {link.name}
                        <div
                          className={cn(
                            'absolute bottom-[-5px] h-[1px] w-[0%] bg-white left-1/2 -translate-x-1/2 group-hover:w-[110%] duration-300',
                            {
                              'w-[110%] opacity-75 h-[2px]':
                                linkParts[1] === splitlink[1],
                            }
                          )}
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <motion.div
            className='relative lg:hidden pr-2 py-4 mr-2 sm:pr-3 z-30 pointer-events-auto'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}>
            <div
              className={cn(
                'absolute lg:hidden bg-white  w-[50px] h-[50px] left-[-5px] top-0 z-[-10] pr-2 py-5 mt-3 mr-4 opacity-65 rounded-[17px] blur-[1px] transition-all duration-500 ',
                { 'bg-transparent': !hidden }
              )}
            />
            <BurgerMenuBtn
              isMenuVisible={menuVisible}
              onToggle={handleToggleMenu}
            />
          </motion.div>
        </motion.nav>
        <MobileMenu
          handleToggleMenu={handleToggleMenu}
          menuVisible={menuVisible}
        />
      </motion.header>
    </>
  );
};

export default Header;
