import { dir } from 'i18next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/app/i18n/client';
import { ThemeProvider } from './context/ThemeProvider';
import { HamburgerMenu } from './components/HamburgerMenu/HamburgerMenu';

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
      <body>
        <main>
          <LanguageProvider initialLanguage={lang}>
            <ThemeProvider>
              <HamburgerMenu />
              {children}
            </ThemeProvider>
          </LanguageProvider>
        </main>
      </body>
    </html>
  );
}
