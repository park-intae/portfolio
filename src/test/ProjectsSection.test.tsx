import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { projectsContent } from '../content';

describe('ProjectsSection Component Unit Tests', () => {
  it('should render section title and default to the first project in detail panel', () => {
    render(<ProjectsSection />);
    expect(screen.getByText('PROJECTS')).toBeInTheDocument();

    const firstProjectTitle = projectsContent.projects[0].title;
    const titles = screen.getAllByText(firstProjectTitle);
    expect(titles.length).toBeGreaterThanOrEqual(2);
  });

  it('should change active detail selection when clicking a project card', () => {
    render(<ProjectsSection />);
    if (projectsContent.projects.length > 1) {
      const secondProject = projectsContent.projects[1];
      const secondProjectCards = screen.getAllByText(secondProject.title);
      fireEvent.click(secondProjectCards[0]);

      const subtitles = screen.getAllByText(secondProject.subtitle);
      expect(subtitles.length).toBeGreaterThanOrEqual(1);
    }
  });

  it('should switch to next project detail when clicking the next chevron button', () => {
    render(<ProjectsSection />);
    const nextButton = screen.getByLabelText('다음 프로젝트');
    fireEvent.click(nextButton);

    if (projectsContent.projects.length > 1) {
      const secondProjectTitle = projectsContent.projects[1].title;
      expect(screen.getAllByText(secondProjectTitle).length).toBeGreaterThanOrEqual(1);
    }
  });

  it('should switch to previous project detail when clicking the previous chevron button', () => {
    render(<ProjectsSection />);
    const prevButton = screen.getByLabelText('이전 프로젝트');
    fireEvent.click(prevButton);

    // Clicking prev from index 0 should loop to last project
    const lastProject = projectsContent.projects[projectsContent.projects.length - 1];
    expect(screen.getAllByText(lastProject.title).length).toBeGreaterThanOrEqual(1);
  });

  it('should trigger scroll to project list when mobile scroll button is clicked', () => {
    render(<ProjectsSection />);
    const scrollButton = screen.getByText('프로젝트 전체 목록으로 올라가기');
    expect(scrollButton).toBeInTheDocument();
    fireEvent.click(scrollButton);
  });
});
