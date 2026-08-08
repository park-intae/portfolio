import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, ArrowUpRight, BookOpen } from 'lucide-react';
import type { OtherProjectItem } from '../../../types/portfolio';

interface OtherProjectsListProps {
  otherProjects?: OtherProjectItem[];
}

export const OtherProjectsList: React.FC<OtherProjectsListProps> = ({ otherProjects }) => {
  if (!otherProjects || otherProjects.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="mt-16 pt-12 border-t border-card"
    >
      <div className="flex items-center justify-between mb-8 flex-wrap gap-2">
        <h3 className="font-ibm text-xl sm:text-2xl font-bold text-main flex items-center space-x-2.5">
          <FolderGit2 className="w-5 h-5 text-point" />
          <span>Other Projects</span>
        </h3>
        <span className="text-xs font-semibold text-caption">
          서브 & 토이 프로젝트 ({otherProjects.length})
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {otherProjects.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="glass-panel p-5 rounded-xl border border-card hover:border-point/40 transition-all flex flex-col justify-between group shadow-card"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold text-point font-ibm bg-point/10 px-2 py-0.5 rounded">
                  {item.period || 'Sub Project'}
                </span>
                <div className="flex items-center space-x-2 text-muted">
                  {item.githubUrl && (
                    <a
                      href={item.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-point transition-colors p-1"
                      title="GitHub 저장소"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                  {item.demoUrl && (
                    <a
                      href={item.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-point transition-colors p-1"
                      title="데모 링크"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                  {item.notionUrl && (
                    <a
                      href={item.notionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-point transition-colors p-1"
                      title="노션 상세"
                    >
                      <BookOpen className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              <h4 className="font-ibm font-bold text-base text-main mb-1.5 group-hover:text-point transition-colors leading-snug">
                {item.title}
              </h4>
              <p className="text-xs text-muted font-medium line-clamp-3 leading-relaxed mb-4">
                {item.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-card/60">
              {item.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2 py-0.5 rounded text-[10px] font-semibold bg-secondary text-main border border-card"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
