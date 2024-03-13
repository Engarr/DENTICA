import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { poppins } from '@/lib/fonts';

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
