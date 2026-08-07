import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ProjectModal } from '../components/common/ProjectModal';
import { DotNavigation } from '../components/common/DotNavigation';
import type { ProjectItem } from '../types/portfolio';

const mockProject: ProjectItem = {
  id: 'test-proj',
  title: '웹 접근성 테스트 프로젝트',
  subtitle: 'a11y 무결성 테스트 용도',
  description: '설명문',
  detailedDescription: '상세 설명문',
  tags: ['React', 'a11y'],
  imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600'
};

describe('Accessibility (a11y) Unit Tests', () => {
  it('should render ProjectModal with correct ARIA dialog attributes', () => {
    const handleClose = vi.fn();
    render(<ProjectModal project={mockProject} onClose={handleClose} />);

    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeInTheDocument();
    expect(dialog).toHaveAttribute('aria-modal', 'true');
    expect(dialog).toHaveAttribute('aria-labelledby', 'modal-title');
    expect(screen.getByText('웹 접근성 테스트 프로젝트')).toBeInTheDocument();
  });

  it('should trigger onClose when Esc key is pressed inside modal', () => {
    const handleClose = vi.fn();
    render(<ProjectModal project={mockProject} onClose={handleClose} />);

    fireEvent.keyDown(window, { key: 'Escape' });
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('should set aria-current="true" on the active DotNavigation item', () => {
    render(<DotNavigation />);
    const heroDot = screen.getByLabelText('Scroll to Hero');
    expect(heroDot).toHaveAttribute('aria-current', 'true');
  });
});
