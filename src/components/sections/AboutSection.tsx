import React from 'react';
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
      {/* Section Header (WIREFRAME: ABOUT ME) */}
      <div className="mb-12">
        <h2 className="font-ibm text-3xl sm:text-4xl font-bold tracking-tight text-point mb-2">
          ABOUT ME
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
          IBM Plex Sans KR 기반 기술 역량 및 요약 지표
        </p>
      </div>

      {/* 4 Highlight Metric Cards (WIREFRAME: 4 Top Cards) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
        {aboutContent.metrics.map((item) => (
          <div
            key={item.id}
            className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-point/40 transition-all group"
          >
            <div className="mb-3 p-2.5 rounded-xl bg-point/10 w-fit group-hover:scale-110 transition-transform">
              {item.iconName && ICON_MAP[item.iconName] ? ICON_MAP[item.iconName] : <Zap className="w-6 h-6 text-point" />}
            </div>
            <div className="font-ibm text-2xl sm:text-3xl font-bold tracking-tight mb-1 text-slate-900 dark:text-slate-50">
              {item.value}
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
              {item.label}
            </div>
          </div>
        ))}
      </div>

      {/* Tech Stack Box (WIREFRAME: Tech Stack Grouping Box) */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800">
        <h3 className="font-ibm text-xl font-bold mb-6 text-point flex items-center space-x-2">
          <span>Tech Stack</span>
        </h3>

        <div className="space-y-6">
          {aboutContent.techStackCategories.map((cat, idx) => (
            <div key={idx} className="border-b border-slate-200/60 dark:border-slate-800/60 pb-5 last:border-0 last:pb-0">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-3">
                {cat.categoryName}
              </span>
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-point hover:text-point transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
