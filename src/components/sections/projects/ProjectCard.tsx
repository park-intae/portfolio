import React from 'react';
import { motion } from 'framer-motion';
import { Maximize2 } from 'lucide-react';
import type { ProjectItem } from '../../../types/portfolio';

interface ProjectCardProps {
  project: ProjectItem;
  isSelected: boolean;
  onSelect: (project: ProjectItem) => void;
  onOpenModal: (project: ProjectItem) => void;
  idx: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  isSelected,
  onSelect,
  onOpenModal,
  idx
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: idx * 0.1 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onSelect(project)}
      className={`glass-panel p-5 rounded-2xl cursor-pointer border relative group transition-colors ${
        isSelected
          ? 'border-point bg-point/5 shadow-lg shadow-point/15 ring-2 ring-point/30'
          : 'border-card'
      }`}
    >
      {/* Project Image Thumbnail */}
      <div className="relative h-40 w-full mb-4 rounded-xl overflow-hidden bg-secondary">
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
            onOpenModal(project);
          }}
          aria-label="Expand project detail modal"
          className="absolute bottom-2.5 right-2.5 p-2 rounded-lg glass-panel text-main opacity-0 group-hover:opacity-100 transition-opacity hover:bg-point hover:text-white shadow-md"
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
};
