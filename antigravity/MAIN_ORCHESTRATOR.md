# 🚀 Antigravity Main Orchestrator

이 문서는 포트폴리오 웹 애플리케이션 개발을 총괄 제어하는 **메인 오케스트레이터(Main Orchestrator)** 가이드입니다.  
AI 에이전트와 엔지니어 간의 협업 하네스를 제공하며, `resource/` 리소스, 규칙(`rule/`), 워크플로우(`workflow/`)를 통합하여 디자인 가이드, 와이어프레임 1:1 스키마 명세, **JSON 파일 데이터 완전 분리**, **CDN 폰트 로드**, **테마 동기화**, **도트 네비게이션**, **프로젝트 엘리베이션/모바일 폴백** 및 **향후 DB/어드민 확장성**을 엄격히 준수합니다.

---

## 🎯 1. 오케스트레이터 핵심 목표
1. **JSON 파일 기반 데이터 분리 (JSON Reference Mandate)**: 사용자가 용이하게 편집할 수 있도록 모든 화면 텍스트를 `src/content/json/` 폴더 내 JSON 파일로 분리하고 하드코딩 엄격 금지
2. **리소스 및 레이아웃 1:1 준수**: [`STYLE_GUIDE.png`](file:///C:/Users/pit19/OneDrive/%EB%B0%94%ED%83%95%20%ED%99%94%EB%A9%B4/portfolio/antigravity/resource/STYLE_GUIDE.png)(Pretendard/IBM Plex Sans KR, BG/Font/Point Blue 팔레트), [`WIREFRAME.png`](file:///C:/Users/pit19/OneDrive/%EB%B0%94%ED%83%95%20%ED%99%94%EB%A9%B4/portfolio/antigravity/resource/WIREFRAME.png)(레이아웃/1:1 스키마), 사이드 도트 네비게이션 & 프로젝트 엘리베이션/모바일 스크롤 폴백 100% 반영
3. **테마 & 폰트 고품질 세팅**: Pretendard / IBM Plex Sans KR CDN 로딩 및 `localStorage` + `prefers-color-scheme` 동기화 다크/라이트 테마 스위치 구현
4. **상태 관리 & 확장성 전략**: 현재 Phase 1은 `src/content/json/*.json` 및 React 19 내장 상태로 경량화하여 번들 최적화하고, 추후 Phase 2 백엔드 DB 연동 및 `/admin` 관리자 페이지 구축 시 전역 상태 관리(Zustand 등) 도입
5. **상태 및 컨텍스트 추적**: 작업 진행 상황을 상태 마트릭스로 명확하게 추적 및 갱신

---

## 📂 2. 하네스 시스템 파일 구조

```
antigravity/
├── MAIN_ORCHESTRATOR.md                 # [현재 파일] 메인 오케스트레이션 총괄 컨트롤
├── resource/                            # 권위 있는 디자인 및 레이아웃 자원
│   ├── STYLE_GUIDE.png                 # Pretendard/IBM Plex Sans KR, BG/Font/Point Blue 팔레트
│   └── WIREFRAME.png                   # Header(🌙/GitHub/Notion), Hero, ABOUT, PROJECTS, EXPERIENCE
├── rule/                                # 개발 표준 및 제약 사항
│   ├── 01-architecture-rule.md         # 와이어프레임 1:1 스키마 + JSON 참조 원칙 + 도트 네비게이션 + 모바일 폴백 + DB/어드민 아키텍처
│   ├── 02-styling-rule.md              # STYLE_GUIDE 폰트 CDN / 테마 동기화 & 스타일링 규격
│   ├── 03-code-convention.md           # JSON 분리 수칙, TypeScript 타입 엄격성, React 컴포넌트 컨벤션
│   ├── 04-quality-and-testing.md       # 빌드 검증, Lint, 성능 및 검증 체크리스트
│   └── 05-cicd-rule.md                 # CI/CD 자동화 파이프라인 (GitHub Actions)
└── workflow/                            # 단계별 실행 파이프라인
    ├── step-01-requirements-and-planning.md # Step 1: 기획 및 JSON 데이터 격리 구축
    ├── step-02-design-system-and-layout.md  # Step 2: 스타일 가이드, 폰트 CDN, 테마 토글 & 도트 네비게이션 구축
    ├── step-03-feature-implementation.md    # Step 3: WIREFRAME 섹션 구현 (Projects Hover/Permanent Elevation & 모바일 폴백)
    ├── step-04-motion-and-polish.md         # Step 4: 인터랙션 모션 & 비주얼 연출
    └── step-05-qa-and-optimization.md       # Step 5: 빌드 검증, SEO & 최적화
```

---

## 📊 3. 작업 진행 현황 (Progress Tracker Matrix)

| Step | 단계명 | 관련 워크플로우 문서 | 상태 | 비고 |
| :--- | :--- | :--- | :---: | :--- |
| **00** | **Harness & Roadmap Binding** | `antigravity/*` & `.github/workflows/deploy.yml` | **[Completed]** | STYLE_GUIDE, WIREFRAME, JSON분리수칙, CDN폰트/테마/DotNav/모바일폴백 & DB/Admin 로드맵 반영 완료 |
| **01** | **Planning & Data** | [`step-01-requirements-and-planning.md`](file:///C:/Users/pit19/OneDrive/%EB%B0%94%ED%83%95%20%ED%99%94%EB%A9%B4/portfolio/antigravity/workflow/step-01-requirements-and-planning.md) | **[Pending]** | JSON 데이터 구조 구축 (`src/content/json/*.json`) |
| **02** | **Design & Layout** | [`step-02-design-system-and-layout.md`](file:///C:/Users/pit19/OneDrive/%EB%B0%94%ED%83%95%20%ED%99%94%EB%A9%B4/portfolio/antigravity/workflow/step-02-design-system-and-layout.md) | **[Pending]** | Pretendard/IBM Plex Sans KR CDN, Point Blue, Header, Theme, DotNav |
| **03** | **Feature Implementation** | [`step-03-feature-implementation.md`](file:///C:/Users/pit19/OneDrive/%EB%B0%94%ED%83%95%20%ED%99%94%EB%A9%B4/portfolio/antigravity/workflow/step-03-feature-implementation.md) | **[Pending]** | WIREFRAME 섹션 구현 (Projects Hover Elevation / Permanent Elevation & 모바일 스크롤 폴백) |
| **04** | **Motion & Polish** | [`step-04-motion-and-polish.md`](file:///C:/Users/pit19/OneDrive/%EB%B0%94%ED%83%95%20%ED%99%94%EB%A9%B4/portfolio/antigravity/workflow/step-04-motion-and-polish.md) | **[Pending]** | Scroll 애니메이션, Hover 효과, 모달 모션 |
| **05** | **QA & Optimization** | [`step-05-qa-and-optimization.md`](file:///C:/Users/pit19/OneDrive/%EB%B0%94%ED%83%95%20%ED%99%94%EB%A9%B4/portfolio/antigravity/workflow/step-05-qa-and-optimization.md) | **[Pending]** | 린트, TypeScript 빌드, 반응형/접근성 검증 |

*상태 값 규격: `[Pending]`, `[In Progress]`, `[Blocked]`, `[Completed]`*
