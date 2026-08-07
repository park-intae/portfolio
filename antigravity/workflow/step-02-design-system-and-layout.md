# 🎨 Step 02: Design System & Global Layout (디자인 시스템, 폰트 & 테마 토글)

본 워크플로우는 `STYLE_GUIDE.png`, `WIREFRAME.png`, **CDN 폰트 연결**, **테마 토글 매커니즘** 및 **도트 네비게이션** 요구사항을 반영하여 레이아웃 프레임을 구축하는 가이드입니다.

---

## 🎯 목표
- `STYLE_GUIDE.png` 기준: Pretendard & IBM Plex Sans KR CDN 폰트 로드, BG 라이트/다크 테마, Point Blue(`0066FF`) 토큰 설정
- `WIREFRAME.png` 기준: GitHub & Notion 링크 버튼, 다크/라이트 테마 토글(🌙 + localStorage)을 포함한 Header 구현
- **도트 네비게이션**: 화면 우측 고정 플로팅 도트 컴포넌트(`DotNavigation.tsx`) 개발

---

## 📝 세부 실행 단계

### 1단계: 글로벌 폰트 및 스타일 토큰 설정 (`index.html` & `src/styles/index.css`)
- [x] `index.html`에 Pretendard 및 IBM Plex Sans KR CDN 폰트 link 추가
- [x] `src/styles/index.css`에 `--font-pretendard` 및 `--font-ibm-plex` 색상/폰트 변수 추가
- [x] 색상 변수: BG(`#F8F9FA` / `#0B0F19`), Font(`#0F172A`), Point Blue(`#0066FF`)

### 2단계: 헤더 및 테마 토글어 (`src/components/common/Navbar.tsx`)
- [x] 우상단: GitHub 링크 버튼, Notion 링크 버튼
- [x] 우상단: 다크/라이트 모드 스위처 토글 버튼 (달 모양 🌙)
- [x] `localStorage` 동기화 및 `matchMedia` 기반 시스템 테마 감지 처리

### 3단계: 도트 네비게이션 (`src/components/common/DotNavigation.tsx`)
- [x] 화면 우측 중앙 고정 플로팅 바 (`fixed right-6 top-1/2`)
- [x] 섹션별 도트 항목: Hero, About Me, Projects, Experience & Training
- [x] 활성 섹션 하이라이트(Point Blue) & 호버 시 툴팁 표시
- [x] 클릭 시 해당 섹션으로 부드러운 스크롤 연동 (`hidden md:flex`)

---

## ✅ 완료 검증 조건
- [x] Pretendard / IBM Plex Sans KR 폰트 정상 적용
- [x] 다크/라이트 모드 토글 클릭 시 `localStorage` 및 `<html>` 테마 클래스 정상 동기화
- [x] 도트 네비게이션 클릭 시 원하는 섹션으로 정확히 스크롤 이동
