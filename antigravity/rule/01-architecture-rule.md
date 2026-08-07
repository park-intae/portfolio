# 📐 Architecture & JSON Data Rule (아키텍처 및 JSON 데이터 격리 규칙)

이 문서는 **[`WIREFRAME.png`](file:///C:/Users/pit19/OneDrive/%EB%B0%94%ED%83%95%20%ED%99%94%EB%A9%B4/portfolio/antigravity/resource/WIREFRAME.png)** 와이어프레임, **JSON 데이터 파일 참조 원칙**, 도트 네비게이션, 프로젝트 엘리베이션 및 **향후 DB/어드민 확장성 고려 아키텍처**를 규정합니다.

---

## 📄 1. JSON 파일 기반 데이터 격리 규칙 (JSON Reference Mandate)

1. **텍스트 하드코딩 엄격 금지**:
   - JSX/TSX 컴포넌트 내부에는 사용자 표출용 텍스트, 타이틀, 설명문, 링크, 지표 등을 절대로 하드코딩하지 않습니다.
2. **`src/content/json/` 폴더 기반 분리**:
   - 사용자가 자유롭게 수정할 수 있도록 모든 포트폴리오 데이터는 `src/content/json/` 하위의 독립된 JSON 파일로 관리합니다.
     - `header.json`: 헤더 로고명, GitHub URL, Notion URL
     - `hero.json`: 메인 타이틀, 3줄 요약 강점 불릿
     - `about.json`: 4개 수치 하이라이트 지표 카드, 카테고리별 Tech Stack
     - `projects.json`: 프로젝트 2x2 카드 및 상세 프리뷰 데이터
     - `experience.json`: Experience (경력) 및 Training (교육/자격)
3. **JSON 모듈 로더 및 타입 안전성**:
   - `src/types/portfolio.ts` 타입 정의와 JSON 구조를 일치시키고, JSON 데이터를 임포트/참조하여 컴포넌트에 주입합니다.

---

## 🖼️ 2. 와이어프레임 섹션 및 모바일 반응형 폴백 규칙

```
+-------------------------------------------------------------------------+  [●] Hero
| [Header] GitHub & Notion 링크 버튼 | 다크/라이트 모드 토글 (🌙)           |  [○] About
+-------------------------------------------------------------------------+  [○] Projects
| [Hero Section] (hero.json 참조)                                         |  [○] Experience
|   - 메인 타이틀: "~ 개발자 박인태 입니다"                                 |  
|   - 3줄 요약 불릿 포인트                                                |  ← Side Floating
+-------------------------------------------------------------------------+  Dot Navigation
| [ABOUT ME Section] (about.json 참조)                                    |  (우측 고정, md 이상)
|   - 4개 하이라이트 지표 카드 (95+ Lighthouse 등)                         |
|   - Tech Stack 박스 (Front-End, Back-End 등 카테고리별 스킬 아이콘/배지)    |
+-------------------------------------------------------------------------+
| [PROJECTS Section] (projects.json 참조)                                 |
|   - Left: 2x2 Grid 프로젝트 카드 (Hover 시 Elevation 모션)             |
|   - Right: 상시 Elevation 상태의 대형 프로젝트 상세 디테일 패널          |
|            (기본값: 첫 번째 프로젝트 디테일 표출)                      |
+-------------------------------------------------------------------------+
| [EXPERIENCE & TRAINING Section] (experience.json 참조)                  |
|   - Left Column: Experience (경력 및 프로젝트 경험)                     |
|   - Right Column: Training (교육, 훈련 및 자격)                         |
+-------------------------------------------------------------------------+
| [Footer] 카피라이트 및 Top 스크롤                                       |
+-------------------------------------------------------------------------+
```

---

## 💻 3. PROJECTS 섹션 상세 동작 규칙

1. **프로젝트 카드 호버 엘리베이션 (Hover Elevation)**:
   - 좌측 2x2 그리드의 각 프로젝트 카드 마우스 호버 시 상단 이동(`y: -8px`)과 입체적 림 하이라이트 섀도우 적용
2. **프로젝트 디테일 세션 상시 엘리베이션 (Permanent Elevation)**:
   - 우측 프로젝트 상세 디테일 패널은 상시 깊이감 있는 엘리베이션 상태(`shadow-2xl`, 입체적 보더 & 섀도우) 유지
3. **디테일 세션 초기값**:
   - 진입 시 `projects.json`의 첫 번째 프로젝트(`projects[0]`) 정보 기본 선택 및 표시

---

## 🧭 4. 사이드 도트 네비게이션 (Dot Navigation) 규격
- **위치**: 화면 우측 중앙 고정 (`fixed right-6 top-1/2 -translate-y-1/2 z-50`)
- **기능**: 활성 섹션 하이라이트, 클릭 시 부드러운 스크롤 이동, 모바일 hidden 처리 (`hidden md:flex`)

---

## 🏗️ 5. 데이터 및 상태 관리 전략 (State Management & Admin Roadmap)

1. **Phase 1 (현재)**: `src/content/json/*.json` 파일 참조 및 React 19 내장 상태로 경량화
2. **Phase 2 (향후)**: `/admin` 관리자 페이지 구축 시 JSON 수정을 어드민 GUI로 시각화하고 DB 연동으로 확장
