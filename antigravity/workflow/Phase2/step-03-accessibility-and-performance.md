# ♿ Phase 2 Step 03: 웹 접근성(a11y) & 성능 최적화 지침서

본 문서는 **Phase 2 UI/UX 고도화 3단계 과제**인 **웹 접근성(a11y - Accessibility) 강화 및 성능 최적화 구현 세팅 문서**입니다.  
키보드 탐색 무결성, ARIA 표준 준수, 시각적 포커스 피드백 및 자원 로딩 성능 최적화에 집중합니다.

---

## 🎯 1. 핵심 구현 목표

1. **웹 접근성 (a11y - Accessibility) 강화**:
   - 마우스 없이 키보드(Tab / Shift+Tab / Enter / Esc)만으로 모든 메뉴, 도트 네비게이션, 카드, 모달 및 링크를 탐색할 수 있는 키보드 접근성 100% 보장
   - Screen Reader 및 보조 공학 도구를 위한 명확한 `aria-label`, `aria-expanded`, `aria-hidden`, `role` 명세 준수
   - 포커스 이동 시 명확하고 고대비로 시각화되는 포커스 링 (`focus-visible:ring-2 focus-visible:ring-point`) 스타일링 주입
2. **성능 최적화 (Performance Optimization)**:
   - 이미지 자원 Lazy-loading 및 비동기 디코딩 적용 (`loading="lazy"`, `decoding="async"`)
   - 폰트 및 모듈 렌더링 최적화를 통한 Layout Reflow 방지

---

## 📝 2. 실행 세부 작업 명세

### 가. 웹 접근성(a11y) 시각적 피드백 & ARIA 태깅
- **포커스 링 (Focus Ring)**: 클릭 시에는 감추고 키보드 Tab 키 탐색 시에만 강조되는 `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-point focus-visible:ring-offset-2` 전역 스타일링
- **ProjectModal 대화상자**:
  - `role="dialog"`, `aria-modal="true"`, `aria-labelledby` 적용
  - Esc 키 누름 시 모달 닫기 및 포커스 복원(Focus Restoration)
- **DotNavigation & Navbar**:
  - `aria-label` 및 현재 선택된 섹션의 `aria-current="true"` 상태 명시

### 나. 자원 및 성능 최적화
- 이미지 태그 비동기 로딩 옵션 고도화

### 다. 테스트 & 자동화
- 대응하는 신규 웹 접근성(a11y) 단위 테스트 파일(`src/test/accessibility.test.tsx`) 작성
- 기존 23개 Vitest 유닛 테스트 통과 유지

---

## ✅ 완료 검증 체크리스트
- [x] 키보드 포커스 링(focus-visible) 전역 스타일링 주입 완료
- [x] ProjectModal 및 DotNavigation ARIA/키보드 접근성 구현 완료
- [x] 이미지 lazy/async 디코딩 최적화 완료
- [x] 신규 a11y 유닛 테스트 작성 및 Vitest 26개 100% 통과 완료
