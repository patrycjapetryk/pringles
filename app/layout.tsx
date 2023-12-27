import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const bitte = localFont({ src: './bitte.woff2' });

export const metadata: Metadata = {
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
        className={`${bitte.className} bg-pringles-dark-red text-white flex min-h-screen items-center justify-center`}
      >
        {children}
      </body>
    </html>
  );
}
