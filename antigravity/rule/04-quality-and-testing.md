# 🧪 Quality & Unit Testing Rule (단위 테스트 및 품질 검증 규칙)

이 문서는 Vitest + React Testing Library 기반 단위 테스트(Unit Testing) 수칙 및 정적 검증 파이프라인을 규정합니다.

---

## 🧪 1. 단위 테스트 수칙 (Vitest Unit Testing)

1. **Vitest + React Testing Library 표준 스택**:
   - `npm run test` 명령어로 유닛 테스트 모음(Test Suites) 전체를 무결점 통과시켜야 합니다.
   - `npm run test:watch` 명령어를 활용해 로컬 개발 중 테스트 감시 모드를 실행할 수 있습니다.
2. **신규 기능 작성 시 전용 테스트 동시 작성 의무 (Mandatory Test Co-creation)**:
   - 신규 기능 컴포넌트(`src/components/*`)나 공통 유틸리티(`src/utils/*`)를 추가할 때는 **반드시 대응하는 단위 테스트 파일(`src/test/*.test.ts(x)`)을 함께 동시 작성**해야 합니다.
3. **Git Push 전 커버리지 70% 커트라인 검증 규칙 (Coverage Threshold Rule)**:
   - 명시적 `git push` 지시를 수행하기 전에는 반드시 `npx vitest run --coverage`를 실행하여 **전체 라인/구문 커버리지가 최소 70% 이상을 통과해야만 Push를 진행**합니다. (현재 85.7% 유지 중)
4. **필수 테스트 영역**:
   - **JSON 데이터 무결성 검사 ([`jsonContent.test.ts`](file:///C:/Users/pit19/OneDrive/%EB%B0%94%ED%83%95%20%ED%99%94%EB%A9%B4/portfolio/src/test/jsonContent.test.ts))**: `hero.json`, `about.json`, `projects.json`, `experience.json`, `header.json` 데이터 유효성 테스트
   - **스무스 스크롤 유틸리티 검사 ([`scroll.test.ts`](file:///C:/Users/pit19/OneDrive/%EB%B0%94%ED%83%95%20%ED%99%94%EB%A9%B4/portfolio/src/test/scroll.test.ts))**: rAF 애니메이션 및 ID 스크롤 연동 검증
   - **도트 네비게이션 검사 ([`DotNavigation.test.tsx`](file:///C:/Users/pit19/OneDrive/%EB%B0%94%ED%83%95%20%ED%99%94%EB%A9%B4/portfolio/src/test/DotNavigation.test.tsx))**: 라벨 렌더링 및 이징 유틸리티 호출 트리거 검증
   - **컴포넌트 렌더링 & 인터랙션 검사**:
     - `Navbar.test.tsx`, `ProjectsSection.test.tsx`, `ProjectCard.test.tsx`, `ProjectDetailPanel.test.tsx`, `MobileDrawer.test.tsx` 등 13개 전용 유닛 테스트 파일로 인터랙션 검증

---

## 🔍 2. 검증 명령어 종합

1. **단위 테스트 실행**: `npm run test`
2. **테스트 커버리지 측정 (Push 전 70%+ 확인)**: `npx vitest run --coverage`
3. **ESLint 린팅**: `npm run lint`
4. **TypeScript & Vite 빌드**: `npm run build`
