'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utilis';

type ButtonType = {
  style?: string;
  children: React.ReactNode;
};

const Button = ({ children, style }: ButtonType) => {
  return (
    <motion.button
      className={cn(
        ' font-bold text-[var(--text-first-color)] border-2 px-[20px] py-[10px] text-sm xs:text-base md:text-lg lg:text-2xl rounded-sm',
        style
      )}
      whileTap={{ scale: 0.95 }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.1 },
      }}>
      {children}
    </motion.button>
  );
};

export default Button;
