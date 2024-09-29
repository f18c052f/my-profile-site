import { dir } from 'i18next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/app/i18n/client';
import Header from './components/Header';
import styles from '@/assets/css/Header.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  return (
    <html lang={lang} dir={dir(lang)}>
      <body className={`${inter.className}`}>
        <main>
          <LanguageProvider initialLanguage={lang}>
            <Header />
            {children}
          </LanguageProvider>
        </main>
      </body>
    </html>
  );
}
