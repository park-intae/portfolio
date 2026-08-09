import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { ProjectItem } from '../../types/portfolio';
import {
  X,
  ExternalLink,
  Layers,
  Calendar,
  User,
  Users,
  CheckCircle2,
  TrendingUp,
  Wrench,
  BookOpen
} from 'lucide-react';
import { createPortal } from 'react-dom';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    let previousActiveElement: HTMLElement | null = null;

    if (project) {
      previousActiveElement = document.activeElement as HTMLElement;
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
      if (previousActiveElement) {
        previousActiveElement.focus();
      }
    };
  }, [project, onClose]);


  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 backdrop-blur-md"
          onClick={onClose}
          aria-label="Project Detail Modal Backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="glass-panel w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl permanent-elevation border border-point/30 p-6 sm:p-8 relative text-main shadow-2xl space-y-6"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-4 right-4 z-20 p-2 rounded-xl border border-card hover:border-point hover:text-point transition-colors bg-slate-900/60 backdrop-blur text-white"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </motion.button>

            {/* Modal Banner Image & Header Metadata */}
            <div className="relative h-64 w-full rounded-xl overflow-hidden bg-secondary shadow-lg">
              <img
                src={project.imageUrl}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 space-y-2">
                <div className="flex items-center space-x-2 flex-wrap gap-y-1">
                  {project.period && (
                    <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded bg-slate-950/80 backdrop-blur text-white text-xs font-medium border border-white/10">
                      <Calendar className="w-3.5 h-3.5 text-point" />
                      <span>{project.period}</span>
                    </span>
                  )}

                  {project.teamType && (
                    <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded bg-point text-white text-xs font-bold shadow">
                      {project.teamType === 'team' ? (
                        <>
                          <Users className="w-3.5 h-3.5" />
                          <span>팀 프로젝트 ({project.teamSize || '합작'})</span>
                        </>
                      ) : (
                        <>
                          <User className="w-3.5 h-3.5" />
                          <span>개인 프로젝트 (1인 전담)</span>
                        </>
                      )}
                    </span>
                  )}
                </div>

                <h3 id="modal-title" className="font-ibm text-2xl sm:text-3xl font-bold text-white leading-tight">
                  {project.title}
                </h3>
              </div>
            </div>

            {/* Overview & My Role */}
            <div className="space-y-3">
              <div>
                <span className="text-xs font-bold text-point uppercase tracking-wider block mb-1">
                  {project.myRole ? `담당 역할: ${project.myRole}` : '프로젝트 개요'}
                </span>
                <p className="text-lg font-bold text-main leading-snug">
                  {project.subtitle}
                </p>
              </div>

              {project.contribution && (
                <div className="p-4 rounded-xl bg-point/5 border border-point/20 text-xs sm:text-sm text-main font-medium leading-relaxed">
                  <span className="font-bold text-point block mb-1">🙋‍♂️ 본인 주요 기여도:</span>
                  {project.contribution}
                </div>
              )}

              <p className="text-sm text-muted font-medium leading-relaxed whitespace-pre-line">
                {project.detailedDescription || project.description}
              </p>
            </div>

            {/* Key Highlights Bullets */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="p-4 rounded-xl bg-secondary/80 border border-card">
                <span className="text-xs font-bold text-main uppercase tracking-wider block mb-3 flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-point" />
                  <span>핵심 기능 및 개발 성과</span>
                </span>
                <ul className="space-y-2">
                  {project.highlights.map((item, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-muted font-medium flex items-start space-x-2.5">
                      <span className="text-point font-bold text-base leading-none select-none">•</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Quantitative Metrics Grid */}
            {project.metrics && project.metrics.length > 0 && (
              <div>
                <span className="text-xs font-bold text-caption uppercase tracking-wider block mb-3 flex items-center space-x-1.5">
                  <TrendingUp className="w-4 h-4 text-point" />
                  <span>정량적 성과 지표</span>
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl glass-panel border border-point/30 bg-point/5 text-center">
                      <div className="text-xs font-semibold text-muted mb-1">{m.label}</div>
                      <div className="text-lg font-bold text-point font-ibm">{m.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Troubleshooting Deep-Dive Box */}
            {project.troubleshooting && (
              <div className="p-4 sm:p-5 rounded-xl bg-amber-500/10 border border-amber-500/30 space-y-3">
                <div className="flex items-center space-x-2 text-amber-500 font-bold text-sm">
                  <Wrench className="w-4 h-4" />
                  <span>기술적 난관 및 트러블슈팅 (Troubleshooting)</span>
                </div>

                <div className="space-y-2 text-xs sm:text-sm">
                  <div>
                    <span className="font-bold text-amber-400 block mb-0.5">⚠️ 발생한 문제:</span>
                    <p className="text-main leading-relaxed">{project.troubleshooting.problem}</p>
                  </div>

                  {project.troubleshooting.cause && (
                    <div>
                      <span className="font-bold text-amber-400 block mb-0.5">🔍 원인 분석:</span>
                      <p className="text-muted leading-relaxed">{project.troubleshooting.cause}</p>
                    </div>
                  )}

                  <div>
                    <span className="font-bold text-point block mb-0.5">✅ 해결 방법 및 결과:</span>
                    <p className="text-main leading-relaxed font-medium">{project.troubleshooting.solution}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Tech Stack Pills */}
            <div>
              <span className="text-xs font-bold text-caption uppercase tracking-wider block mb-2 flex items-center space-x-1.5">
                <Layers className="w-3.5 h-3.5 text-point" />
                <span>적용 기술 스택</span>
              </span>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 rounded-lg text-xs font-semibold bg-point/10 text-point border border-point/20"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3 pt-4 border-t border-card">
              {project.demoUrl && (
                <motion.a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-point text-white text-xs font-bold shadow-lg shadow-point/20 hover:bg-blue-700 transition-colors"
                >
                  <span>데모 라이브 바로가기</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              )}

              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center space-x-2 px-4 py-3 rounded-xl border border-card hover:border-point hover:text-point text-xs font-semibold transition-colors text-main"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  <span>GitHub 저장소</span>
                </motion.a>
              )}

              {project.notionUrl && (
                <motion.a
                  href={project.notionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center space-x-2 px-4 py-3 rounded-xl border border-card hover:border-point hover:text-point text-xs font-semibold transition-colors text-main"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Notion 포트폴리오</span>
                </motion.a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};
