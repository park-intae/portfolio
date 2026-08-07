import { describe, it, expect } from 'vitest';
import { headerContent, heroContent, aboutContent, projectsContent, experienceContent } from '../content';

describe('JSON Content Data Validation Unit Tests', () => {
  it('should load header content with valid logo text and links', () => {
    expect(headerContent.logoText).toBeTruthy();
    expect(headerContent.githubUrl).toContain('github.com');
  });

  it('should load hero content with title and exactly 3 strength bullets', () => {
    expect(heroContent.title).toBeTruthy();
    expect(heroContent.strengths).toHaveLength(3);
  });

  it('should load about content with 4 highlight metric cards', () => {
    expect(aboutContent.metrics).toHaveLength(4);
    expect(aboutContent.techStackCategories.length).toBeGreaterThan(0);
  });

  it('should load projects content with at least one project', () => {
    expect(projectsContent.projects.length).toBeGreaterThan(0);
    const firstProject = projectsContent.projects[0];
    expect(firstProject.title).toBeTruthy();
    expect(firstProject.imageUrl).toBeTruthy();
  });

  it('should load experience content with experiences and trainings', () => {
    expect(experienceContent.experiences.length).toBeGreaterThan(0);
    expect(experienceContent.trainings.length).toBeGreaterThan(0);
  });
});
