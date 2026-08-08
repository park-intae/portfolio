export interface HeaderData {
  logoText: string;
  githubUrl: string;
  notionUrl: string;
  navItems: { id: string; label: string }[];
}

export interface HeroData {
  title: string;
  strengths: [string, string, string];
}

export interface MetricCard {
  id: string;
  value: string;
  label: string;
  iconName?: string;
}

export interface TechStackCategory {
  categoryName: string;
  skills: string[];
}

export interface AboutData {
  metrics: MetricCard[];
  techStackCategories: TechStackCategory[];
}

export interface ProjectTroubleshooting {
  problem: string;
  cause?: string;
  solution: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  detailedDescription: string;
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  // 신규 고도화 메타데이터 필드
  period?: string;
  teamType?: 'solo' | 'team';
  teamSize?: string;
  myRole?: string;
  contribution?: string;
  highlights?: string[];
  metrics?: ProjectMetric[];
  troubleshooting?: ProjectTroubleshooting;
}

export interface ProjectsData {
  projects: ProjectItem[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
}

export interface TrainingItem {
  id: string;
  title: string;
  institution: string;
  period: string;
  certificateOrNote?: string;
}

export interface ExperienceData {
  experiences: ExperienceItem[];
  trainings: TrainingItem[];
}
