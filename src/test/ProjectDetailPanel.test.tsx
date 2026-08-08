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

  const mockFullProject = {
    id: 'test-full',
    title: 'Full Project',
    subtitle: 'Full Project Sub',
    description: 'Desc',
    detailedDescription: 'Detailed Desc',
    tags: ['React'],
    imageUrl: 'test.jpg',
    period: '2023.01 - 2023.02',
    teamType: 'team' as const,
    teamSize: '4인',
    myRole: 'Front-End',
    contribution: 'Made UI',
    highlights: ['Highlight 1', 'Highlight 2'],
    metrics: [{ label: 'Users', value: '1K' }],
    troubleshooting: { problem: 'Error', solution: 'Fixed' },
    demoUrl: 'http://demo',
    notionUrl: 'http://notion',
    githubUrl: 'http://github'
  };

  const mockSoloProject = {
    ...mockFullProject,
    id: 'test-solo',
    teamType: 'solo' as const
  };

  const mockMinimalProject = {
    id: 'test-minimal',
    title: 'Min Project',
    subtitle: 'Min Sub',
    description: 'Min Desc',
    detailedDescription: 'Min Det',
    tags: ['Vue'],
    imageUrl: 'test2.jpg'
  };

  it('should render all optional fields when fully provided', () => {
    render(
      <ProjectDetailPanel
        selectedProject={mockFullProject}
        currentIndex={0}
        onPrev={mockPrev}
        onNext={mockNext}
        onOpenModal={mockOpenModal}
        onScrollToList={mockScrollToList}
        projectsList={[mockFullProject]}
      />
    );
    expect(screen.getByText('2023.01 - 2023.02')).toBeDefined();
    expect(screen.getByText(/팀 \(4인\)/)).toBeDefined();
    expect(screen.getByText('담당 역할: Front-End')).toBeDefined();
    expect(screen.getByText('Highlight 1')).toBeDefined();
    expect(screen.getByText('Users')).toBeDefined();
    expect(screen.getByText('1K')).toBeDefined();
    expect(screen.getByText('문제: Error')).toBeDefined();
    expect(screen.getByText('해결: Fixed')).toBeDefined();
    expect(screen.getByText('데모 바로가기')).toBeDefined();
    expect(screen.getByText('Notion 포트폴리오')).toBeDefined();
  });

  it('should render solo team type correctly', () => {
    render(
      <ProjectDetailPanel
        selectedProject={mockSoloProject}
        currentIndex={0}
        onPrev={mockPrev}
        onNext={mockNext}
        onOpenModal={mockOpenModal}
        onScrollToList={mockScrollToList}
        projectsList={[mockSoloProject]}
      />
    );
    expect(screen.getByText('개인 (1인)')).toBeDefined();
  });

  it('should render minimal project without crashing or rendering optional blocks', () => {
    render(
      <ProjectDetailPanel
        selectedProject={mockMinimalProject}
        currentIndex={0}
        onPrev={mockPrev}
        onNext={mockNext}
        onOpenModal={mockOpenModal}
        onScrollToList={mockScrollToList}
        projectsList={[mockMinimalProject]}
      />
    );
    expect(screen.queryByText('담당 역할:')).toBeNull();
    expect(screen.queryByText('팀 (')).toBeNull();
    expect(screen.queryByText('데모 바로가기')).toBeNull();
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
