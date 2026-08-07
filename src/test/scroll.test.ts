import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { smoothScrollTo } from '../utils/scroll';

describe('smoothScrollTo Utility Unit Tests', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.spyOn(window, 'scrollTo').mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should call window.scrollTo during rAF animation when passed a Y position', () => {
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true });
    
    // Request smooth scroll to 500px
    smoothScrollTo(500, 500);

    // Fast-forward animation timers
    vi.advanceTimersByTime(250);
    expect(window.scrollTo).toHaveBeenCalled();

    vi.advanceTimersByTime(500);
    expect(window.scrollTo).toHaveBeenCalled();
  });

  it('should find element by ID and scroll to its position', () => {
    const dummyElement = document.createElement('div');
    dummyElement.id = 'target-section';
    vi.spyOn(dummyElement, 'getBoundingClientRect').mockReturnValue({
      top: 300,
      bottom: 600,
      left: 0,
      right: 500,
      width: 500,
      height: 300,
      x: 0,
      y: 300,
      toJSON: () => {}
    });
    document.body.appendChild(dummyElement);

    smoothScrollTo('target-section', 500);
    vi.advanceTimersByTime(300);

    expect(window.scrollTo).toHaveBeenCalled();

    document.body.removeChild(dummyElement);
  });
});
