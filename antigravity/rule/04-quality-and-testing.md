# 🧪 Quality & Unit Testing Rule (단위 테스트 및 품질 검증 규칙)

이 문서는 Vitest + React Testing Library 기반 단위 테스트(Unit Testing) 수칙 및 정적 검증 파이프라인을 규정합니다.

---

## 🧪 1. 단위 테스트 수칙 (Vitest Unit Testing)

1. **Vitest + React Testing Library 표준 스택**:
   - `npm run test` 명령어로 유닛 테스트 모음(Test Suites) 전체를 무결점 통과시켜야 합니다.
   - `npm run test:watch` 명령어를 활용해 로컬 개발 중 테스트 감시 모드를 실행할 수 있습니다.
2. **필수 테스트 영역**:
   - **JSON 데이터 무결성 검사 ([`jsonContent.test.ts`](file:///C:/Users/pit19/OneDrive/%EB%B0%94%ED%83%95%20%ED%99%94%EB%A9%B4/portfolio/src/test/jsonContent.test.ts))**: `hero.json`, `about.json`, `projects.json`, `experience.json`, `header.json` 데이터 유효성 테스트
   - **컴포넌트 렌더링 & 인터랙션 검사 ([`Navbar.test.tsx`](file:///C:/Users/pit19/OneDrive/%EB%B0%94%ED%83%95%20%ED%99%94%EB%A9%B4/portfolio/src/test/Navbar.test.tsx), [`ProjectsSection.test.tsx`](file:///C:/Users/pit19/OneDrive/%EB%B0%94%ED%83%95%20%ED%99%94%EB%A9%B4/portfolio/src/test/ProjectsSection.test.tsx))**:
     - 다크/라이트 테마 버튼 클릭 시 `localStorage` 및 `dark` 클래스 전환 테스트
     - 프로젝트 2x2 카드 클릭 시 우측 상시 엘리베이션 디테일 패널 갱신 테스트

---

## 🔍 2. 검증 명령어 종합

1. **단위 테스트 실행**: `npm run test`
2. **ESLint 린팅**: `npm run lint`
3. **TypeScript & Vite 빌드**: `npm run build`
