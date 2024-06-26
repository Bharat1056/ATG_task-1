import { Inter, Poppins } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ weight: ['400', '700'], subsets: ['latin'] });

export const metadata = {
  title: 'NextJS Task 1',
  description: 'Internship project',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <title>ATG NextJS Task 1</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
