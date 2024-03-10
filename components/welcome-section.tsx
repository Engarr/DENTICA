import BackgroundImage from '@/app/components/background-image';
import BottomBar from '@/app/components/bottom-bar';
import WelcomeText from '@/app/components/welcome-text';
import React from 'react';

const WelcomeSection = () => {
  return (
    <>
      <BackgroundImage />
      <WelcomeText />
      <BottomBar />
    </>
  );
};

export default WelcomeSection;
