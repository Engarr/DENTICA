import React from 'react';
import SectionTitle from './components/section-title';
import OffertsBox from './components/offerts-box';

const OurOffertSection = () => {
  return (
    <section className='w-full '>
      <SectionTitle text='Nasza oferta' />
      <OffertsBox />
    </section>
  );
};

export default OurOffertSection;
