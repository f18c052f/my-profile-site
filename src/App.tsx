import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Gallery from "./components/Gallery";
import { initAnalytics } from "./utils/analytics";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  useEffect(() => {
    initAnalytics();
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <Hero />
      <Profile />
      <Gallery />
      <footer className="py-6 px-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto text-center text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Y.Ohara . All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
