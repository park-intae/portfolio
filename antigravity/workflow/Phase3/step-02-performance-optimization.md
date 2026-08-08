# ⚡ Phase 3-02: 최종 웹 성능 최적화 (Performance Optimization)

본 문서는 `MAIN_ORCHESTRATOR.md` 및 `PLAN.md`에 의거하여 포트폴리오 웹사이트의 마지막 단계인 **성능 최적화(Lighthouse 95점+ 달성)**를 수행하기 위한 실행 가이드(하네스)입니다.

## 🎯 핵심 목표
1. **CDN 폰트 최적화**: 현재 로컬 폰트에만 의존 중인 Pretendard 및 IBM Plex Sans KR 폰트를 외부 CDN으로 연결하고, 텍스트 깜빡임 현상을 방지합니다.
2. **차세대 이미지 포맷(WebP) 적용**: 무거운 PNG 썸네일 이미지들을 WebP 포맷으로 변환하여 초기 로딩 속도를 대폭 개선합니다.
3. **Vite 번들 및 코드 스플리팅 최적화**: 빌드 시 `vendor` 청크를 분리하여 브라우저 캐싱 효율을 높입니다.

---

## 📝 상세 실행 단계 (Action Items)

### [ ] 1. 폰트(Font) 로딩 최적화
- **작업 파일**: `index.html` (또는 `src/styles/index.css`)
- **내용**: 
  - Pretendard (눈누 CDN 등) 및 IBM Plex Sans KR (Google Fonts) 웹 폰트 링크 추가
  - 로딩 최적화를 위해 `<link rel="preconnect">` 적용
  - 폰트 로드 지연 시 텍스트가 안 보이는 현상(FOIT)을 막기 위해 폰트 설정에 `font-display: swap` 반드시 포함

### [ ] 2. 이미지 포맷 WebP 변환 (차세대 이미지 적용)
- **작업 내용**:
  - `public/images/` 폴더 내의 `.png` 썸네일 5개(총 약 1.7MB)를 `.webp` 형식으로 압축 변환
  - `src/content/json/projects.json` 내부의 `imageUrl` 경로를 `.png`에서 `.webp`로 전부 일괄 수정
  - 변환 후 기존 `.png` 파일은 용량 확보를 위해 삭제

### [ ] 3. Vite 빌드(Build) 및 번들 최적화
- **작업 파일**: `vite.config.ts`
- **내용**: 
  - `build.rollupOptions` 속성 추가
  - `manualChunks`를 설정하여 무거운 라이브러리(`react`, `react-dom`, `framer-motion`)를 별도의 vendor 파일로 분리 (Code Splitting)
  - 빌드 최적화 플러그인이 필요할 경우 점검 후 적용

### [ ] 4. 최종 성능 측정 및 커버리지 검증
- **작업 내용**:
  - 로컬 프로덕션 빌드(`npm run build` & `npm run preview`) 후 브라우저 Lighthouse 성능(Performance) 점수 **95점 이상** 달성 확인
  - 코드 변경 후 `npm run test:coverage`를 실행하여 70% 이상의 무결성이 깨지지 않았는지 교차 검증

---

## 🛑 오케스트레이터 제약 사항 (Constraints)
- 이 단계에서는 새로운 UI 컴포넌트를 추가하거나 디자인 레이아웃을 변경하지 않습니다. 오직 '성능(Performance)' 지표 향상에만 집중합니다.
- 작업 완료 후 `PLAN.md`와 `MAIN_ORCHESTRATOR.md`의 Phase 3-02 상태를 `[Completed]`로 변경합니다.
