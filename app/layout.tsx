import type { Metadata } from 'next';
import localFont from 'next/font/local';

import Header from '@/components/Header';
import './globals.css';

const bitte = localFont({ src: './bitte.woff2' });

export const metadata: Metadata = {
  metadataBase: new URL('https://pringles-lovat.vercel.app'),
  title: 'Zimowa zabawa z Pringles',
  description:
    'Odkryj zimową zabawę z Pringles. Czas trwania akcji: od 09.01 do 31.01.2024',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body
        className={`${bitte.className} min-h-screen min-w-[320px] bg-pringles-red bg-hero-texture-mobile bg-100% bg-top-1 bg-no-repeat text-white lg:bg-hero-texture xl:bg-top-2`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
