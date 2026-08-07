import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsContent } from '../../content';
import type { ProjectItem } from '../../types/portfolio';
import { ProjectModal } from '../common/ProjectModal';
import { ArrowUpRight, Maximize2 } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const projectsList = projectsContent.projects;
  const [selectedProject, setSelectedProject] = useState<ProjectItem>(
    projectsList[0] || {
      id: 'default',
      title: '프로젝트 데이터 준비 중',
      subtitle: '',
      description: '',
      detailedDescription: '',
      tags: [],
      imageUrl: ''
    }
  );

  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const handleSelectProject = (project: ProjectItem) => {
    setSelectedProject(project);

    if (window.innerWidth < 1024) {
      const detailElement = document.getElementById('project-detail-panel');
      if (detailElement) {
        detailElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-ibm text-3xl sm:text-4xl font-bold tracking-tight text-point mb-2">
          PROJECTS
        </h2>
        <p className="text-muted text-sm font-semibold">
          좌측 프로젝트 카드를 선택하면 우측에 상세 디테일 정보가 상시 엘리베이션 패널로 표출됩니다.
        </p>
      </motion.div>

      {/* Split Layout: Left 2x2 Grid (7 cols) + Right Detail Panel (5 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: 2x2 Project Cards Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {projectsList.map((project, idx) => {
            const isSelected = selectedProject.id === project.id;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleSelectProject(project)}
                className={`glass-panel p-5 rounded-2xl cursor-pointer border relative group transition-colors ${
                  isSelected
                    ? 'border-point bg-point/5 shadow-lg shadow-point/15 ring-2 ring-point/30'
                    : 'border-card'
                }`}
              >
                {/* Project Image Thumbnail */}
                <div className="relative h-40 w-full mb-4 rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-800">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {isSelected && (
                    <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-point text-white text-[10px] font-bold shadow-md">
                      Active
                    </div>
                  )}

                  {/* Expand Modal Quick Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveModalProject(project);
                    }}
                    aria-label="Expand project detail modal"
                    className="absolute bottom-2.5 right-2.5 p-2 rounded-lg bg-slate-900/70 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-point shadow-md"
                    title="모달 팝업으로 전체 보기"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Card Title & Subtitle */}
                <h3 className="font-ibm font-bold text-lg text-main mb-1 leading-snug">
                  {project.title}
                </h3>
                <p className="text-xs text-muted font-medium line-clamp-2 mb-3 leading-relaxed">
                  {project.subtitle}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[11px] font-semibold bg-secondary text-main border border-card"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold text-caption">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Right Side: Permanent Elevation Detail Preview Panel */}
        <div
          id="project-detail-panel"
          className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-2xl permanent-elevation sticky top-24 overflow-hidden"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedProject.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
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
                    onClick={() => setActiveModalProject(selectedProject)}
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
              <div className="flex items-center space-x-3 pt-4 border-t border-card">
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
                  onClick={() => setActiveModalProject(selectedProject)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center space-x-1.5 px-3 py-2.5 rounded-xl border border-card hover:border-point hover:text-point text-xs font-semibold transition-colors text-main"
                >
                  <Maximize2 className="w-4 h-4" />
                  <span>전체 보기</span>
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Interactive Project Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
