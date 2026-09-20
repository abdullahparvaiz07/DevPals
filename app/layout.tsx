import type {Metadata, Viewport} from 'next';
import {Plus_Jakarta_Sans} from 'next/font/google';
import './globals.css';
import Preloader from '@/components/Preloader';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
  preload: true,
});

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'DevPals - Turning Ideas Into Digital Products',
  description:
    'DevPals is a software company that designs and builds websites, apps, and digital solutions for forward-thinking brands.',
  openGraph: {
    title: 'DevPals - Turning Ideas Into Digital Products',
    description:
      'DevPals is a software company that designs and builds websites, apps, and digital solutions for forward-thinking brands.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevPals - Turning Ideas Into Digital Products',
    description:
      'DevPals is a software company that designs and builds websites, apps, and digital solutions for forward-thinking brands.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className="font-sans antialiased bg-[#FAFAFA] text-neutral-900 selection:bg-orange-100 selection:text-orange-900" suppressHydrationWarning>
        <Preloader />
        {children}
      </body>
    </html>
  );
}

