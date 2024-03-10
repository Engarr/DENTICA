import BackgroundImage from '@/app/components/background-image';
import BottomBar from '@/app/components/bottom-bar';
import WelcomeText from '@/app/components/welcome-text';
import React from 'react';

const WelcomeSection = () => {
  return (
    <section className='h-full w-full '>
      <BackgroundImage />

      <WelcomeText />
      <BottomBar />
    </section>
  );
};

export default WelcomeSection;
