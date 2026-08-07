import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { DotNavigation } from '../components/common/DotNavigation';
import * as scrollUtil from '../utils/scroll';

describe('DotNavigation Component Unit Tests', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('should render all 4 side dot navigation items', () => {
    render(<DotNavigation />);
    expect(screen.getByLabelText('Scroll to Hero')).toBeInTheDocument();
    expect(screen.getByLabelText('Scroll to About Me')).toBeInTheDocument();
    expect(screen.getByLabelText('Scroll to Projects')).toBeInTheDocument();
    expect(screen.getByLabelText('Scroll to Experience & Training')).toBeInTheDocument();
  });

  it('should trigger smoothScrollTo utility when a dot button is clicked', () => {
    const scrollSpy = vi.spyOn(scrollUtil, 'smoothScrollTo').mockImplementation(() => {});

    render(<DotNavigation />);
    const aboutDot = screen.getByLabelText('Scroll to About Me');
    
    fireEvent.click(aboutDot);
    expect(scrollSpy).toHaveBeenCalledWith('about', 750);
  });
});
