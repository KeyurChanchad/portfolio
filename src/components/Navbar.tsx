import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';
import { Sun, Moon, Menu, X, ArrowUpRight, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Guestbook', href: '#guestbook' },
];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_ITEMS.map((item) => item.href.slice(1));
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-md shadow-xs border-b border-slate-150 dark:border-[#262626]'
          : 'bg-transparent dark:bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            id="nav-logo"
            onClick={(e) => handleScrollTo(e, '#')}
            className="flex items-center space-x-2 group"
          >
            <div className="w-9 h-9 rounded-xl accent-gradient flex items-center justify-center text-white font-bold text-lg shadow-md shadow-blue-500/20 group-hover:opacity-95 transition-opacity">
              <Terminal size={18} className="animate-pulse" />
            </div>
            <span className="font-sans font-bold text-lg tracking-tight bg-gradient-to-r from-slate-900 to-blue-600 dark:from-white dark:to-blue-400 bg-clip-text text-transparent group-hover:opacity-85 transition-opacity">
              Keyur Chanchad
              <span className="text-blue-500 dark:text-blue-450 ml-0.5">.</span>
            </span>
          </a>

          {/* Desktop Nav Items */}
          <nav id="desktop-nav" className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                id={`nav-${item.href.slice(1)}`}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === item.href.slice(1)
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-950/20 font-semibold'
                    : 'text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-neutral-900/50'
                }`}
              >
                {item.label}
              </a>
            ))}

            {/* Quick Profile External Links */}
            <span className="h-4 w-px bg-slate-200 dark:bg-[#262626] mx-1"></span>

            <a
              href="https://github.com/keyurchanchad"
              target="_blank"
              rel="noopener noreferrer"
              id="nav-external-github"
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-neutral-400 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-neutral-900/50 flex items-center gap-0.5 text-xs font-semibold"
            >
              GitHub <ArrowUpRight size={12} />
            </a>
          </nav>

          {/* Right Side: Theme Toggle & Hamburger */}
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              id="theme-toggle shadow"
              className="p-2.5 rounded-xl border border-slate-200/60 dark:border-[#262626] bg-white dark:bg-[#121212]/85 text-slate-600 dark:text-neutral-300 hover:bg-slate-50 dark:hover:bg-neutral-900 hover:text-blue-600 dark:hover:text-blue-400 shadow-xs transition-colors cursor-pointer animate-fade-in"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-blue-600" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              id="mobile-menu-btn"
              className="md:hidden p-2.5 rounded-xl border border-slate-200/60 dark:border-[#262626] bg-white dark:bg-[#121212]/85 text-slate-700 dark:text-neutral-300 hover:bg-slate-50 dark:hover:bg-neutral-900 transition-colors pointer shadow-xs"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b border-slate-200 dark:border-[#262626] bg-white dark:bg-[#0a0a0a]/95 px-4 pt-2 pb-6 space-y-2 shadow-lg"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                id={`mob-nav-${item.href.slice(1)}`}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  activeSection === item.href.slice(1)
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50/70 dark:bg-blue-950/40 font-semibold'
                    : 'text-slate-600 dark:text-neutral-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-neutral-900/40'
                }`}
              >
                {item.label}
              </a>
            ))}

            <div className="pt-4 border-t border-slate-100 dark:border-[#262626] flex items-center justify-between">
              <a
                href="https://github.com/keyurchanchad"
                target="_blank"
                rel="noopener noreferrer"
                id="mob-nav-github"
                className="flex items-center space-x-1.5 text-sm font-semibold text-slate-705 dark:text-neutral-200 hover:text-blue-500"
              >
                <span>GitHub Repository</span>
                <ArrowUpRight size={14} />
              </a>
              <span className="text-xs text-slate-400 dark:text-slate-500">v1.2.0</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
