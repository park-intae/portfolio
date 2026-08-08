import React from 'react';
import { motion } from 'framer-motion';
import { aboutContent } from '../../content';
import { Shield, ShieldCheck, GraduationCap, Hammer, Wrench, Zap } from 'lucide-react';

// 등대 (Lighthouse) 커스텀 렌더링 컴포넌트
const LighthouseIcon: React.FC = () => (
  <svg className="w-6 h-6 text-point" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l-2.5 4h5L12 2z" />
    <path d="M9.5 6l-2 14h9l-2-14" />
    <path d="M9 11h6" />
    <path d="M8.5 16h7" />
    <path d="M5 20h14" />
    <path d="M3 8l3 1" />
    <path d="M21 8l-3 1" />
  </svg>
);

// 망치와 렌치 (Hammer & Wrench) 교차 아이콘 컴포넌트
const HammerWrenchIcon: React.FC = () => (
  <div className="relative w-6 h-6 flex items-center justify-center">
    <Hammer className="w-4 h-4 text-point absolute -translate-x-1 -translate-y-0.5 -rotate-45" />
    <Wrench className="w-4 h-4 text-point absolute translate-x-1 translate-y-0.5 rotate-45" />
  </div>
);

const ICON_MAP: Record<string, React.ReactNode> = {
  Lighthouse: <LighthouseIcon />,
  Shield: <Shield className="w-6 h-6 text-point" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-point" />,
  HammerWrench: <HammerWrenchIcon />,
  Wrench: <Wrench className="w-6 h-6 text-point" />,
  Hammer: <Hammer className="w-6 h-6 text-point" />,
  GraduationCap: <GraduationCap className="w-6 h-6 text-point" />,
  // 호환성 폴백
  Zap: <LighthouseIcon />,
  Award: <Shield className="w-6 h-6 text-point" />,
  FolderGit2: <HammerWrenchIcon />,
  CheckCircle2: <GraduationCap className="w-6 h-6 text-point" />
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
            className="relative glass-panel p-6 rounded-2xl border border-card hover:border-point/40 transition-colors group shadow-card"
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

            {/* Hover Popover Description */}
            {item.description && (
              <div className="absolute -top-14 sm:-top-16 left-1/2 -translate-x-1/2 w-48 sm:w-56 p-3 rounded-xl bg-slate-900 dark:bg-slate-800 text-white text-[11px] sm:text-xs font-medium text-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl z-20">
                {item.description}
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-900 dark:bg-slate-800 rotate-45" />
              </div>
            )}
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
                {cat.skills.map((skill, sIdx) => {
                  const isHighlight = skill.startsWith('*');
                  const skillName = isHighlight ? skill.trim().substring(1).trim() : skill;
                  
                  return (
                    <motion.span
                      key={sIdx}
                      whileHover={{ y: -3, scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold border transition-colors cursor-default ${
                        isHighlight 
                          ? 'bg-point/15 text-point border-point/50 shadow-sm' 
                          : 'bg-secondary text-main border-card hover:border-point hover:text-point'
                      }`}
                    >
                      {skillName}
                    </motion.span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
