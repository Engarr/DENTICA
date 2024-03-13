import type { Metadata } from 'next';
import { Big_Shoulders_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';

const poppins = Big_Shoulders_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-big-shoulders-display',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'DENTICA',
  description: 'Gabinet stomatologiczny',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className=''>
      <body className={`${poppins.className} `}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
