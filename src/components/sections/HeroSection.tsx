import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { heroContent, headerContent } from '../../content';
import { Sparkles, ArrowRight, CheckCircle2, Mail, Check, Copy } from 'lucide-react';
import { smoothScrollTo } from '../../utils/scroll';

export const HeroSection: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopyEmail = () => {
    if (headerContent.email) {
      navigator.clipboard.writeText(headerContent.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="hero" className="relative min-h-[75vh] flex items-center py-20 px-6 overflow-hidden">
      {/* Background Ambient Glow Accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-point/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        className="max-w-4xl mx-auto w-full relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Status Badge */}
        <motion.div
          className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-point/30 bg-point/5 text-point text-xs font-semibold mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Full Stack & Frontend Developer</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          className="font-ibm text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-8 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {heroContent.title}
        </motion.h1>

        {/* 3-Line Strength Bullets */}
        <motion.div
          className="space-y-4 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3, staggerChildren: 0.1 }}
        >
          {heroContent.strengths.map((bullet, idx) => (
            <motion.div
              key={idx}
              className="flex items-start space-x-3 text-main"
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
            >
              <CheckCircle2 className="w-5 h-5 text-point shrink-0 mt-0.5" />
              <p className="text-base sm:text-lg font-semibold leading-relaxed">{bullet}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Actions */}
        <motion.div
          className="flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.button
            type="button"
            onClick={() => smoothScrollTo('projects')}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-point text-white font-semibold shadow-lg shadow-point/25 hover:bg-blue-700 hover:shadow-point/40 transition-all"
          >
            <span>프로젝트 보기</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>

          <motion.button
            type="button"
            onClick={() => smoothScrollTo('about')}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl glass-panel font-semibold hover:border-point hover:text-point transition-all"
          >
            <span>About Me</span>
          </motion.button>

          {headerContent.email && (
            <motion.button
              type="button"
              onClick={handleCopyEmail}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center space-x-2 px-4 py-3 rounded-xl border border-card bg-secondary/60 hover:border-point text-main text-xs sm:text-sm font-semibold transition-all group"
              title={`클릭하여 이메일 복사 (${headerContent.email})`}
              aria-label={`이메일 복사 ${headerContent.email}`}
            >
              <Mail className="w-4 h-4 text-point" />
              <span className="text-xs sm:text-sm font-semibold text-muted group-hover:text-main transition-colors">
                {headerContent.email}
              </span>
              {copied ? (
                <span className="inline-flex items-center space-x-1 text-point text-xs font-bold pl-1">
                  <Check className="w-3.5 h-3.5" />
                  <span>복사됨!</span>
                </span>
              ) : (
                <Copy className="w-3.5 h-3.5 text-muted group-hover:text-point transition-colors" />
              )}
            </motion.button>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};
