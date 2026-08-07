# 🚀 Antigravity Main Orchestrator

이 문서는 포트폴리오 웹 애플리케이션 개발을 총괄 제어하는 **메인 오케스트레이터(Main Orchestrator)** 가이드입니다.  
AI 에이전트와 엔지니어 간의 협업 하네스를 제공하며, `resource/` 리소스, 규칙(`rule/`), 워크플로우(`workflow/PhaseX/`)를 통합하여 디자인 가이드, 와이어프레임 1:1 스키마 명세, **JSON 파일 데이터 완전 분리**, **Vitest 단위 테스트(19개 전 항목 통과)**, **CDN 폰트 로드**, **테마 동기화**, **도트 네비게이션**, **프로젝트 엘리베이션/모바일 폴백** 및 **향후 DB/어드민 확장성**을 엄격히 준수합니다.

---

## 🎯 1. 오케스트레이터 핵심 목표
1. **페이즈별 모듈화 워크플로우 관리 (Phase-based Workflow Architecture)**: `antigravity/workflow/` 하위에 페이즈별 독립 디렉토리(`Phase1/`, `Phase2/` 등)를 생성하여 작업 깔끔함 및 가독성을 유지
2. **Phase 2 UI 고도화 진행**: 사용자가 작성하는 상세 지침서(`Phase2/step-01-ui-enhancement.md`)에 기반하여 UI/UX 및 가독성 고도화 실행
3. **CSS 변수 기반 테마 유틸리티 통제 (Centralized CSS Theme Variable Mandate)**: Tailwind 하드코딩 색상 클래스(예: `text-slate-900`, `dark:text-slate-100`)의 컴포넌트 직접 주입을 엄격히 금지하며, 반드시 `:root`/`html.light`/`html.dark` CSS 변수와 연동된 전용 유틸리티 클래스(`.text-main`, `.text-muted`, `.text-caption`, `.border-card`, `.bg-secondary`)를 통해서만 스타일을 통제
4. **단위 테스트 무결성 (Unit Testing)**: Vitest + React Testing Library 기반 23개 유닛 테스트 통과 (`npm run test`) 및 GitHub Actions CI 테스트 자동화 완료
5. **JSON 파일 기반 데이터 분리 (JSON Reference Mandate)**: 모든 화면 텍스트를 `src/content/json/` 폴더 내 5개 JSON 파일로 분리하고 하드코딩 엄격 금지
6. **상태 관리 & 확장성 전략**: 현재 Phase 1/2는 `src/content/json/*.json` 및 React 19 내장 상태로 경량화하여 번들 최적화하고, 추후 백엔드 DB 연동 및 `/admin` 관리자 페이지 구축 시 전역 상태 관리(Zustand 등) 도입

---

## 📂 2. 하네스 시스템 파일 구조

```
antigravity/
├── MAIN_ORCHESTRATOR.md                 # [현재 파일] 메인 오케스트레이션 총괄 컨트롤
├── error-control/                       # 에러 통제, 예외 가이드 및 복구 이력 트래킹
│   ├── ERROR_HANDLING_GUIDE.md         # 에러 통제 및 대응 표준 지침서
│   └── resolution-history.md           # 과거 발생 에러 및 해결 사례 히스토리
├── resource/                            # 권위 있는 디자인 및 레이아웃 자원
│   ├── STYLE_GUIDE.png                 # Pretendard/IBM Plex Sans KR, BG/Font/Point Blue 팔레트
│   └── WIREFRAME.png                   # Header(🌙/GitHub/Notion), Hero, ABOUT, PROJECTS, EXPERIENCE
├── rule/                                # 개발 표준 및 제약 사항
│   ├── 01-architecture-rule.md         # 와이어프레임 1:1 스키마 + JSON 참조 원칙 + 도트 네비게이션 + 모바일 폴백 + DB/어드민 아키텍처
│   ├── 02-styling-rule.md              # STYLE_GUIDE 폰트 CDN / 라이트 모드 고대비 테마 & 스타일링 규격
│   ├── 03-code-convention.md           # JSON 분리 수칙, TypeScript 타입 엄격성, React 컴포넌트 컨벤션
│   ├── 04-quality-and-testing.md       # Vitest 단위 테스트, 빌드 검증, Lint, 성능 및 검증 체크리스트
│   └── 05-cicd-rule.md                 # CI/CD 자동화 파이프라인 (GitHub Actions)
└── workflow/                            # 페이즈별 실행 파이프라인 폴더
    ├── Phase1/                          # [Phase 1: SPA 모던 포트폴리오 기틀 구축 - Completed]
    │   ├── step-01-requirements-and-planning.md
    │   ├── step-02-design-system-and-layout.md
    │   ├── step-03-feature-implementation.md
    │   ├── step-04-motion-and-polish.md
    │   └── step-05-qa-and-optimization.md
    └── Phase2/                          # [Phase 2: UI/UX 고도화 - In Progress]
        ├── step-01-ui-enhancement.md    # [Completed] 라이트/다크 테마 고대비화
        └── step-02-motion-and-animation.md # [In Progress] 60fps 마이크로 애니메이션 세팅
```

