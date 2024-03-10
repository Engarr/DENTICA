import BackgroundImage from './components/background-image';
import WelcomeText from './components/welcome-text';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between  h-[1000px] '>
      <BackgroundImage />
      <WelcomeText />
    </main>
  );
}
