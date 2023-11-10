import { cn } from '@/lib/utils';
import './globals.css';
import { Poppins, Arvo, Roboto } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['300', '700'],
});

const arvo = Arvo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-arvo',
  weight: ['400'],
});

const roboto = Roboto({
  subsets: ['latin'],
  display: 'fallback',
  variable: '--font-roboto',
  weight: ['400'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={cn(poppins.variable, arvo.variable, roboto.variable,'scroll-smooth')}
    >
      <body className='h-[200vh] font-normal'>
        {children}
      </body>
    </html>
  );
}
