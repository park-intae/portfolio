import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { OptimizationBadge } from '../components/common/OptimizationBadge';
import type { OptimizationImpact } from '../types/portfolio';

const mockImpact: OptimizationImpact = {
  before: '단일 번들 947kB (456ms 차단)',
  after: 'Vite 청크 분할 88kB (0ms 차단)',
  impact: '번들 90.7% 감축'
};

describe('OptimizationBadge Component Unit Tests', () => {
  it('should render before, after, and impact metrics correctly', () => {
    render(<OptimizationBadge impact={mockImpact} />);

    expect(screen.getByText('성능 및 UX 최적화 성과')).toBeDefined();
    expect(screen.getByText(mockImpact.impact)).toBeDefined();
    expect(screen.getByText('Before')).toBeDefined();
    expect(screen.getByText(mockImpact.before)).toBeDefined();
    expect(screen.getByText('After')).toBeDefined();
    expect(screen.getByText(mockImpact.after)).toBeDefined();
  });
});
