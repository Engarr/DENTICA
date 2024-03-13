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

const Header = () => {
  const url = usePathname();
  const linkParts = url.split('/');
  const [hidden, setHidden] = useState(false);

  const [menuVisible, setMenuVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();
    if (previous) {
      if (latest > 100) {
        setHidden(false);
      } else {
        setHidden(true);
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

  return (
    <>
      <motion.header
        className='flex fixed sm:justify-center justify-between w-[100%] sm:h-[80px]  top-0  z-[9999] pointer-events-none'
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
                <div className='custom:inline ml-[0.5rem] sm:ml-0 w-[4rem] lg:w-[90px] h-auto rounded-[17px] overflow-hidden z-[999] mr-2 '>
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
                  <div className='relative hidden lg:flex h-[80px]   flex-col bg-slate-200/75 px-3 rounded-[2px] blur-[2px] w-[200px]' />
                  <h1 className='absolute top-0 p-3 flex flex-col  text-[var(--main-color)] text-2xl uppercase font-bold tracking-wider w-[200px]  '>
                    Dentica
                    <span className='text-xs tracking-tight'>
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
                'hidden lg:flex items-center  navClipPath bg-[var(--main-color)] h-[80px] w-[624px] xl:w-[824px] xl:h-[100px] text-center ',
                {}
              )}>
              <ul className='flex items-start text-base xl:text-xl absolute w-3/4 justify-between left-1/2 -translate-x-1/2  '>
                {links.map((link, index) => {
                  const splitlink = link.path.split('/');

                  return (
                    <li
                      key={index}
                      className={cn(
                        `text-[var(--text-first-color)] hover:text-[var(--text-first-color-hover)] transition-colors text-center relative w-full group px-2`,
                        {}
                      )}>
                      <Link href={link.path} className='w-auto relative'>
                        {link.name}
                        <div
                          className={cn(
                            'absolute bottom-[-5px] h-[1px] w-[0%] bg-white left-1/2 -translate-x-1/2 group-hover:w-[110%] duration-300',
                            {
                              'w-[110%] opacity-75':
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
                { 'bg-transparent': hidden }
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
