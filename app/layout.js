import { Roboto_Flex } from 'next/font/google';
import VideoBackground from '@/components/VideoBackground';

import './globals.css';

const roboto = Roboto_Flex({ subsets: ['latin'] });

export const metadata = {
  title: 'LeadBull Website',
  description: 'A frontend evaluation task for LeadBull Company',
  icons: {
    icon: '/logo.svg', // or '/favicon.svg' for SVG
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-black`}>
        <VideoBackground />
        {children}
      </body>
    </html>
  );
}
