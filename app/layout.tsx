import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'The Pantry — Mobile Zero-Waste Grocery',
  description:
    'Refill. Reuse. Repeat. The Pantry is your local zero-waste grocery van with refillable staples and eco products.',
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: 'The Pantry — Mobile Zero-Waste Grocery',
    description:
      'Refill. Reuse. Repeat. The Pantry is your local zero-waste grocery van with refillable staples and eco products.',
    type: 'website'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen">
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

