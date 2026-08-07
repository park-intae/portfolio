import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HeroSection } from '../components/sections/HeroSection';
import { heroContent } from '../content';

describe('HeroSection Component Unit Tests', () => {
  it('should render main headline title from hero.json', () => {
    render(<HeroSection />);
    expect(screen.getByText(heroContent.title)).toBeInTheDocument();
  });

  it('should render all 3 strength bullets from hero.json', () => {
    render(<HeroSection />);
    heroContent.strengths.forEach((bullet) => {
      expect(screen.getByText(bullet)).toBeInTheDocument();
    });
  });
});
