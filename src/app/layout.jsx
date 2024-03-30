import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/header/Navbar';
import Footer from '@/components/footer/footer';
import { ReduxProvider } from '@/redux/app/api/ReduxProvider';
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='container px-10 mt-5 '>
          <ReduxProvider>{children}</ReduxProvider>
        </div>
      </body>
      <Footer />
    </html>
  );
}
