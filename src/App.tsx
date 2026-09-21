import { useState, useEffect } from 'react';
import { MotionConfig } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Gallery from './components/Gallery';
import Container from './components/ui/Container';

/** index.html のインラインスクリプトが初回描画前に付けた状態を引き継ぐ */
function initialDarkMode(): boolean {
  return document.documentElement.classList.contains('dark');
}

function App() {
  const { t } = useTranslation();
  const [isDarkMode, setIsDarkMode] = useState(initialDarkMode);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    try {
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    } catch {
      // プライベートウィンドウなどで保存できなくても表示は継続する
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((v) => !v);
  };

  return (
    // reducedMotion="user" の 1 行で、全コンポーネントの framer-motion が
    // OS の「動きを減らす」設定を尊重するようになる
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-bg transition-colors duration-200">
        <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        <main>
          <Hero />
          <Profile />
          <Gallery />
        </main>
        <footer className="border-t border-border bg-surface py-6">
          <Container>
            <p className="text-center text-sm text-fg-muted">
              {t('footer.copyright', { year: new Date().getFullYear() })}
            </p>
          </Container>
        </footer>
      </div>
    </MotionConfig>
  );
}

export default App;