---

## 📊 3. 작업 진행 현황 (Progress Tracker Matrix)

| Step | 단계명 | 관련 워크플로우 문서 | 상태 | 비고 |
| :--- | :--- | :--- | :---: | :--- |
| **Phase1-All** | **Phase 1 Foundations** | `antigravity/workflow/Phase1/*` | **[Completed]** | SPA 구조, JSON 데이터 격리, 19개 유닛테스트, CI/CD 완비 |
| **Phase2-01** | **UI Enhancement** | [`step-01-ui-enhancement.md`](file:///C:/Users/pit19/OneDrive/%EB%B0%94%ED%83%95%20%ED%99%94%EB%A9%B4/portfolio/antigravity/workflow/Phase2/step-01-ui-enhancement.md) | **[Completed]** | CSS 테마 변수 기반 유틸리티 전면 통제 & 라이트/다크 고대비 완료 |
| **Phase2-02** | **Motion & Animation** | [`step-02-motion-and-animation.md`](file:///C:/Users/pit19/OneDrive/%EB%B0%94%ED%83%95%20%ED%99%94%EB%A9%B4/portfolio/antigravity/workflow/Phase2/step-02-motion-and-animation.md) | **[Completed]** | 60fps 마이크로 애니메이션, 모달 트랜지션 & 도트 양방향 감지 완료 |

*상태 값 규격: `[Pending]`, `[In Progress]`, `[Blocked]`, `[Completed]`*

---

## 🛡️ 4. 안전 가이드라인 및 커밋/푸시 통제 원칙 (Safeguards & Commit Protocol)

1. **페이즈별 폴더 관리 수칙 (Phase Directory Rule)**:
   - 각 페이즈별 가이드 문서를 `antigravity/workflow/PhaseX/` 폴더 하위에 격리 관리합니다.
2. **워크플로우 완료 상태 동기화 (Workflow Completion Tracking)**:
   - 각 작업 단계가 완료될 때마다 해당 파이프라인 파일 내 체크리스트 항목(`- [x]`)과 진행 현황표(`MAIN_ORCHESTRATOR.md`)의 상태를 `[Completed]`로 즉시 갱신합니다.
3. **원격 푸시 제한 및 로컬 커밋 원칙 (Strict Git Push Restriction)**:
   - **사용자의 명시적인 명령(지시)이 없는 경우 절대로 `git push`를 자발적으로 진행하지 않습니다.**
   - 지시 전까지 커밋도 사용자의 요청이 있을 때만 실행합니다.
   - **모든 Git 커밋 메시지(Commit Message)는 반드시 한국어(Korean)로 작성합니다.**
4. **실시간 빌드 & 단위 테스트 작성 및 검증 (Test-Driven Integrity & Co-creation)**:
   - 신규 기능 컴포넌트나 유틸리티 파일(`src/utils/*`, `src/components/*` 등)을 새로 생성할 때에는 **반드시 대응하는 전용 Vitest 단위 테스트 파일(`src/test/*.test.ts(x)`)을 함께 동시 작성**해야 합니다.
   - 파일 수정/추가 후에는 반드시 `npm run test`, `npm run lint`, `npm run build`를 100% 통과시킨 후 커밋합니다.
5. **에러 컨트롤 및 복구 이력 갱신 지침 (Error Control Protocol)**:
   - 디버깅 중 발생한 빌드 오류, 테마 미반영, 타입 불일치 등 주요 예외나 버그를 해결한 후에는 반드시 `antigravity/error-control/resolution-history.md`에 에러 원인과 조치 내역을 즉시 기록하여 이력을 갱신합니다.
