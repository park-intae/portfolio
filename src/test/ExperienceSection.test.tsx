import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ExperienceSection } from '../components/sections/ExperienceSection';
import { experienceContent } from '../content';

describe('ExperienceSection Component Unit Tests', () => {
  it('should render section title and 2-column headers Experience and Training', () => {
    render(<ExperienceSection />);
    expect(screen.getByText('EXPERIENCE & TRAINING')).toBeInTheDocument();
    expect(screen.getByText('Experience')).toBeInTheDocument();
    expect(screen.getByText('Training')).toBeInTheDocument();
  });

  it('should render experience items from experience.json', () => {
    render(<ExperienceSection />);
    experienceContent.experiences.forEach((exp) => {
      expect(screen.getByText(exp.title)).toBeInTheDocument();
      expect(screen.getByText(exp.organization)).toBeInTheDocument();
    });
  });

  it('should render training items from experience.json', () => {
    render(<ExperienceSection />);
    experienceContent.trainings.forEach((trn) => {
      expect(screen.getByText(trn.title)).toBeInTheDocument();
      expect(screen.getByText(trn.institution)).toBeInTheDocument();
    });
  });
});
