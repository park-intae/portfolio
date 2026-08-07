import headerJson from './json/header.json';
import heroJson from './json/hero.json';
import aboutJson from './json/about.json';
import projectsJson from './json/projects.json';
import experienceJson from './json/experience.json';

import type { HeaderData, HeroData, AboutData, ProjectsData, ExperienceData } from '../types/portfolio';

export const headerContent: HeaderData = headerJson as unknown as HeaderData;
export const heroContent: HeroData = heroJson as unknown as HeroData;
export const aboutContent: AboutData = aboutJson as unknown as AboutData;
export const projectsContent: ProjectsData = projectsJson as unknown as ProjectsData;
export const experienceContent: ExperienceData = experienceJson as unknown as ExperienceData;
