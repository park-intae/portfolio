# 💻 Step 03: Feature Implementation (와이어프레임 섹션 구현)

본 워크플로우는 `antigravity/resource/WIREFRAME.png` 1:1 매핑 스키마, **프로젝트 엘리베이션 효과/초기화 규칙** 및 **모바일 반응형 폴백**에 맞춘 주요 섹션 컴포넌트를 개발하는 가이드입니다.

---

## 🎯 목표
- Hero Section: 메인 타이틀 + 3줄 요약 강점 불릿 (`strengths`)
- ABOUT ME Section: 4개 하이라이트 지표 카드 (`metrics`) + 카테고리별 Tech Stack 박스 (`techStackCategories`)
- PROJECTS Section:
  - 좌측 2x2 카드 그리드 (호버 시 부드러운 Elevation 모션)
  - 우측 프로젝트 디테일 패널 (상시 Elevation 상태 적용)
  - 디테일 패널 기본 초기값: 첫 번째 프로젝트 (`projects[0]`)
  - 모바일 반응형 폴백: 1컬럼 스택 및 카드 클릭 시 하단 디테일 영역으로 부드러운 스크롤 이동
- EXPERIENCE & TRAINING Section: Experience (경력) vs Training (교육/자격) 2컬럼 레이아웃

---

## 📝 세부 실행 단계

### 1단계: Hero Section (`src/components/sections/HeroSection.tsx`)
- [x] 대형 헤드라인 타이틀: "~ 개발자 박인태 입니다"
- [x] 3줄 불릿 요약 (강점, 경험, 개발 중심 축)

### 2단계: ABOUT ME Section (`src/components/sections/AboutSection.tsx`)
- [x] 상단 4개 수치 하이라이트 지표 카드 (95+ Lighthouse 등)
- [x] 하단 Tech Stack 박스 (Front-End 등 카테고리별 스킬 아이콘/배지)

### 3단계: PROJECTS Section (`src/components/sections/ProjectsSection.tsx`)
- [x] **초기 상태**: `selectedProject` state의 기본값을 `projects[0]`로 설정
- [x] **좌측 2x2 카드 그리드**:
  - 각 카드 마우스 호버 시 상단 이동(`y: -8px`) 및 입체 그림자(Elevation) 애니메이션 적용
  - 현재 선택된 카드는 강조 보더(`border-blue-500`) 및 활성 인디케이터 표시
- [x] **우측 상세 디테일 패널**:
  - 상시 엘리베이션 상태(`shadow-2xl`, 입체적 카드 그림자 & 하이라이트 테두리) 고정 유지
  - 선택된 프로젝트의 이미지, 상세 설명, 기술 태그, 데모/GitHub 링크 표출
- [x] **모바일/태블릿 반응형 폴백**:
  - `< lg` 해상도에서 1컬럼 배치 전환 및 카드 선택 시 디테일 뷰 영역으로 smooth scroll 처리

### 4단계: EXPERIENCE & TRAINING Section (`src/components/sections/ExperienceSection.tsx`)
- [x] 2컬럼 레이아웃: Left Column (`Experience`), Right Column (`Training`)

---

## ✅ 완료 검증 조건
- [x] PROJECTS 카드 호버 시 엘리베이션(y축 덤핑 & 그림자) 동작 정상
- [x] PROJECTS 우측 디테일 패널이 상시 엘리베이션 스타일로 렌더링됨
- [x] 진입 시 첫 번째 프로젝트(`projects[0]`) 디테일 정보가 기본 표시됨
- [x] 모바일 해상도에서 프로젝트 선택 시 하단 디테일 패널 스크롤 이동 정상 작동
