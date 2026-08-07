import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AboutSection } from '../components/sections/AboutSection';
import { aboutContent } from '../content';

describe('AboutSection Component Unit Tests', () => {
  it('should render section title ABOUT ME and metric values from about.json', () => {
    render(<AboutSection />);
    expect(screen.getByText('ABOUT ME')).toBeInTheDocument();

    aboutContent.metrics.forEach((metric) => {
      expect(screen.getByText(metric.value)).toBeInTheDocument();
      expect(screen.getByText(metric.label)).toBeInTheDocument();
    });
  });

  it('should render tech stack categories and skill items', () => {
    render(<AboutSection />);
    expect(screen.getByText('Tech Stack')).toBeInTheDocument();

    aboutContent.techStackCategories.forEach((cat) => {
      expect(screen.getByText(cat.categoryName)).toBeInTheDocument();
    });
  });
});
