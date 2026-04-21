import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ClickAPP – Web, App & Social Media',
  description: 'Web sajtovi, aplikacije i društvene mreže — sve što vašem biznisu treba da dominira online prostoru.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
