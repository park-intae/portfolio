import type { AboutData } from '../../types/portfolio';

export const aboutContent: AboutData = {
  metrics: [
    {
      id: 'metric-1',
      value: '-90.7%',
      label: '번들 & 로딩 최적화',
      iconName: 'Lighthouse',
      description: 'Recharts 청크 6분할과 비동기 CSS 파이프라인으로 메인 번들 947kB를 88kB로 압축하고 Lighthouse 98점을 달성했습니다.'
    },
    {
      id: 'metric-2',
      value: '< 100ms',
      label: '비동기 체감 응답',
      iconName: 'Zap',
      description: '무거운 AI 연산과 정량 추천을 분리한 비동기 투트랙 설계와 SWR 캐시로 체감 지연 시간을 97% 단축했습니다.'
    },
    {
      id: 'metric-3',
      value: '410+',
      label: '전사 테스트 스위트',
      iconName: 'ShieldCheck',
      description: 'Vitest 기반 단위·통합 410개 전수 통과로 회귀 버그를 사전에 차단하고 안전한 리팩토링 환경을 구축했습니다.'
    },
    {
      id: 'metric-4',
      value: 'Full-Stack',
      label: '풀스택 아키텍처',
      iconName: 'Layers',
      description: 'React 19 SPA부터 NestJS 백엔드, PostgreSQL DB, Expo 모바일 앱까지 전 구간 아키텍처를 직접 완성했습니다.'
    }
  ],
  techStackCategories: [
    {
      categoryName: 'Front-End',
      skills: [
        '*TypeScript',
        '*React 19',
        '*Next.js (App Router)',
        '*TanStack Query',
        '*Tailwind CSS v4',
        '*Redux Toolkit',
        '*Zustand',
        'Expo (React Native)',
        'Vite',
        'Framer Motion',
        'Chart.js',
        'Vue.js 3'
      ]
    },
    {
      categoryName: 'Back-End & Security',
      skills: [
        '*NestJS',
        '*Supabase (Edge Functions)',
        '*PostgreSQL',
        'MySQL',
        'Prisma',
        'Drizzle ORM',
        'REST API',
        'Cheerio (Web Crawling)'
      ]
    },
    {
      categoryName: 'AI & Architecture Strategy',
      skills: [
        '*Gemini API',
        '*Prompt Engineering',
        '*Multi-stage Fallback',
        '*Two-Track Async Pattern',
        'Harness Engineering'
      ]
    },
    {
      categoryName: 'DevOps & Testing',
      skills: [
        '*Turborepo (SSOT)',
        '*Vitest',
        '*React Testing Library',
        'Docker & Docker Compose',
        'GitHub Actions CI/CD',
        'Git',
        'Figma'
      ]
    }
  ]
} satisfies AboutData;

export const SKILL_PROJECT_MAP: Record<string, { project: string; metric: string }> = {
  'TypeScript': { project: 'Boim / YOGI / DoorFrame / SpellBook', metric: '@boim/shared-types 및 packages/shared-types 기반 SSOT 구축 및 런타임 타입 결함 원천 차단' },
  'React 19': { project: 'Boim / SpellBook / Portfolio', metric: 'Next.js App Router 연동, 3열 SPA 캘린더 대시보드 및 최신 훅 비동기 상태 관리' },
  'Next.js (App Router)': { project: 'YOGI / SpellBook', metric: '동적 메타데이터 생성으로 Lighthouse SEO 100점 달성' },
  'Tailwind CSS v4': { project: '전체 프로젝트', metric: '100% CSS 테마 변수 기반 다크/라이트 모드 무결점 대응' },
  'Redux Toolkit': { project: 'DoorFrame', metric: '초기 선언 단계 로컬 캐시 동기 주입 & 30분 수명 주기 SWR 패턴' },
  'Zustand': { project: 'Boim / SaveIT', metric: '하이브리드 세션 스토리지 어댑터 및 도메인별 상태 슬라이스 분리' },
  'Vite': { project: 'Boim / DoorFrame / Portfolio', metric: 'manualChunks 6분할 및 메인 번들 90.7% 감축(947kB → 88kB), Lighthouse 96점' },
  'Framer Motion': { project: 'SpellBook / Portfolio', metric: '3D 페이지 플립 시퀀스 동기화 및 부드러운 스크롤 인터랙션' },
  'NestJS': { project: 'Boim / YOGI', metric: '@nestjs/schedule 자정 크론 알림 배치 및 ParseUUIDPipe 비정상 파라미터 유입 차단' },
  'Supabase (Edge Functions)': { project: 'DoorFrame', metric: '서버리스 프록시를 통한 민감 API 키 격리 및 2차 폴백 파이프라인' },
  'PostgreSQL': { project: 'Boim / YOGI', metric: 'Prisma ORM 기반 스키마 모델링 및 요금제 정량 가중치 쿼리 인덱싱' },
  'Gemini API': { project: 'Boim / YOGI / SaveIT', metric: '규칙 기반 2단계 무중단 하이브리드 진단 및 금융 소비 피드백 파이프라인' },
  'Two-Track Async Pattern': { project: 'YOGI', metric: '100ms 정량 추천 선행 렌더링 + AI 추론 비동기 스켈레톤 분리' },
  'Multi-stage Fallback': { project: 'Boim / DoorFrame / YOGI', metric: 'Gemini AI 장애 시 RuleBasedDiagnosisEngine 100% 무중단 폴백' },
  'Turborepo (SSOT)': { project: 'Boim / YOGI', metric: 'pnpm 모노레포 공용 패키지로 프론트-백엔드 간 DTO 불일치 원천 차단' },
  'Vitest': { project: 'Boim (211개) / YOGI (89개) / DoorFrame (120+) / Portfolio (43개)', metric: '전사 TDD 단위 테스트 스위트 구축 및 엣지 케이스 회귀 결함 사전 방어' },
  'React Testing Library': { project: 'Boim / YOGI / DoorFrame / Portfolio', metric: '사용자 인터랙션 및 모달 접근성(WAI-ARIA) 전수 검증' },
  'Docker & Docker Compose': { project: 'Boim / SpellBook / YOGI', metric: 'Nginx 1.27 Alpine + NestJS + PostgreSQL 컨테이너 격리망 구축' },
  'GitHub Actions CI/CD': { project: 'Boim / Portfolio / YOGI', metric: 'Lint -> Test -> Build 전수 통과 시 무결점 자동 배포 파이프라인' },
  'Expo (React Native)': { project: 'Boim', metric: 'SDK 58 기반 expo-camera 무수동(Zero-click) 뷰파인더 오토 스캐너 및 네이티브 앱 연동' },
  'TanStack Query': { project: 'Boim', metric: 'Factory Query Key 및 낙관적 업데이트 기반 서버 상태 분리' },
};
