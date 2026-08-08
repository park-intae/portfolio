import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projectsContent } from '../../content';
import type { ProjectItem } from '../../types/portfolio';
import { ProjectModal } from '../common/ProjectModal';
import { ProjectCard } from './projects/ProjectCard';
import { ProjectDetailPanel } from './projects/ProjectDetailPanel';
import { OtherProjectsList } from './projects/OtherProjectsList';
import { smoothScrollTo } from '../../utils/scroll';

export const ProjectsSection: React.FC = () => {
  const projectsList = projectsContent.projects;
  const otherProjectsList = projectsContent.otherProjects;
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

  const currentIndex = projectsList.findIndex((p) => p.id === selectedProject.id);

  const handleSelectProject = (project: ProjectItem) => {
    setSelectedProject(project);

    if (window.innerWidth < 1024) {
      const detailElement = document.getElementById('project-detail-panel');
      if (detailElement) {
        detailElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handlePrevProject = () => {
    const prevIndex = (currentIndex - 1 + projectsList.length) % projectsList.length;
    setSelectedProject(projectsList[prevIndex]);
  };

  const handleNextProject = () => {
    const nextIndex = (currentIndex + 1) % projectsList.length;
    setSelectedProject(projectsList[nextIndex]);
  };

  const handleScrollToList = () => {
    smoothScrollTo('projects', 750);
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
          좌측 대표 프로젝트 카드를 선택하면 우측에 상세 디테일 정보가 상시 엘리베이션 패널로 표출됩니다.
        </p>
      </motion.div>

      {/* Split Layout: Left 2x2 Grid (7 cols) + Right Detail Panel (5 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: 2x2 Project Cards Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {projectsList.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              isSelected={selectedProject.id === project.id}
              onSelect={handleSelectProject}
              onOpenModal={setActiveModalProject}
              idx={idx}
            />
          ))}
        </div>

        {/* Right Side: Permanent Elevation Detail Preview Panel */}
        <ProjectDetailPanel
          selectedProject={selectedProject}
          currentIndex={currentIndex}
          onPrev={handlePrevProject}
          onNext={handleNextProject}
          onOpenModal={setActiveModalProject}
          onScrollToList={handleScrollToList}
          projectsList={projectsList}
        />
      </div>

      {/* Other Projects Section */}
      <OtherProjectsList otherProjects={otherProjectsList} />

      {/* Interactive Project Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
