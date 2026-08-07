import React from 'react';
import { ArrowUp } from 'lucide-react';
import { headerContent } from '../../content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-slate-200 dark:border-slate-800/80 py-12 px-6 bg-slate-50/50 dark:bg-slate-950/50 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <div className="text-xs text-slate-500 dark:text-slate-400 font-medium text-center sm:text-left">
          © {new Date().getFullYear()} <span className="font-semibold text-slate-700 dark:text-slate-200">{headerContent.logoText}</span>. All rights reserved.
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl glass-panel text-xs font-semibold hover:border-point hover:text-point transition-all"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
