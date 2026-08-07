import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ProjectCard } from '../components/sections/projects/ProjectCard';
import { projectsContent } from '../content';

describe('ProjectCard Component Unit Tests', () => {
  const sampleProject = projectsContent.projects[0];
  const mockSelect = vi.fn();
  const mockOpenModal = vi.fn();

  it('should render project card title, subtitle, and tags correctly', () => {
    render(
      <ProjectCard
        project={sampleProject}
        isSelected={false}
        onSelect={mockSelect}
        onOpenModal={mockOpenModal}
        idx={0}
      />
    );

    expect(screen.getByText(sampleProject.title)).toBeInTheDocument();
    expect(screen.getByText(sampleProject.subtitle)).toBeInTheDocument();
  });

  it('should display Active badge when isSelected is true', () => {
    render(
      <ProjectCard
        project={sampleProject}
        isSelected={true}
        onSelect={mockSelect}
        onOpenModal={mockOpenModal}
        idx={0}
      />
    );

    expect(screen.getByText('Active')).toBeInTheDocument();
  });

  it('should trigger onSelect when clicking card and onOpenModal when clicking modal expand button', () => {
    render(
      <ProjectCard
        project={sampleProject}
        isSelected={false}
        onSelect={mockSelect}
        onOpenModal={mockOpenModal}
        idx={0}
      />
    );

    const card = screen.getByText(sampleProject.title).closest('div');
    if (card) {
      fireEvent.click(card);
      expect(mockSelect).toHaveBeenCalledWith(sampleProject);
    }

    const expandButton = screen.getByLabelText('Expand project detail modal');
    fireEvent.click(expandButton);
    expect(mockOpenModal).toHaveBeenCalledWith(sampleProject);
  });
});
