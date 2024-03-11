import BackgroundImage from '@/components/home-page/components/background-image';
import BottomBar from '@/components/home-page/components/bottom-bar';
import WelcomeText from '@/components/home-page/components/welcome-text';
import React from 'react';

const WelcomeSection = () => {
  return (
    <section className='relative w-full h-[100vh] top-0 lg:min-h-[919px]  left-0'>
      <BackgroundImage />
      <WelcomeText />
      <BottomBar />
    </section>
  );
};

export default WelcomeSection;
