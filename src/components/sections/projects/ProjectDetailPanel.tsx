import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  ArrowUpRight,
  ArrowUp,
  Calendar,
  User,
  Users,
  CheckCircle2,
  TrendingUp,
  Wrench,
  BookOpen
} from 'lucide-react';
import type { ProjectItem } from '../../../types/portfolio';

interface ProjectDetailPanelProps {
  selectedProject: ProjectItem;
  currentIndex: number;
  onPrev: () => void;
  onNext: () => void;
  onOpenModal: (project: ProjectItem) => void;
  onScrollToList: () => void;
  projectsList: ProjectItem[];
}

export const ProjectDetailPanel: React.FC<ProjectDetailPanelProps> = ({
  selectedProject,
  currentIndex,
  onPrev,
  onNext,
  onOpenModal,
  onScrollToList,
  projectsList
}) => {
  return (
    <div
      id="project-detail-panel"
      className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-2xl permanent-elevation sticky top-24 overflow-hidden relative group/panel"
    >
      {/* Fixed Y-Position Floating '<' & '>' Buttons */}
      <button
        onClick={onPrev}
        className="absolute left-2 top-[18rem] z-20 p-2 rounded-full glass-panel text-muted opacity-30 hover:opacity-100 hover:bg-point hover:text-white transition-all duration-300 focus:outline-none border-none"
        aria-label="이전 프로젝트"
        title="이전 프로젝트"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={onNext}
        className="absolute right-2 top-[18rem] z-20 p-2 rounded-full glass-panel text-muted opacity-30 hover:opacity-100 hover:bg-point hover:text-white transition-all duration-300 focus:outline-none border-none"
        aria-label="다음 프로젝트"
        title="다음 프로젝트"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Quick Slider Header */}
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-card">
        <span className="text-xs font-bold text-caption tracking-wider uppercase">
          Featured Detail
        </span>
        <div className="flex items-center space-x-1.5">
          {projectsList.map((p, pIdx) => (
            <span
              key={p.id}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                pIdx === currentIndex ? 'w-4 bg-point' : 'w-1.5 bg-card-border'
              }`}
            />
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedProject.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(_e, { offset, velocity }) => {
            const swipe = Math.abs(offset.x) * velocity.x;
            if (offset.x < -70 || swipe < -400) {
              onNext();
            } else if (offset.x > 70 || swipe > 400) {
              onPrev();
            }
          }}
          className="cursor-grab active:cursor-grabbing touch-pan-y space-y-5"
        >
          {/* Active Detail Banner Image */}
          <div className="relative h-48 w-full rounded-xl overflow-hidden bg-secondary shadow-md">
            <img
              src={selectedProject.imageUrl}
              alt={selectedProject.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
            <div className="absolute bottom-3.5 left-4 right-4 flex justify-between items-end">
              <div>
                <div className="flex items-center space-x-2 mb-1 flex-wrap gap-y-1">
                  {selectedProject.period && (
                    <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded bg-slate-950/80 backdrop-blur text-white text-[10px] font-semibold border border-white/10">
                      <Calendar className="w-3 h-3 text-point" />
                      <span>{selectedProject.period}</span>
                    </span>
                  )}
                  {selectedProject.teamType && (
                    <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded bg-point text-white text-[10px] font-bold shadow">
                      {selectedProject.teamType === 'team' ? (
                        <>
                          <Users className="w-3 h-3" />
                          <span>팀 ({selectedProject.teamSize || '합작'})</span>
                        </>
                      ) : (
                        <>
                          <User className="w-3 h-3" />
                          <span>개인 (1인)</span>
                        </>
                      )}
                    </span>
                  )}
                </div>
                <h4 className="font-ibm text-xl font-bold text-white leading-tight">
                  {selectedProject.title}
                </h4>
              </div>
              <button
                onClick={() => onOpenModal(selectedProject)}
                className="p-2 rounded-lg bg-white/20 text-white backdrop-blur hover:bg-point transition-all shadow"
                title="모달 팝업 확대"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Subtitle & Role / Contribution */}
          <div className="space-y-3">
            <div>
              <span className="text-xs font-bold text-point uppercase tracking-wider block mb-1">
                {selectedProject.myRole ? `담당 역할: ${selectedProject.myRole}` : '프로젝트 개요'}
              </span>
              <p className="text-sm font-bold text-main leading-snug">
                {selectedProject.subtitle}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-muted font-medium leading-relaxed">
              {selectedProject.contribution || selectedProject.detailedDescription || selectedProject.description}
            </p>
          </div>

          {/* Key Highlights (Bullets) */}
          {selectedProject.highlights && selectedProject.highlights.length > 0 && (
            <div className="p-3.5 rounded-xl bg-secondary/60 border border-card/80">
              <span className="text-xs font-bold text-main uppercase tracking-wider block mb-2 flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-point" />
                <span>주요 기여 & 핵심 성과</span>
              </span>
              <ul className="space-y-1.5">
                {selectedProject.highlights.map((item, hIdx) => (
                  <li key={hIdx} className="text-xs text-muted font-medium flex items-start space-x-2">
                    <span className="text-point font-bold select-none">•</span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Quantitative Metrics Grid */}
          {selectedProject.metrics && selectedProject.metrics.length > 0 && (
            <div>
              <span className="text-[11px] font-bold text-caption uppercase tracking-wider block mb-2 flex items-center space-x-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-point" />
                <span>정량적 성과 지표</span>
              </span>
              <div className="grid grid-cols-2 gap-2">
                {selectedProject.metrics.map((m, mIdx) => (
                  <div key={mIdx} className="p-2.5 rounded-lg bg-point/5 border border-point/20">
                    <div className="text-[10px] font-semibold text-muted">{m.label}</div>
                    <div className="text-sm font-bold text-point font-ibm">{m.value}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Troubleshooting Highlight */}
          {selectedProject.troubleshooting && (
            <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20">
              <div className="flex items-center space-x-1.5 text-amber-500 text-xs font-bold mb-1">
                <Wrench className="w-3.5 h-3.5" />
                <span>트러블슈팅 이력</span>
              </div>
              <p className="text-xs text-main font-semibold mb-1">
                문제: {selectedProject.troubleshooting.problem}
              </p>
              <p className="text-[11px] text-muted leading-relaxed line-clamp-2">
                해결: {selectedProject.troubleshooting.solution}
              </p>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div>
            <span className="text-[11px] font-bold text-caption uppercase tracking-wider block mb-2">
              사용 기술 스택
            </span>
            <div className="flex flex-wrap gap-1.5">
              {selectedProject.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded text-[11px] font-medium bg-secondary text-main border border-card"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links & Modal Opener */}
          <div className="flex flex-col space-y-2.5 pt-3 border-t border-card">
            <div className="flex items-center space-x-3">
              {selectedProject.demoUrl && (
                <motion.a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-point text-white text-xs font-semibold shadow-md hover:bg-blue-700 transition-colors"
                >
                  <span>데모 바로가기</span>
                  <ArrowUpRight className="w-4 h-4" />
                </motion.a>
              )}

              <motion.button
                onClick={() => onOpenModal(selectedProject)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center space-x-1.5 px-3.5 py-2.5 rounded-xl border border-card hover:border-point hover:text-point text-xs font-semibold transition-colors text-main"
              >
                <Maximize2 className="w-4 h-4" />
                <span>상세 분석 보기</span>
              </motion.button>

              {selectedProject.notionUrl && (
                <motion.a
                  href={selectedProject.notionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center space-x-1.5 px-3.5 py-2.5 rounded-xl border border-card hover:border-point hover:text-point text-xs font-semibold transition-colors text-main"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Notion 포트폴리오</span>
                </motion.a>
              )}
            </div>

            {/* Mobile Quick Scroll Button */}
            <button
              onClick={onScrollToList}
              className="lg:hidden w-full inline-flex items-center justify-center space-x-1.5 py-2 rounded-xl bg-secondary/80 text-muted hover:text-point text-xs font-semibold border border-card transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>프로젝트 전체 목록으로 올라가기</span>
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
