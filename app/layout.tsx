import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { GoogleTagManager } from '@next/third-parties/google';

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
        className={`${bitte.className} min-h-screen min-w-[320px] bg-pringles-red bg-hero-texture-mobile bg-100% bg-top-mobile bg-no-repeat text-white lg:bg-hero-texture lg:bg-top-desktop`}
      >
        <Header />
        {children}
      </body>
      <GoogleTagManager gtmId="AW-11467556284" />
    </html>
  );
}
