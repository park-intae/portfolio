import React from 'react';
import { motion } from 'framer-motion';
import { aboutContent } from '../../content';
import { Zap, Award, FolderGit2, CheckCircle2 } from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  Zap: <Zap className="w-6 h-6 text-point" />,
  Award: <Award className="w-6 h-6 text-point" />,
  FolderGit2: <FolderGit2 className="w-6 h-6 text-point" />,
  CheckCircle2: <CheckCircle2 className="w-6 h-6 text-point" />
};

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-ibm text-3xl sm:text-4xl font-bold tracking-tight text-point mb-2">
          ABOUT ME
        </h2>
        <p className="text-muted text-sm font-semibold">
          IBM Plex Sans KR 기반 기술 역량 및 요약 지표
        </p>
      </motion.div>

      {/* 4 Highlight Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
        {aboutContent.metrics.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 25, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="glass-panel p-6 rounded-2xl border border-card hover:border-point/40 transition-colors group shadow-card"
          >
            <div className="mb-3 p-2.5 rounded-xl bg-point/10 w-fit group-hover:scale-110 transition-transform">
              {item.iconName && ICON_MAP[item.iconName] ? ICON_MAP[item.iconName] : <Zap className="w-6 h-6 text-point" />}
            </div>
            <div className="font-ibm text-2xl sm:text-3xl font-bold tracking-tight mb-1 text-main">
              {item.value}
            </div>
            <div className="text-xs sm:text-sm font-semibold text-muted">
              {item.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tech Stack Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="glass-panel p-6 sm:p-8 rounded-2xl border border-card shadow-card"
      >
        <h3 className="font-ibm text-xl font-bold mb-6 text-point flex items-center space-x-2">
          <span>Tech Stack</span>
        </h3>

        <div className="space-y-6">
          {aboutContent.techStackCategories.map((cat, idx) => (
            <div key={idx} className="border-b border-card/60 pb-5 last:border-0 last:pb-0">
              <span className="text-xs font-bold uppercase tracking-wider text-caption block mb-3">
                {cat.categoryName}
              </span>
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill, sIdx) => (
                  <motion.span
                    key={sIdx}
                    whileHover={{ y: -3, scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-secondary text-main border border-card hover:border-point hover:text-point transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
