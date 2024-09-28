import { LanguageProvider } from '@/app/i18n/client';
import ClientComponent from './_components';

export default async function Home({ params }: { params: { lang: string } }) {
  const lang = params.lang;

  return (
    <main>
      <div className="m-5">
        <LanguageProvider initialLanguage={lang}>
          <ClientComponent />
        </LanguageProvider>
      </div>
    </main>
  );
}
