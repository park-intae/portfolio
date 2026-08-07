import React, { useState, useEffect } from 'react';
import { Moon, Sun, ExternalLink } from 'lucide-react';
import { headerContent } from '../../content';

export const Navbar: React.FC = () => {
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

  const toggleTheme = () => {
    const nextTheme = !isDark;
    setIsDark(nextTheme);
    localStorage.setItem('theme', nextTheme ? 'dark' : 'light');
  };

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#hero" className="font-ibm font-bold text-xl tracking-tight hover:text-point transition-colors">
          {headerContent.logoText}
        </a>

        {/* Action Links & Theme Toggle */}
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
        </div>
      </div>
    </header>
  );
};
