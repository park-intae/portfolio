# 🎨 Styling & Visual Rules (스타일링, 폰트 및 테마 토글 규칙)

이 문서는 `antigravity/resource/STYLE_GUIDE.png`를 준수한 디자인 시스템, 폰트 로드 방식, 테마 토글 매커니즘 및 애니메이션 표준을 규정합니다.

---

## 💎 1. 리소스 라이브러리 가이드 (`antigravity/resource/`)

본 프로젝트의 스타일링 및 디자인 시스템은 **[`STYLE_GUIDE.png`](file:///C:/Users/pit19/OneDrive/%EB%B0%94%ED%83%95%20%ED%99%94%EB%A9%B4/portfolio/antigravity/resource/STYLE_GUIDE.png)**에 명시된 팔레트와 폰트를 엄격히 준수합니다.

---

## 🔤 2. 타이포그래피 및 폰트 CDN 로딩 명세

1. **폰트 페어링**:
   - **Primary Font**: `Pretendard` (본문, 카드 텍스트, 설명문)
   - **Secondary / Accent Font**: `IBM Plex Sans KR` (헤더, 섹션 타이틀, 지표 수치)
2. **웹폰트 로드 방식 (`index.html` 또는 `index.css`)**:
   - Pretendard CDN: `https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css`
   - IBM Plex Sans KR Google Fonts: `https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@400;500;600;700&display=swap`
3. **CSS font-family 바인딩**:
   ```css
   :root {
     --font-pretendard: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif;
     --font-ibm-plex: 'IBM Plex Sans KR', sans-serif;
   }

   body {
     font-family: var(--font-pretendard);
   }

   .font-ibm {
     font-family: var(--font-ibm-plex);
   }
   ```

---

## 🎨 3. 색상 팔레트 & 다크/라이트 테마 매커니즘

`STYLE_GUIDE.png` 기준:
1. **Background (BG)**: `#F8F9FA` ~ `#FAFAFA` (라이트 테마 기본) / `#0B0F19` (다크 테마)
2. **Font Color**: `#0F172A` / `#111827` (선명하고 고급스러운 딥 다크 차콜/네이비)
3. **Point Color**: `#0066FF` / `#0052FF` (비브런트 일렉트릭 블루 - 섹션 타이틀, 포인트 배지, 버튼 하이라이트)

### 다크 / 라이트 모드 테마 스위칭 및 변수 통제 규격 (Theme State & Variable Spec)
- **CSS 변수 기반 중앙집중식 스타일링 통제 원칙 (Mandate)**: 
  * 컴포넌트 내부에 Tailwind 무채색 하드코딩 클래스(`text-slate-900`, `dark:text-slate-100` 등)를 직접 주입하는 것을 **엄격히 금지**합니다.
  * 반드시 `:root`, `html.light`, `html.dark` 전역 변수(`--text-main`, `--text-muted`, `--text-caption`, `--card-bg`, `--card-border`)와 1:1 결합된 전용 테마 유틸리티 클래스(`.text-main`, `.text-muted`, `.text-caption`, `.border-card`, `.bg-secondary`)만으로 컴포넌트 스타일을 통제합니다.
- **헤더 토글 버튼 (🌙)**: 클릭 시 `document.documentElement` (`<html>` 태그)에 `dark` 및 `light` 클래스를 유연하게 토글합니다.
- **초기 테마 동기화 순서**:
  1) `localStorage.getItem('theme')`에 저장된 모드가 있으면 해당 모드 적용
  2) 저장된 모드가 없으면 `window.matchMedia('(prefers-color-scheme: dark)')` 시스템 설정을 감지하여 적용
  3) 모드 변경 시 즉시 `localStorage.setItem('theme', mode)`에 저장하여 이탈 후 재진입 시에도 테마 유지

---

## 🚀 4. 애니메이션 및 인터랙션 가이드

- **Framer Motion**: Section entrance(whileInView), 호버 확대(whileHover), 모달 팝업(AnimatePresence) 등에 60fps 인터랙션 적용
- **Point Blue Glow**: 호버 및 강조 카드 시 `#0066FF` 기반의 은은한 블루 글로우 섀도우 적용
- **시네마틱 이징 스크롤 (Cinematic Custom Smooth Scroll)**: 
  - 도트 네비게이션 및 푸터 'Back to Top' 버튼 클릭 시 브라우저 기본 `scrollIntoView` 대신 `requestAnimationFrame` + `easeInOutCubic` 750ms 커스텀 스크롤 유틸리티 (`src/utils/scroll.ts`)를 적용하여 스크롤이 부드럽게 감속하면서 지점까지 따라 이동하는 시네마틱 감성 모션 구현
