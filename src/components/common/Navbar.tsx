import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, ExternalLink, Menu, X } from 'lucide-react';
import { headerContent } from '../../content';
import { smoothScrollTo } from '../../utils/scroll';



export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Lazy state initializer to avoid synchronous setState call inside useEffect
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true;
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [isDark]);

  // Lock body scroll when mobile/tablet menu drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Track active section for navigation highlighting
  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const targetTop = viewportHeight * 0.25;
      const targetBottom = viewportHeight * 0.75;

      let maxOverlap = 0;
      let currentActive = activeSection;

      for (const item of headerContent.navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const overlapTop = Math.max(rect.top, targetTop);
          const overlapBottom = Math.min(rect.bottom, targetBottom);
          const overlap = Math.max(0, overlapBottom - overlapTop);

          if (overlap > maxOverlap) {
            maxOverlap = overlap;
            currentActive = item.id;
          }
        }
      }

      if (currentActive !== activeSection) {
        setActiveSection(currentActive);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const toggleTheme = () => {
    const nextTheme = !isDark;
    setIsDark(nextTheme);
    localStorage.setItem('theme', nextTheme ? 'dark' : 'light');
  };

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    smoothScrollTo(id, 750);
  };

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('hero');
          }}
          className="font-ibm font-bold text-xl tracking-tight hover:text-point transition-colors"
        >
          {headerContent.logoText}
        </a>

        {/* Desktop Navigation Links (Visible on lg: 1024px+) */}
        <nav className="hidden lg:flex items-center space-x-6">
          {headerContent.navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-xs font-semibold transition-colors ${
                activeSection === item.id ? 'text-point' : 'text-muted hover:text-point'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Links & Mobile Menu Toggle */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          {/* GitHub Button */}
          {headerContent.githubUrl && (
            <a
              href={headerContent.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-card hover:border-point hover:text-point transition-all text-xs font-medium text-main"
              title="GitHub"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span className="hidden sm:inline">GitHub</span>
            </a>
          )}

          {/* Notion Button */}
          {headerContent.notionUrl && (
            <a
              href={headerContent.notionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-card hover:border-point hover:text-point transition-all text-xs font-medium text-main"
              title="Notion"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="hidden sm:inline">Notion</span>
            </a>
          )}

          {/* Dark / Light Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-card hover:border-point text-main hover:text-point transition-all"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Mobile & Tablet Hamburger Menu Toggle Button (Visible on lg:hidden) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg border border-card hover:border-point text-main lg:hidden transition-colors"
            aria-label="Toggle mobile and tablet menu drawer"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Slide-in Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 top-16 z-50 bg-slate-950/60 backdrop-blur-sm lg:hidden flex justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              className="w-4/5 max-w-xs h-[calc(100vh-4rem)] glass-panel border-l p-6 text-main flex flex-col justify-between shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="space-y-6">
                <span className="text-xs font-bold uppercase tracking-wider text-point block pb-2 border-b border-card">
                  Navigation Menu
                </span>
                <nav className="flex flex-col space-y-4">
                  {headerContent.navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`text-left font-ibm text-lg font-semibold transition-colors py-1 ${
                        activeSection === item.id ? 'text-point' : 'text-main hover:text-point'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Mobile/Tablet Drawer Footer Actions */}
              <div className="pt-6 border-t border-card space-y-3">
                <div className="flex items-center justify-between text-xs text-muted font-medium">
                  <span>테마 모드</span>
                  <button
                    onClick={toggleTheme}
                    className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-card hover:border-point text-main hover:text-point transition-colors"
                  >
                    {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
                    <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
