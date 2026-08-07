import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { headerContent } from '../../content';
import { smoothScrollTo } from '../../utils/scroll';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    smoothScrollTo(0, 750);
  };

  return (
    <footer className="w-full border-t border-card py-12 px-6 bg-secondary/50 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left Side: Copyright */}
        <div className="text-xs text-caption font-medium text-center sm:text-left">
          © {new Date().getFullYear()} <span className="font-semibold text-main">{headerContent.logoText}</span>. All rights reserved.
        </div>

        {/* Back to Top Button */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl glass-panel text-xs font-semibold hover:border-point hover:text-point transition-colors"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5 text-point" />
        </motion.button>
      </div>
    </footer>
  );
};
