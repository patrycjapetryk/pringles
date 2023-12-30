import type { Metadata } from 'next';
import localFont from 'next/font/local';

import Header from '@/components/Header';
import './globals.css';

const bitte = localFont({ src: './bitte.woff2' });

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Pringles',
  description: '...',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body
        className={`${bitte.className} bg-hero-texture-mobile lg:bg-hero-texture bg-top-1 xl:bg-top-2 bg-100% min-h-screen min-w-[320px] bg-pringles-red bg-no-repeat text-white`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
