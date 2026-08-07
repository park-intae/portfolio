# 📋 Step 01: Requirements & JSON Data Setup (JSON 데이터 격리 구축)

본 워크플로우는 포트폴리오 웹 애플리케이션의 모든 표출 텍스트를 `src/content/json/` 폴더 내 JSON 파일로 분리 구축하여 사용자가 손쉽게 편집할 수 있도록 기반을 마련하는 1단계 가이드입니다.

---

## 🎯 목표
- 화면 표출용 텍스트의 JSON 파일 완전 분리 (`src/content/json/` 하위 5개 파일)
- `src/types/portfolio.ts` 타입 정의와 JSON 파일 구조의 1:1 매칭

---

## 📝 세부 실행 단계

### 1단계: JSON 파일 구축 (`src/content/json/`)
- [x] `header.json`: 로고명, GitHub URL, Notion URL
- [x] `hero.json`: 메인 타이틀, 3줄 요약 강점 불릿 배열 (`strengths`)
- [x] `about.json`: 4개 하이라이트 지표 카드 배열 (`metrics`), 카테고리별 Tech Stack 배열 (`techStackCategories`)
- [x] `projects.json`: 2x2 카드 및 상세 프리뷰용 프로젝트 데이터 배열 (`projects`)
- [x] `experience.json`: Experience (경력) 및 Training (교육/자격) 배열

### 2단계: TypeScript 타입 및 데이터 로더 연동 (`src/types/portfolio.ts` & `src/content/index.ts`)
- [x] JSON 데이터 구조와 매칭되는 TypeScript 타입 정의
- [x] 중앙 데이터 모듈 export 파일 구성

---

## ✅ 완료 검증 조건
- [x] `src/content/json/*.json` 파일 5개 생성 완료 및 유효한 JSON 구문 확인
- [x] `npx tsc --noEmit` 타입 검사 오류 없음
- [x] `MAIN_ORCHESTRATOR.md` 내 Step 01 상태를 `[Completed]`로 변경
