import React from 'react';
import { experienceContent } from '../../content';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-6 max-w-7xl mx-auto">
      {/* Section Header (WIREFRAME: EXPERIENCE & TRAINING) */}
      <div className="mb-12">
        <h2 className="font-ibm text-3xl sm:text-4xl font-bold tracking-tight text-point mb-2">
          EXPERIENCE & TRAINING
        </h2>
        <p className="text-muted text-sm font-semibold">
          경력 사항(Experience)과 교육/훈련(Training) 수수 내역을 2컬럼 레이아웃으로 전달합니다.
        </p>
      </div>

      {/* 2-Column Layout (WIREFRAME Split: Left Experience | Right Training) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left Column: Experience */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-card shadow-card">
          <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-card">
            <div className="p-2.5 rounded-xl bg-point/10 text-point">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="font-ibm text-xl font-bold text-main">
              Experience
            </h3>
          </div>

          <div className="space-y-6">
            {experienceContent.experiences.map((exp) => (
              <div
                key={exp.id}
                className="relative pl-5 border-l-2 border-point/40 hover:border-point transition-colors group"
              >
                <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-point" />
                <h4 className="font-ibm font-bold text-base text-main group-hover:text-point transition-colors">
                  {exp.title}
                </h4>
                <div className="text-xs font-semibold text-muted mb-2 flex items-center space-x-2">
                  <span>{exp.organization}</span>
                  <span>•</span>
                  <span className="inline-flex items-center space-x-1">
                    <Calendar className="w-3 h-3 text-point" />
                    <span>{exp.period}</span>
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-muted font-medium leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Training */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-card shadow-card">
          <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-card">
            <div className="p-2.5 rounded-xl bg-point/10 text-point">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="font-ibm text-xl font-bold text-main">
              Training
            </h3>
          </div>

          <div className="space-y-6">
            {experienceContent.trainings.map((trn) => (
              <div
                key={trn.id}
                className="relative pl-5 border-l-2 border-point/40 hover:border-point transition-colors group"
              >
                <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-point" />
                <h4 className="font-ibm font-bold text-base text-main group-hover:text-point transition-colors">
                  {trn.title}
                </h4>
                <div className="text-xs font-semibold text-muted mb-2 flex items-center space-x-2">
                  <span>{trn.institution}</span>
                  <span>•</span>
                  <span className="inline-flex items-center space-x-1">
                    <Calendar className="w-3 h-3 text-point" />
                    <span>{trn.period}</span>
                  </span>
                </div>
                {trn.certificateOrNote && (
                  <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-semibold bg-point/10 text-point border border-point/20">
                    {trn.certificateOrNote}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
