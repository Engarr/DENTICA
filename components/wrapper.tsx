import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

type WrapperType = {
  children: ReactNode;
  style?: string;
};

const Wrapper = ({ children, style }: WrapperType) => {
  return (
    <div
      className={cn(
        'flex justify-center items-center relative max-w-[1920px] w-full  left-1/2 -translate-x-1/2 h-full ',
        style
      )}>
      {children}
    </div>
  );
};

export default Wrapper;
