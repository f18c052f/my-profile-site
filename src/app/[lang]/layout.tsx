import { dir } from 'i18next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/app/i18n/client';
import Header from './components/Header';
import { ThemeProvider } from './components/provider/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  return (
    <html lang={lang} dir={dir(lang)} suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <main>
          <LanguageProvider initialLanguage={lang}>
            <ThemeProvider>
              <Header />
              {children}
            </ThemeProvider>
          </LanguageProvider>
        </main>
      </body>
    </html>
  );
}
