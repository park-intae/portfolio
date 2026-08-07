# 🛡️ Step 05: QA & Optimization (품질 검증, 성능 최적화 & 최종 빌드)

본 워크플로우는 포트폴리오 개발 완료 후 정적 분석, 프로덕션 빌드, SEO, 웹 접근성 및 브라우저 호환성을 최종 검증하는 5단계 가이드입니다.

---

## 🎯 목표
- TypeScript 타입 에러 0건 & ESLint 린트 오류 0건 달성
- 프로덕션 빌드 번들 정상 생성 확인 (`npm run build`)
- SEO 메타 태그, 파비콘, Open Graph 태그 및 반응형 호환성 검증

---

## 📝 세부 실행 단계

### 1단계: 빌드 및 린트 정적 검증
- [ ] `npm run lint` 수행 및 모든 린트 경고/오류 수정
- [ ] `npm run build` 수행 및 TypeScript 타겟 컴파일 검증

### 2단계: SEO & Meta / 파비콘 설정 (`index.html`)
- [ ] 메타 타이틀, 설명문, 뷰포트, 키워드 설정
- [ ] Open Graph (og:title, og:description, og:image, og:url) 태그 추가
- [ ] 파비콘(Favicon) 연결 확인

### 3단계: 크로스 브라우저 & 반응형 디바이스 최종 검증
- [ ] Mobile View, Tablet View, Desktop View 최적화 레이아웃 상태 확인
- [ ] 모달 배경 스크롤 락 및 Esc 키 닫기 등 UX 마무리

---

## ✅ 완료 검증 조건
- [ ] `npm run build` 성공 및 `dist/` 빌드 출력물 생성 확인
- [ ] 모든 기능 및 애니메이션에 오류가 없음
- [ ] `MAIN_ORCHESTRATOR.md` 내 Step 05 상태를 `[Completed]`로 업데이트
