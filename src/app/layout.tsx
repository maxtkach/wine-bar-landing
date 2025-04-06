import './globals.css';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        url: '/og-image.jpg',
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
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
  manifest: '/site.webmanifest',
  themeColor: '#0a0506',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
