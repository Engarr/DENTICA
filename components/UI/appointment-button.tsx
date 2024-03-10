'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AppointmentButton = () => {
  return (
    <motion.button
      className=' font-bold text-[var(--text-first-color)] border-2 px-[20px] py-[10px] text-sm xs:text-base md:text-lg lg:text-2xl rounded-sm'
      whileTap={{ scale: 0.95 }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.1 },
      }}>
      Umów wizytę online
    </motion.button>
  );
};

export default AppointmentButton;
