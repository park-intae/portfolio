import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { aboutContent, SKILL_PROJECT_MAP } from '../../content';
import { Shield, ShieldCheck, GraduationCap, Hammer, Wrench, Zap, SearchCheck, ArrowRight, Sparkles, X, Layers } from 'lucide-react';
import { smoothScrollTo } from '../../utils/scroll';

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
  Zap: <Zap className="w-6 h-6 text-point" />,
  SearchCheck: <SearchCheck className="w-6 h-6 text-point" />,
  Award: <Shield className="w-6 h-6 text-point" />,
  Layers: <Layers className="w-6 h-6 text-point" />,
  FolderGit2: <HammerWrenchIcon />,
  CheckCircle2: <GraduationCap className="w-6 h-6 text-point" />
};

interface AboutSectionProps {
  selectedSkill?: string | null;
  onSelectSkill?: (skill: string | null) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  selectedSkill: externalSelectedSkill,
  onSelectSkill: externalOnSelectSkill
}) => {
  const [internalSelectedSkill, setInternalSelectedSkill] = useState<string | null>(null);

  const selectedSkill = externalSelectedSkill !== undefined ? externalSelectedSkill : internalSelectedSkill;

  const handleToggleSkill = (skillName: string) => {
    const nextValue = selectedSkill === skillName ? null : skillName;
    if (externalOnSelectSkill) {
      externalOnSelectSkill(nextValue);
    } else {
      setInternalSelectedSkill(nextValue);
    }
  };

  const handleClearSkill = () => {
    if (externalOnSelectSkill) {
      externalOnSelectSkill(null);
    } else {
      setInternalSelectedSkill(null);
    }
  };

  const activeEvidence = selectedSkill ? (SKILL_PROJECT_MAP[selectedSkill] || {
    project: '실무 및 프로젝트 전반',
    metric: '실제 프로덕션 환경에 최적화된 아키텍처 및 클린 코드 표준 준수'
  }) : null;

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
          정량적 성과 지표와 핵심 엔지니어링 기술 스택
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
            <div className="font-ibm text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight mb-1 text-main whitespace-nowrap overflow-hidden text-ellipsis">
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

      {/* Tech Stack Box with Interactive Skill-Project Mapping */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="glass-panel p-6 sm:p-8 rounded-2xl border border-card shadow-card space-y-6"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-card/60 pb-4">
          <h3 className="font-ibm text-xl font-bold text-point flex items-center space-x-2">
            <span>Tech Stack</span>
          </h3>
          <span className="text-xs font-semibold text-caption">
            💡 태그를 클릭하면 실전 프로젝트 적용 사례와 성과를 바로 확인할 수 있습니다.
          </span>
        </div>

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
                  const isSelected = selectedSkill === skillName;
                  
                  return (
                    <motion.button
                      type="button"
                      key={sIdx}
                      onClick={() => handleToggleSkill(skillName)}
                      whileHover={{ y: -2, scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.15 }}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold border transition-all text-left cursor-pointer ${
                        isSelected
                          ? 'bg-point text-white border-point shadow-md shadow-point/25 ring-2 ring-point/30'
                          : isHighlight 
                            ? 'bg-point/15 text-point border-point/50 hover:bg-point/25' 
                            : 'bg-secondary text-main border-card hover:border-point hover:text-point'
                      }`}
                    >
                      {skillName}
                    </motion.button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Skill ↔ Project Evidence Banner */}
        <AnimatePresence mode="wait">
          {selectedSkill && activeEvidence ? (
            <motion.div
              key={selectedSkill}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="p-4 sm:p-5 rounded-xl bg-point/10 border border-point/40 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <div className="flex items-center space-x-2 flex-wrap">
                  <Sparkles className="w-4 h-4 text-point shrink-0" />
                  <span className="text-xs font-bold text-point">
                    [{selectedSkill}] 실전 적용 프로젝트:
                  </span>
                  <span className="text-xs font-bold text-main underline underline-offset-2">
                    {activeEvidence.project}
                  </span>
                </div>
                <p className="text-xs text-muted leading-relaxed pl-6">
                  {activeEvidence.metric}
                </p>
              </div>

              <div className="flex items-center space-x-2 shrink-0 self-start sm:self-auto">
                <button
                  type="button"
                  onClick={handleClearSkill}
                  className="inline-flex items-center space-x-1 px-2.5 py-1.5 rounded-lg border border-card hover:border-point text-muted hover:text-main text-xs font-semibold transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>강조 해제</span>
                </button>
                <button
                  type="button"
                  onClick={() => smoothScrollTo('projects', 750)}
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-point text-white text-xs font-semibold hover:bg-blue-700 transition-colors shadow-sm"
                >
                  <span>강조된 프로젝트 보기</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="no-selection"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-3.5 rounded-xl bg-secondary/40 border border-card/60 flex items-center justify-between text-xs text-muted"
            >
              <div className="flex items-center space-x-2">
                <Sparkles className="w-3.5 h-3.5 text-point shrink-0" />
                <span>
                  원하는 기술 스택 태그를 클릭하면 하단 프로젝트 섹션에서 해당 기술이 적용된 프로젝트가 <strong>테두리 강조(Highlight)</strong>로 집중 표시됩니다.
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
