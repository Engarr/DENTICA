'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utilis';
import Link from 'next/link';

type ButtonType = {
  style?: string;
  children: React.ReactNode;
  href: string;
};

const Button = ({ children, style, href }: ButtonType) => {
  return (
    <Link href={href}>
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
    </Link>
  );
};

export default Button;
