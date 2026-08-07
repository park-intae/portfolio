import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2, ArrowUpRight, ArrowUp } from 'lucide-react';
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
      {/* Fixed Y-Position Floating '<' & '>' Buttons at Mid-Body of Detail Panel (top-[20rem]) */}
      <button
        onClick={onPrev}
        className="absolute left-2 top-[20rem] z-20 p-2 rounded-full glass-panel text-muted opacity-30 hover:opacity-100 hover:bg-point hover:text-white transition-all duration-300 focus:outline-none border-none"
        aria-label="이전 프로젝트"
        title="이전 프로젝트"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={onNext}
        className="absolute right-2 top-[20rem] z-20 p-2 rounded-full glass-panel text-muted opacity-30 hover:opacity-100 hover:bg-point hover:text-white transition-all duration-300 focus:outline-none border-none"
        aria-label="다음 프로젝트"
        title="다음 프로젝트"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Quick Slider Header (Dots & Title) */}
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
          className="cursor-grab active:cursor-grabbing touch-pan-y"
        >
          {/* Active Detail Image */}
          <div className="relative h-52 w-full mb-6 rounded-xl overflow-hidden bg-secondary shadow-md">
            <img
              src={selectedProject.imageUrl}
              alt={selectedProject.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
              <div>
                <span className="inline-block px-2.5 py-1 rounded bg-point text-white text-[11px] font-bold mb-1 shadow">
                  Featured Detail
                </span>
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

          {/* Subtitle & Full Description */}
          <div className="space-y-4 mb-6">
            <div>
              <span className="text-xs font-bold text-point uppercase tracking-wider block mb-1">
                프로젝트 개요
              </span>
              <p className="text-sm font-bold text-main leading-snug">
                {selectedProject.subtitle}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-muted font-medium leading-relaxed">
              {selectedProject.detailedDescription || selectedProject.description}
            </p>
          </div>

          {/* Full Tech Stack Tags */}
          <div className="mb-6">
            <span className="text-xs font-bold text-caption uppercase tracking-wider block mb-2">
              사용 기술 스택
            </span>
            <div className="flex flex-wrap gap-2">
              {selectedProject.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-point/10 text-point border border-point/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links & Modal Opener */}
          <div className="flex flex-col space-y-3 pt-4 border-t border-card">
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
                className="inline-flex items-center space-x-1.5 px-3 py-2.5 rounded-xl border border-card hover:border-point hover:text-point text-xs font-semibold transition-colors text-main"
              >
                <Maximize2 className="w-4 h-4" />
                <span>전체 보기</span>
              </motion.button>
            </div>

            {/* Mobile Quick Scroll Back To Project List Button */}
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
