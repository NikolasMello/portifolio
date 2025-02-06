import Footer from './components/footer';
import Header from './components/header';
import { Metadata } from 'next';
import './globals.css';
import { Nunito } from 'next/font/google';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nikolas Mello Web Developer',
  description: 'Home Page',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-br'>
      <body className={nunito.className} suppressHydrationWarning={true}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
