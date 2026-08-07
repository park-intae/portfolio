import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ProjectModal } from '../components/common/ProjectModal';
import { projectsContent } from '../content';

describe('ProjectModal Component Unit Tests', () => {
  const sampleProject = projectsContent.projects[0];

  it('should not render anything when project is null', () => {
    const { container } = render(<ProjectModal project={null} onClose={() => {}} />);
    expect(container).toBeEmptyDOMElement();
  });

  it('should render project detail information when project is provided', () => {
    render(<ProjectModal project={sampleProject} onClose={() => {}} />);
    expect(screen.getByText(sampleProject.title)).toBeInTheDocument();
    expect(screen.getByText(sampleProject.subtitle)).toBeInTheDocument();
  });

  it('should trigger onClose callback when close button is clicked', () => {
    const handleClose = vi.fn();
    render(<ProjectModal project={sampleProject} onClose={handleClose} />);

    const closeBtn = screen.getByLabelText('Close modal');
    fireEvent.click(closeBtn);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
