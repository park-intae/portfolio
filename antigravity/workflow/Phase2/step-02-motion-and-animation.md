# 🎬 Phase 2 Step 02: 인터랙티브 모션 & 애니메이션 구현 지침서

본 문서는 **Phase 2 UI/UX 고도화 2단계 과제**인 **인터랙티브 모션 & 60fps 마이크로 애니메이션 구현 세팅 문서**입니다.  
`framer-motion` 라이브러리를 활용하여 사용자 인터랙션 경험을 고도화하고, 뷰포트 진입 감지, 호버 피드백 및 모달 트랜지션을 모던하게 구축하는 구체적인 요구사항을 정의합니다.

---

## 🎯 1. 핵심 애니메이션 구현 목표

1. **스무스 뷰포트 진입 모션 (Scroll-triggered Fade & Slide)**:
   - 각 섹션(Hero, About, Projects, Experience) 요소가 화면 스크롤 시 아래에서 위로(Y: 20px ➡️ 0px) 부드럽게 나타나는 스태거(Stagger) 진입 효과 적용
2. **카드 & 버튼 물리 엔진 호버 피드백 (Interactive Micro-Interactions)**:
   - 프로젝트 카드, 지표 카드, CTA 버튼 마우스 호버 시 자연스러운 Lift-up(Y: -4px) 및 포인트 블루 글로우(`shadow-point/20`) 인터랙션 연출
3. **상세 디테일 패널 & 모달 트랜지션 (Modal & Panel Motion)**:
   - 우측 상시 엘리베이션 패널 프로젝트 변경 시 썸네일/텍스트 스무스 크로스페이드(AnimatePresence / Fade Cross)
   - 프로젝트 모달 팝업 시 Backdrop blur 딤 페이드인 + 모달 스케일업(Scale: 0.95 ➡️ 1.0) 모션 연출
4. **네비게이션 & 도트 모션 (Interactive Navigation)**:
   - 도트 네비게이션 활성 탭 전환 시 인디케이터 펄스 및 스프링(Spring physics) 인터랙션 적용

---

## 📝 2. 섹션별 상세 모션 세팅 명세

### 가. HeroSection
- **헤드라인 & 메인 텍스트**: `framer-motion`의 `initial={{ opacity: 0, y: 25 }}`, `animate={{ opacity: 1, y: 0 }}` 적용 (duration: 0.6s, ease: "easeOut")
- **강점 3줄 불릿**: 0.15초 순차 지연(Stagger Children) 적용
- **CTA 버튼**: `whileHover={{ scale: 1.03 }}`, `whileTap={{ scale: 0.98 }}`

### 나. AboutSection
- **지표 카운터 4개**: `whileInView={{ opacity: 1, scale: 1 }}`, `viewport={{ once: true, amount: 0.3 }}` 로 스크롤 시 점진적 확대 진입
- **기술 스택 배지**: 마우스 호버 시 `whileHover={{ y: -2, scale: 1.05 }}` 인터랙션 피드백

### 다. ProjectsSection & ProjectModal
- **2x2 프로젝트 카드**: `whileHover={{ y: -6 }}` 및 보더/섀도우 부드러운 전환 (`transition: { duration: 0.3 }`)
- **우측 패널 선택 변경**: `AnimatePresence mode="wait"` 기반 크로스페이드 효과
- **ProjectModal 팝업**:
  - Backdrop: `initial={{ opacity: 0 }}`, `animate={{ opacity: 1 }}`, `exit={{ opacity: 0 }}`
  - Modal Box: `initial={{ opacity: 0, scale: 0.95, y: 20 }}`, `animate={{ opacity: 1, scale: 1, y: 0 }}`, `exit={{ opacity: 0, scale: 0.95, y: 20 }}`

### 라. ExperienceSection
- **타임라인 목록**: 스크롤 진입 시 왼쪽 타임라인 선과 노드가 차례대로 활성화되는 스태거 애니메이션 적용

### 마. 도트 네비게이션 양방향 영역 감지 & 시네마틱 이징 스크롤 (Bidirectional Sensing & Custom Smooth Scroll Easing)
- **개선 목표**:
  - 기존 단일 점 감지 방식에서 발생하는 역방향(Up-scroll) 스크롤 감지 지연을 완벽 해결
  - 브라우저 기본 `scrollIntoView`의 가파르고 단조로운 이동 대신, **스크롤이 부드럽게 따라서 감속/가속하며 이동하는 시네마틱 커스텀 이징 스크롤(easeInOutCubic Animation)** 구현
- **실행 명세**:
  - 화면 뷰포트 중앙 50% 영역(`[25% ~ 75%]`) 교차 면적 기반 양방향 감지 알고리즘 적용
  - 도트 네비게이션 및 푸터 'Back to Top' 버튼 클릭 시 `requestAnimationFrame`과 `easeInOutCubic` 이징 함수를 결합한 공통 스크롤 유틸리티(`src/utils/scroll.ts`)를 적용하여 **스크롤이 물 흐르듯 유연하게 따라서 이동하는 60fps 감성 모션** 구현

---

## 🛡️ 3. 기술 표준 및 성능 가이드라인

- **60fps GPU 가속 사용**: `transform` (`x`, `y`, `scale`) 및 `opacity`속성 위주로 애니메이션을 작성하여 Layout Reflow 최소화
- **`prefers-reduced-motion` 대응**: 움직임 감소를 선호하는 사용자 환경을 고려한 웰메이드 모션 스프링 설정
- **기존 테스트 무결성 유지**: 애니메이션 도입 후에도 Vitest 19개 유닛 테스트가 100% 통과되도록 ARIA 및 DOM 구조 유지

---

## ✅ 완료 검증 체크리스트
- [x] Framer Motion 기반 뷰포트 진입 모션 전 섹션 적용 완료
- [x] 카드 및 버튼 호버/탭 마이크로 인터랙션 60fps 구현 완료
- [x] 모달 팝업 스무스 페이드/스케일 트랜지션 적용 완료
- [x] 도트 네비게이션 양방향(Down & Up) 뷰포트 교차 영역 감지 알고리즘 적용 완료
- [x] 23개 Vitest 유닛 테스트 및 프로덕션 빌드 100% 정상 통과
