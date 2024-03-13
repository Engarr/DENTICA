import AboutUsSection from '@/components/home-page/about-us-section';
import ContactSection from '@/components/home-page/contact-section';
import OurOffertSection from '@/components/home-page/our-offert-section';
import SecondSection from '@/components/home-page/second-section';
import WelcomeSection from '@/components/home-page/welcome-section';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between  '>
      <WelcomeSection />
      <SecondSection />
      <OurOffertSection />
      <AboutUsSection />
      <ContactSection />
    </main>
  );
}
