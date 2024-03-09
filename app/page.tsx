import Image from 'next/image';
import bg from '@/public/bg.jpg';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between  h-[1000px] '>
      <div className='absolute top-0 left-0 w-full h-full overflow-x-hidden'>
        <div className='relative top-0 left-[-25%] sm:left-0 w-full h-[100vh] min-w-[180vh] lg:min-w-[200vh]  bg-cyan-200'>
          <Image
            alt=''
            src={bg}
            width={5955}
            height={2881}
            className=' top-0 left-0 absolute h-full w-full'
          />
        </div>
      </div>
    </main>
  );
}
