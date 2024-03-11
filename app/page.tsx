import SecondSection from '@/components/home-page/second-section';
import WelcomeSection from '@/components/home-page/welcome-section';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between  '>
      <WelcomeSection />
      <SecondSection />
    </main>
  );
}
