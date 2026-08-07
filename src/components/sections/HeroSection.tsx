import React from 'react';
import { motion } from 'framer-motion';
import { heroContent } from '../../content';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export const HeroSection: React.FC = () => {
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
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-point text-white font-semibold shadow-lg shadow-point/25 hover:bg-blue-700 hover:shadow-point/40 transition-all"
          >
            <span>프로젝트 보기</span>
            <ArrowRight className="w-4 h-4" />
          </motion.a>
          <motion.a
            href="#about"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl glass-panel font-semibold hover:border-point hover:text-point transition-all"
          >
            <span>About Me</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};
