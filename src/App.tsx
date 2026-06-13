import { ThemeProvider } from './components/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { GuestbookContact } from './components/GuestbookContact';
import { ArrowUp, Terminal, Star, ArrowUpRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function App() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (window.scrollY > 400) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-slate-900 dark:text-neutral-155 font-sans selection:bg-blue-500 selection:text-white dark:selection:bg-blue-500/30 transition-colors duration-300">
        {/* Navigation bar */}
        <Navbar />

        {/* Global Wrapper container */}
        <main className="relative">
          {/* Hero segment */}
          <Hero />

          {/* About segment */}
          <About />

          {/* Skills segment */}
          <Skills />

          {/* Experience segment */}
          <Experience />

          {/* Projects segment */}
          <Projects />

          {/* Contact & Live Guestbook segment */}
          <GuestbookContact />
        </main>

        {/* Footer */}
        <footer className="bg-slate-50 dark:bg-[#0a0a0a] py-12 border-t border-slate-100 dark:border-[#262626] transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Left Brand */}
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold select-none font-mono">
                  K
                </div>
                <div className="flex flex-col">
                  <span className="font-sans font-bold text-sm tracking-tight text-slate-800 dark:text-white">
                    Keyur Chanchad
                  </span>
                  <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono">
                    Software Portfolio • v1.2.0
                  </span>
                </div>
              </div>

              {/* Quote or message */}
              <div className="text-center md:text-right space-y-1">
                <span className="text-xs text-slate-405 dark:text-slate-400 font-medium font-sans block">
                  Designed & Engineered with Craftsmanship
                </span>
                <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono block">
                  © 2026 Keyur Chanchad. All rights saved.
                </span>
              </div>
            </div>
          </div>
        </footer>

        {/* Back to top button */}
        {showScroll && (
          <button
            onClick={scrollTop}
            id="back-to-top-btn"
            className="fixed bottom-6 right-6 p-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-all transform hover:scale-110 z-40 cursor-pointer flex items-center justify-center"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        )}
      </div>
    </ThemeProvider>
  );
}
