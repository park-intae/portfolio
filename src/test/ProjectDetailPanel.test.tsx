import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ProjectDetailPanel } from '../components/sections/projects/ProjectDetailPanel';
import { projectsContent } from '../content';

describe('ProjectDetailPanel Component Unit Tests', () => {
  const sampleProjects = projectsContent.projects;
  const mockPrev = vi.fn();
  const mockNext = vi.fn();
  const mockOpenModal = vi.fn();
  const mockScrollToList = vi.fn();

  it('should render active project details correctly', () => {
    render(
      <ProjectDetailPanel
        selectedProject={sampleProjects[0]}
        currentIndex={0}
        onPrev={mockPrev}
        onNext={mockNext}
        onOpenModal={mockOpenModal}
        onScrollToList={mockScrollToList}
        projectsList={sampleProjects}
      />
    );

    expect(screen.getAllByText('Featured Detail').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(sampleProjects[0].title).length).toBeGreaterThanOrEqual(1);
  });

  it('should trigger onPrev and onNext when clicking fixed chevron buttons', () => {
    render(
      <ProjectDetailPanel
        selectedProject={sampleProjects[0]}
        currentIndex={0}
        onPrev={mockPrev}
        onNext={mockNext}
        onOpenModal={mockOpenModal}
        onScrollToList={mockScrollToList}
        projectsList={sampleProjects}
      />
    );

    const prevButton = screen.getByLabelText('이전 프로젝트');
    const nextButton = screen.getByLabelText('다음 프로젝트');

    fireEvent.click(prevButton);
    expect(mockPrev).toHaveBeenCalled();

    fireEvent.click(nextButton);
    expect(mockNext).toHaveBeenCalled();
  });

  it('should trigger onScrollToList when clicking mobile scroll top button', () => {
    render(
      <ProjectDetailPanel
        selectedProject={sampleProjects[0]}
        currentIndex={0}
        onPrev={mockPrev}
        onNext={mockNext}
        onOpenModal={mockOpenModal}
        onScrollToList={mockScrollToList}
        projectsList={sampleProjects}
      />
    );

    const scrollButton = screen.getByText('프로젝트 전체 목록으로 올라가기');
    fireEvent.click(scrollButton);
    expect(mockScrollToList).toHaveBeenCalled();
  });
});
