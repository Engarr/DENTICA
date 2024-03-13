import React from 'react';
import { linksMobile } from '../lib/links';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

type MobileMenuProps = {
  handleToggleMenu: () => void;
  menuVisible: boolean;
};

const MobileMenu = ({ handleToggleMenu, menuVisible }: MobileMenuProps) => {
  const handleCloseMenu = () => {
    handleToggleMenu();
    document.body.style.overflow = 'auto';
  };

  return (
    <nav className='absolute lg:hidden overflow-hidden z-[20] '>
      <AnimatePresence>
        {menuVisible && (
          <motion.div
            className='  bg-[var(--background-main-color)] bg-opacity-20 w-screen h-screen'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseMenu}>
            <motion.div
              className='absolute bg-[var(--background-main-color)] h-screen w-[100%] left-0 z-[20]'
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              onClick={(event) => {
                event.stopPropagation();
              }}>
              <ul className='flex flex-col items-center justify-center gap-5 text-[var(--main-color)] text-3xl p-10 mt-20 '>
                {linksMobile.map((link) => (
                  <li key={link.hash}>
                    <Link href={link.hash} onClick={handleCloseMenu}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              {/* <div className='flex justify-center'>Logo firmy</div> */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MobileMenu;
