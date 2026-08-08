# 🗺️ Antigravity Phase 3 Execution Plan (향후 실행 계획서)

본 문서는 **Phase 2 UI/UX 고도화 완료 이후 진행할 Phase 3 향후 작업 실행 플랜 문서**입니다.

---

## 🎯 Phase 3 핵심 추진 방향

1. **2, 3번 항목 제외 원칙**: 소셜 공유 메타태그(OG) 및 Contact 이메일 폼 섹션은 프로젝트 범위에서 제외합니다.
2. **콘텐츠 실재성 우선 확보**: `src/content/json/` 하위 5개 JSON 데이터에 실제 박인태 님의 포트폴리오 이력과 프로젝트 상세 정보를 채우는 작업을 최우선으로 진행합니다.
3. **성능 최적화는 맨 마지막 수행**: Lighthouse 성능 95점+ 달성을 위한 자원 최적화 및 코드 스플리팅은 모든 콘텐츠 배치가 끝난 최종 단계에 실행합니다.

---

## 📌 Phase 3 상세 실행 단계 (Steps)

### ✍️ Step 01: 포트폴리오 실제 데이터 & 콘텐츠 작성 (Content Realism)
- **작업 파일**: `src/content/json/` 하위 5개 JSON 파일
  - `header.json`: 실제 브랜드 로고명, GitHub URL, Notion URL
  - `hero.json`: 실제 헤드라인 타이틀 및 3줄 핵심 역량 요약 불릿
  - `about.json`: 실제 수치 하이라이트 (Lighthouse 95+ 등) 및 주력 기술 스택 카테고리별 뱃지
  - `projects.json`: 프로젝트 4개의 실제 설명, 성과, 깃허브/데모 URL 및 실기 캡처 썸네일 이미지
  - `experience.json`: 실제 경력(Experience) 및 교육/자격증(Training) 데이터
- **검증**: Vitest 38개 유닛 테스트 100% 통과 유지

---

### ⚡ Step 02: 최종 웹 성능 최적화 (Performance Optimization) - *최종 단계*
- **작업 내용**:
  - 프로젝트 썸네일 및 정적 이미지 WebP/AVIF 변환 및 이미지 크기 최적화
  - 폰트 CDN 로딩 최적화 (`font-display: swap`)
  - Vite 번들 분석 및 비동기 코드 스플리팅 (Code Splitting)
- **검증**: Google Lighthouse 성능(Performance) 점수 95점 이상 달성 및 `npm run test:coverage` 70%+ 유지

---

## 📊 진행 상태 추적

| Step | 과제명 | 대상 파일 | 상태 | 비고 |
| :--- | :--- | :--- | :---: | :--- |
| **Phase3-01** | **Content Realism** | `src/content/json/*.json` | **[Pending]** | 실제 포트폴리오 이력/프로젝트 데이터 작성 |
| **Phase3-02** | **Performance Optimization** | `src/styles/`, `src/utils/` | **[Pending]** | WebP 변환, Lighthouse 95점+ 최종 성능 최적화 |

*상태 값 규격: `[Pending]`, `[In Progress]`, `[Completed]`*
