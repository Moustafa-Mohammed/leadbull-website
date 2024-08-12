import { Inter } from 'next/font/google';
import VideoBackground from '@/components/VideoBackground';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'LeadBull Website',
  description: 'A frontend evaluation task for LeadBull Company',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>
        <VideoBackground />
        {children}
      </body>
    </html>
  );
}
