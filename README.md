# 👨‍💻 Park Intae | Frontend Developer Portfolio

프론트엔드 개발자 박인태의 개인 포트폴리오 웹사이트입니다. 
사용자 경험(UX)과 웹 성능 최적화를 최우선으로 고려하여 설계 및 개발되었습니다.

👉 **[Live Demo 보러가기](https://park-intae.github.io/portfolio)**

---

## ✨ 핵심 하이라이트 (Highlights)

### 🚀 1. 압도적인 웹 성능 최적화 (Lighthouse 96+)
사용자에게 쾌적한 렌더링 경험을 제공하기 위해 세밀한 성능 튜닝을 진행했습니다.
- **이미지 최적화**: 기존 PNG 이미지를 차세대 웹 포맷인 **WebP로 변환**하여 용량을 대폭 절감하고 로딩 속도를 향상시켰습니다.
- **번들 사이즈 최적화 (Code Splitting)**: Vite의 `manualChunks`를 활용해 `react`, `framer-motion` 등 무거운 벤더(Vendor) 라이브러리를 별도의 청크로 분리하여 초기 로딩(FCP) 병목을 제거했습니다.
- **SEO 및 접근성 개선**: 메타 태그(`description`), `robots.txt`, 올바른 언어 속성(`lang="ko"`) 및 WAI-ARIA(접근성 속성)를 적용하여 검색 엔진 최적화와 웹 접근성을 동시에 확보했습니다.

### 🌊 2. 매끄럽고 직관적인 UI/UX
- **다크/라이트 테마**: 사용자 기기의 시스템 환경(`prefers-color-scheme`)을 자동 감지하며, 🌙/☀️ 토글 버튼을 통해 수동 전환 및 `localStorage` 동기화가 가능합니다. 하드코딩된 색상을 배제하고 100% CSS 테마 변수 유틸리티 기반으로 설계되었습니다.
- **인터랙티브 애니메이션**: `framer-motion`을 활용하여 페이지 트랜지션, 모달 창 팝업, 그리고 모바일 환경에서의 자연스러운 슬라이드 드로어 메뉴를 구현했습니다.
- **시네마틱 스무스 스크롤**: `requestAnimationFrame`과 커스텀 Easing 함수(`easeInOutCubic`)를 적용하여 도트 네비게이션과 메뉴 이동 시 부드러운 스크롤 감각을 제공합니다.

### ⚙️ 3. 지속적 통합 및 자동 배포 (CI/CD) 파이프라인
개발부터 배포까지의 모든 과정을 자동화하여 코드의 품질과 생산성을 높였습니다.
- **GitHub Actions**: `main` 브랜치에 코드가 푸시되면 자동으로 `Lint(ESLint) -> Test(Vitest) -> Build(Vite)` 과정을 거칩니다.
- **안전한 배포 보장**: 단위 테스트(총 41개 케이스)와 문법 검사를 100% 통과한 무결점 코드만이 **GitHub Pages**로 자동 배포(Auto-Deploy)됩니다.

---

## 🛠️ 기술 스택 (Tech Stack)

| Category | Technologies |
| :--- | :--- |
| **Core** | `React 19`, `TypeScript`, `Vite` |
| **Styling** | `Tailwind CSS v4`, `Lucide Icons`, `Glassmorphism UI` |
| **Animation** | `Framer Motion` |
| **Testing** | `Vitest`, `React Testing Library` (41 Unit Tests) |
| **CI/CD** | `GitHub Actions`, `GitHub Pages` |
| **Code Quality** | `ESLint`, `Prettier` |

---

## 📂 프로젝트 아키텍처 및 특징

- **데이터-뷰 분리 설계**: 포트폴리오의 모든 텍스트 및 이력 데이터는 `src/content/json/` 폴더 내 JSON 파일(`projects.json`, `about.json` 등)로 완전 분리되어 있어, UI 컴포넌트 코드 수정 없이도 손쉽게 내용을 업데이트할 수 있습니다.
- **반응형 웹 (Responsive Web)**: 데스크톱, 태블릿, 모바일까지 모든 기기 해상도에 대응하도록 완벽한 반응형 레이아웃을 갖추었습니다.
- **커스텀 훅 (Custom Hooks)**: 스크롤 이벤트, 모달 제어, 테마 스위칭 등 반복되는 로직을 커스텀 훅으로 추상화하여 코드 재사용성을 높였습니다.

---

## 🚀 로컬 실행 방법 (Local Setup)

```bash
# 1. 저장소 클론
git clone https://github.com/park-intae/portfolio.git
cd portfolio

# 2. 패키지 설치
npm install

# 3. 로컬 개발 서버 실행
npm run dev

# 4. 테스트 실행
npm run test
```

---

*© 2026 Park Intae. All rights reserved.*
