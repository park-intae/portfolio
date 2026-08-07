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
});
