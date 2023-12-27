import type { Metadata } from 'next';
import localFont from 'next/font/local';

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
        className={`${bitte.className} flex min-h-screen items-center justify-center bg-pringles-dark-red text-white`}
      >
        {children}
      </body>
    </html>
  );
}
