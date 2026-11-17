import type { HeaderData } from '../../types/portfolio';

export const headerContent: HeaderData = {
  logoText: 'PARK INTAE',
  githubUrl: 'https://github.com/park-intae',
  notionUrl: 'https://app.notion.com/p/shmellang/SPA-3d3b99225a2b8025abd0e8448ed82d85',
  email: 'pintae04@gmail.com',
  phone: '010-2384-2498',
  location: '서울시 강동구',
  navItems: [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience & Training' }
  ]
} satisfies HeaderData;
