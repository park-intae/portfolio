# 🚀 Park Intae Interactive Portfolio SPA

React 19, TypeScript, Vite, Tailwind CSS v4, Framer Motion 및 **Antigravity AI 오케스트레이션 하네스** 기반으로 구현된 단일 페이지 애플리케이션(SPA) 모던 포트폴리오 웹사이트입니다.

---

## 🌟 주요 기능 및 UX/UI 하이라이트

- **디자인 가이드 & 와이어프레임 1:1 준수**:
  - `STYLE_GUIDE.png` (Pretendard & IBM Plex Sans KR 폰트, BG `#F8F9FA` / `#0B0F19`, Point Blue `#0066FF` 테마)
  - `WIREFRAME.png` (Header 🌙/GitHub/Notion, Hero 3줄 요약, ABOUT ME 4개 지표 카드, PROJECTS Split View, EXPERIENCE 2컬럼)
- **다크/라이트 테마 스위처**:
  - 헤더 🌙 토글 버튼을 통한 테마 스위칭, `localStorage` 동기화 및 `prefers-color-scheme` 자동 시스템 테마 감지
  - 컴포넌트 내 무채색 하드코딩 0%, 전용 CSS 테마 변수 유틸리티 클래스(`.text-main`, `.text-muted`, `.border-card`, `.glass-panel`) 100% 통제
- **📱 모바일 & 태블릿 전용 슬라이드 드로어 (`Navbar.tsx`)**:
  - 태블릿 미만(`lg:hidden` = < 1024px) 해상도에서 햄버거 토글 버튼 및 `framer-motion` `AnimatePresence` 슬라이드인 오버레이 드로어 제공
  - 드로어 열림 시 body 스크롤 락 및 메뉴 선택 시 시네마틱 스무스 스크롤 이동 후 자동 닫힘
- **🎬 시네마틱 감속 스무스 스크롤 (`src/utils/scroll.ts`)**:
  - `requestAnimationFrame` 60fps + `easeInOutCubic` 750ms custom smooth scroll 적용 (도트 네비게이션, 모바일 메뉴, 푸터 Top 스크롤에 공통 적용)
- **♿ 웹 접근성 (Web Accessibility / a11y)**:
  - `:focus-visible` 고대비 포커스 링, `ProjectModal` ARIA dialog (`role="dialog"`, `aria-modal="true"`), 모달 닫기 시 포커스 복원(`focus restoration`), 이미지 lazy/async 로딩
- **PROJECTS 카드 엘리베이션, 수직 고정 화살표 & 터치 스와이프 제스처**:
  - 좌측 2x2 카드 (`ProjectCard.tsx` 모듈 분리) & 우측 상시 디테일 패널 (`ProjectDetailPanel.tsx` 모듈 분리)
  - 디테일 패널 Y축 고정 포지션(`top-[20rem]`) 미니멀 투명 화살표 버튼, **60fps 터치 스와이프 제스처 (`drag="x"`)** 및 모바일 퀵 스크롤 탑 버튼 탑재
- **JSON 파일 데이터 완전 분리**:
  - 코드를 수정하지 않고 `src/content/json/` 폴더 내 JSON 파일만 수정하면 모든 화면 텍스트 즉시 변경
- **Vitest 38개 단위 테스트 & 85.7% 커버리지 무결성**:
  - 13개 테스트 파일 / 38개 단위 테스트(100% 통과), **85.7% 라인/구문 커버리지 달성** (Git Push 전 70%+ 커트라인 자동화 수칙 준수)

---

## 📂 JSON 콘텐츠 수정 가이드 (`src/content/json/`)

사용자는 아래 5개 JSON 파일의 값만 수정하여 포트폴리오 정보를 자유롭게 편집할 수 있습니다:

```
src/content/json/
├── header.json      # 브랜드 로고명, GitHub URL, Notion URL
├── hero.json        # 메인 타이틀 ("어쩌구 저쩌구 개발자 박인태 입니다") 및 3줄 요약 강점 불릿
├── about.json       # 상단 4개 수치 지표 카드 (95+ Lighthouse 등) 및 카테고리별 Tech Stack
├── projects.json    # 2x2 카드 및 우측 상세 디테일 패널용 프로젝트 데이터 목록
└── experience.json  # Experience (경력) 및 Training (교육/자격) 데이터
```

---

## 🛠️ 기술 스택 (Tech Stack)

| 구분 | 사용 기술 |
| :--- | :--- |
| **Core** | React 19, TypeScript, Vite |
| **Styling** | Tailwind CSS v4, Lucide Icons, Glassmorphic CSS Theme Variables |
| **Fonts** | Pretendard (Primary), IBM Plex Sans KR (Secondary) |
| **Testing & Coverage** | Vitest, React Testing Library, `@vitest/coverage-v8` (38 Unit Tests / 85.7% Coverage) |
| **CI/CD** | GitHub Actions, GitHub Pages Auto-Deploy |
| **Harness** | Antigravity AI Orchestrator (`antigravity/*`) |

---

## 🧪 테스트 & 검증 명령어 (Scripts)

| 명령어 | 설명 |
| :--- | :--- |
| `npm run dev` | 로컬 개발 서버 실행 |
| `npm run test` | Vitest 38개 단위 테스트 전체 1회 실행 |
| `npm run test:watch` | 테스트 감시 모드 실행 (실시간 테스트) |
| `npm run test:coverage` | 테스트 커버리지 리포트 실행 (Push 전 70%+ 통과 확인) |
| `npm run lint` | ESLint 코드 스타일 및 정적 분석 (0 Errors / 0 Warnings) |
| `npm run build` | TypeScript 타입 체크 (`tsc -b`) 및 Vite 프로덕션 빌드 |

---

## 🤖 Antigravity 하네스 체계 (`antigravity/`)

프로젝트의 디자인 가이드, 아키텍처 규칙, CI/CD 표준 및 개발 로드맵은 `antigravity/` 폴더에서 중앙 통제됩니다:

- [`antigravity/MAIN_ORCHESTRATOR.md`](file:///C:/Users/pit19/OneDrive/%EB%B0%94%ED%83%95%20%ED%99%94%EB%A9%B4/portfolio/antigravity/MAIN_ORCHESTRATOR.md): 메인 오케스트레이터 및 진행 현황표
- `antigravity/rule/`: 아키텍처, 스타일링, 코드 컨벤션, 단위 테스트 (Push 전 70%+ 커버리지), CI/CD 규칙
- `antigravity/workflow/`: Phase 1 & Phase 2 (Step 01 ~ Step 04) 파이프라인 지침서
