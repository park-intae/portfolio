import React, { useEffect } from 'react';
import type { ProjectItem } from '../../types/portfolio';
import { X, ExternalLink, Layers } from 'lucide-react';

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

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-md transition-opacity duration-300"
      onClick={onClose}
      aria-label="Project Detail Modal Backdrop"
    >
      <div
        className="glass-panel w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl permanent-elevation border border-point/30 p-6 sm:p-8 relative bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-slate-100 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-point hover:text-point transition-all"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Banner Image */}
        <div className="relative h-60 w-full mb-6 rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-800 shadow-lg">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <span className="inline-block px-2.5 py-1 rounded bg-point text-white text-[11px] font-bold mb-1 shadow">
              Project Detail View
            </span>
            <h3 className="font-ibm text-2xl font-bold text-white">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Subtitle & Full Description */}
        <div className="space-y-4 mb-6">
          <div>
            <span className="text-xs font-semibold text-point uppercase tracking-wider block mb-1">
              요약
            </span>
            <p className="text-base font-semibold leading-snug">
              {project.subtitle}
            </p>
          </div>

          <div>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
              상세 설명
            </span>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
              {project.detailedDescription || project.description}
            </p>
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="mb-6">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2 flex items-center space-x-1.5">
            <Layers className="w-3.5 h-3.5 text-point" />
            <span>적용 기술 스택</span>
          </span>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg text-xs font-semibold bg-point/10 text-point border border-point/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-3 pt-4 border-t border-slate-200 dark:border-slate-800">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-point text-white text-xs font-bold shadow-lg shadow-point/20 hover:bg-blue-700 transition-all"
            >
              <span>데모 라이브 바로가기</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-point hover:text-point text-xs font-semibold transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
