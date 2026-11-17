import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { projectsContent, SKILL_PROJECT_MAP } from '../../content';
import type { ProjectItem } from '../../types/portfolio';
import { ProjectModal } from '../common/ProjectModal';
import { ProjectCard } from './projects/ProjectCard';
import { ProjectDetailPanel } from './projects/ProjectDetailPanel';
import { OtherProjectsList } from './projects/OtherProjectsList';
import { smoothScrollTo } from '../../utils/scroll';
import { Sparkles, X } from 'lucide-react';

interface ProjectsSectionProps {
  highlightedSkill?: string | null;
  onClearSkill?: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  highlightedSkill,
  onClearSkill
}) => {
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

  const isProjectMatchingSkill = (project: ProjectItem, skill: string | null): boolean => {
    if (!skill) return false;
    const cleanSkill = skill.replace(/^\*/, '').trim().toLowerCase();

    // 1. Direct tag match
    const tagMatch = project.tags.some((tag) => {
      const lower = tag.toLowerCase();
      return lower === cleanSkill || lower.includes(cleanSkill) || cleanSkill.includes(lower);
    });
    if (tagMatch) return true;

    // 2. SKILL_PROJECT_MAP match
    const mapped = SKILL_PROJECT_MAP[skill] || SKILL_PROJECT_MAP[cleanSkill];
    if (mapped && mapped.project.toLowerCase().includes(project.title.toLowerCase())) {
      return true;
    }

    return false;
  };

  // Derive the active project smoothly: if a skill is highlighted and user hasn't explicitly picked a matching one, show the first match
  const activeSelectedProject = useMemo(() => {
    if (highlightedSkill) {
      if (!isProjectMatchingSkill(selectedProject, highlightedSkill)) {
        const firstMatch = projectsList.find((p) => isProjectMatchingSkill(p, highlightedSkill));
        if (firstMatch) return firstMatch;
      }
    }
    return selectedProject;
  }, [highlightedSkill, selectedProject, projectsList]);

  const currentIndex = projectsList.findIndex((p) => p.id === activeSelectedProject.id);

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
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-ibm text-3xl sm:text-4xl font-bold tracking-tight text-point mb-2">
          PROJECTS
        </h2>
        <p className="text-muted text-sm font-semibold">
          대표 프로젝트를 선택해 아키텍처 설계와 트러블슈팅, 최적화 성과를 확인해보세요.
        </p>
      </motion.div>

      {/* Active Skill Filter Banner */}
      {highlightedSkill && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 p-3.5 sm:p-4 rounded-xl bg-point/10 border border-point/30 flex items-center justify-between gap-3 shadow-sm"
        >
          <div className="flex items-center space-x-2 text-xs sm:text-sm">
            <Sparkles className="w-4 h-4 text-point shrink-0" />
            <span className="text-main">
              선택된 기술 <strong className="text-point font-bold">"{highlightedSkill}"</strong>(이)가 적용된 프로젝트를 강조 표시 중입니다.
            </span>
          </div>
          {onClearSkill && (
            <button
              type="button"
              onClick={onClearSkill}
              className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-secondary border border-card hover:border-point text-xs font-semibold text-muted hover:text-main transition-colors shrink-0"
            >
              <X className="w-3.5 h-3.5" />
              <span>강조 해제</span>
            </button>
          )}
        </motion.div>
      )}

      {/* Split Layout: Left 2x2 Grid (7 cols) + Right Detail Panel (5 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: 2x2 Project Cards Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {projectsList.map((project, idx) => {
            const isMatching = isProjectMatchingSkill(project, highlightedSkill ?? null);
            return (
              <ProjectCard
                key={project.id}
                project={project}
                isSelected={activeSelectedProject.id === project.id}
                isHighlighted={isMatching}
                isDimmed={Boolean(highlightedSkill && !isMatching)}
                highlightedSkillName={highlightedSkill}
                onSelect={handleSelectProject}
                onOpenModal={setActiveModalProject}
                idx={idx}
              />
            );
          })}
        </div>

        {/* Right Side: Permanent Elevation Detail Preview Panel */}
        <ProjectDetailPanel
          selectedProject={activeSelectedProject}
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
