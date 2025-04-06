import './globals.css';
import type { Metadata } from 'next';
import { Inter, Roboto_Mono } from "next/font/google";

const geist = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-geist',
});

const geistMono = Roboto_Mono({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  title: 'Wine·Verse | Винный бар в Москве',
  description: 'Wine·Verse — уникальное пространство, где современная элегантность встречается с вековыми традициями виноделия. Изысканная коллекция вин, атмосфера роскоши и профессиональный сервис.',
  keywords: 'винный бар, вино, Москва, Wine Verse, дегустация, коллекция вин, бронирование столика',
  openGraph: {
    title: 'Wine·Verse | Винный бар в Москве',
    description: 'Изысканная коллекция вин, атмосфера роскоши и профессиональный сервис',
    url: 'https://wineverse.ru',
    siteName: 'Wine·Verse',
    images: [
      {
        url: '/wine-bar-landing/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Wine·Verse - Винный бар в Москве',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wine·Verse | Винный бар в Москве',
    description: 'Изысканная коллекция вин, атмосфера роскоши и профессиональный сервис',
    images: ['/wine-bar-landing/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/wine-bar-landing/favicon.ico' },
      { url: '/wine-bar-landing/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/wine-bar-landing/apple-touch-icon.png' },
    ],
  },
  manifest: '/wine-bar-landing/site.webmanifest',
  themeColor: '#0a0506',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  metadataBase: new URL('https://maxtkach.github.io/wine-bar-landing'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={`${geist.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
