'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import BurgerMenuBtn from './UI/burger-menu-btn';
import { cn } from './lib/utilis';
import { usePathname } from 'next/navigation';
import MobileMenu from './mobile-menu';
import { links } from './lib/links';
import logo from '@/public/logo.png';

const Header = () => {
  const url = usePathname();
  const [menuVisible, setMenuVisible] = useState(false);

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
        className='flex sticky sm:justify-center justify-between w-[100%] sm:h-[80px] z-10 top-0  '
        variants={{
          visible: { y: 0 },
          hidden: { y: -200 },
        }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}>
        <motion.nav
          className=' max-w-[1920px] flex justify-between items-center py-2 w-[100vw] relative'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          <div className=' w-full '>
            <Link href='/'>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.1 },
                }}
                className='flex items-center absolute left-[1%] top-[17px]'>
                <div className='custom:inline ml-[1rem] sm:ml-0 w-[4rem] sm:w-[90px] h-auto rounded-[17px] overflow-hidden z-[999]'>
                  {' '}
                  <Image
                    src={logo}
                    alt='logo'
                    width={345}
                    height={346}
                    priority
                  />
                </div>
                <p className='hidden lg:inline-block pl-[0rem] sm:pl-[1rem] text-[var(--main-color)] text-4xl uppercase font-bold tracking-wider'>
                  Dentica
                  <span className='hidden custom:inline'>Fotograf</span>
                </p>
              </motion.div>
            </Link>
          </div>
          <div className='divShadow absolute right-[1%] top-[17px]'>
            <div className='hidden lg:flex items-center  navClipPath bg-[var(--main-color)] h-[80px] w-[624px]  xl:w-[824px] xl:h-[100px] text-center divShadow'>
              <ul className='flex  items-center text-2xl absolute w-3/4 justify-between left-1/2 -translate-x-1/2 tracking-wider '>
                {links.map((link, index) => (
                  <li
                    key={index}
                    className={cn(
                      `lg:text-md text-[var(--text-first-color)] hover:text-[var(--text-first-color-hover)] transition-colors text-center relative w-full group`,
                      {
                        'text-main-color': url === link.path,
                      }
                    )}>
                    <Link href={link.path} className='w-auto relative'>
                      {link.name}
                      <div className='absolute bottom-[-5px] h-[1px] w-[0%] bg-white left-1/2 -translate-x-1/2 group-hover:w-[110%] duration-300'></div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <motion.div
            className='relative lg:hidden pr-2 py-4 mr-2 sm:pr-3 z-30 '
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}>
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
