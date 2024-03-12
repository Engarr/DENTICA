import OurOffertSection from '@/components/home-page/our-offert-section';
import SecondSection from '@/components/home-page/second-section';
import WelcomeSection from '@/components/home-page/welcome-section';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between  '>
      <WelcomeSection />
      <SecondSection />
      <OurOffertSection />
    </main>
  );
}
