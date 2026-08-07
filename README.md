# 🚀 Park Intae Interactive Portfolio SPA

React 19, TypeScript, Vite, Tailwind CSS v4, Framer Motion 및 **Antigravity AI 오케스트레이션 하네스** 기반으로 구현된 단일 페이지 애플리케이션(SPA) 모던 포트폴리오 웹사이트입니다.

---

## 🌟 주요 기능 및 UX/UI 하이라이트

- **디자인 가이드 & 와이어프레임 1:1 준수**:
  - `STYLE_GUIDE.png` (Pretendard & IBM Plex Sans KR 폰트, BG `#F8F9FA` / `#0B0F19`, Point Blue `#0066FF` 테마)
  - `WIREFRAME.png` (Header 🌙/GitHub/Notion, Hero 3줄 요약, ABOUT ME 4개 지표 카드, PROJECTS Split View, EXPERIENCE 2컬럼)
- **다크/라이트 테마 스위처**:
  - 헤더 🌙 토글 버튼을 통한 테마 스위칭, `localStorage` 동기화 및 `prefers-color-scheme` 자동 시스템 테마 감지
- **플로팅 사이드 도트 네비게이션**:
  - 화면 우측 고정 플로팅 도트(`DotNavigation.tsx`), 활성 섹션 스크롤 감지 및 부드러운 스크롤 이동
- **PROJECTS 카드 엘리베이션 & 반응형 모바일 폴백**:
  - 좌측 2x2 카드: 마우스 호버 시 위로 튀어 오르는 **Hover Elevation** 모션
  - 우측 상세 디테일 패널: **상시 Permanent Elevation** 적용 및 **첫 번째 프로젝트(`projects[0]`) 기본 선택**
  - 모바일 해상도(`< lg`)에서는 카드 클릭 시 하단 디테일 패널 영역으로 부드러운 스크롤 이동
- **JSON 파일 데이터 완전 분리**:
  - 코드를 수정하지 않고 `src/content/json/` 폴더 내 JSON 파일만 수정하면 모든 화면 텍스트 즉시 변경
- **Vitest 단위 테스트 & GitHub Actions CI/CD**:
  - 16개 단위 테스트(100% 통과) 수트 탑재 및 GitHub Push 시 자동 검증/배포 파이프라인 구축

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
| **Styling** | Tailwind CSS v4, Lucide Icons, Glassmorphic CSS |
| **Fonts** | Pretendard (Primary), IBM Plex Sans KR (Secondary) |
| **Testing** | Vitest, React Testing Library, JSDOM (16 Unit Tests) |
| **CI/CD** | GitHub Actions, GitHub Pages Auto-Deploy |
| **Harness** | Antigravity AI Orchestrator (`antigravity/*`) |

---

## 🧪 테스트 & 검증 명령어 (Scripts)

| 명령어 | 설명 |
| :--- | :--- |
| `npm run dev` | 로컬 개발 서버 실행 |
| `npm run test` | Vitest 16개 단위 테스트 1회 실행 |
| `npm run test:watch` | 테스트 감시 모드 실행 (실시간 테스트) |
| `npm run lint` | ESLint 코드 스타일 및 정적 분석 |
| `npm run build` | TypeScript 타입 체크 (`tsc -b`) 및 Vite 프로덕션 빌드 |

---

## 🤖 Antigravity 하네스 체계 (`antigravity/`)

프로젝트의 디자인 가이드, 아키텍처 규칙, CI/CD 표준 및 개발 로드맵은 `antigravity/` 폴더에서 중앙 통제됩니다:

- [`antigravity/MAIN_ORCHESTRATOR.md`](file:///C:/Users/pit19/OneDrive/%EB%B0%94%ED%83%95%20%ED%99%94%EB%A9%B4/portfolio/antigravity/MAIN_ORCHESTRATOR.md): 메인 오케스트레이터 및 진행 현황표
- `antigravity/rule/`: 아키텍처, 스타일링, 코드 컨벤션, 단위 테스트, CI/CD 규칙
- `antigravity/workflow/`: Step 01 ~ Step 05 파이프라인
