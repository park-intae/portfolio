# 🚨 Antigravity Error Control & Exception Management Guide

본 문서는 **Antigravity 하네스 체계** 내에서 프로젝트 개발 및 유지보수 중 발생할 수 있는 **에러(Error), 예외(Exception), 디버깅 로그 수집 및 복구 지침**을 총괄 관리하는 에러 통제 가이드입니다.

---

## 📌 1. 에러 통제 원칙 (Error Control Mandate)

1. **무증상 에러 삼킴 금지 (No Silent Swallow)**
   - `try-catch` 블록에서 에러를 빈 블록으로 삼키거나 의미 없는 더미 데이터로 감추는 행위를 엄격히 금지합니다.
   - 예외 발생 시 반드시 명확한 로그 출력 또는 시스템 상태 피드백을 발생시켜야 합니다.

2. **근본 원인 추적 원칙 (Root Cause Investigation)**
   - 단순히 표면적인 에러 메시지만 마스킹하는 임시 땜빵식 패치를 금지하고, 상위/하위 데이터 흐름을 추적하여 근본 원인을 해결합니다.

3. **빌드 및 테스트 자동 검증 (Automated Verification)**
   - 에러 발생 및 해결 후에는 반드시 Vitest 유닛 테스트(`npm run test`) 및 TypeScript 빌드 검증(`npm run build`)을 실행하여 부작용(Side Effect)이 없음을 검증합니다.

---

## 📂 2. 에러 관리 시스템 구조 (`antigravity/error-control/`)

```
antigravity/
└── error-control/
    ├── ERROR_HANDLING_GUIDE.md     # [현재 파일] 에러 통제 및 가이드라인
    ├── logs/                       # (선택) 런타임 및 빌드 에러 이슈 트래킹 로그
    └── resolution-history.md       # 과거 발생 주요 에러 및 해결 사례 트래킹
```

---

## 🛡️ 3. 오류 대응 프로세스 (Step-by-Step Resolution Workflow)

1. **에러 탐지 (Detection)**:
   - Vitest 테스트 실패, Vite 빌드 타입 오류, 런타임 콘솔 오류 탐지
2. **원인 분석 (Diagnosis)**:
   - 스택 트레이스(Stack Trace) 및 에러 로그 원문 정밀 분석
3. **복구 조치 (Remediation)**:
   - 코드 및 디자인 변수 / 유틸리티 규칙 준수하여 수정
4. **검증 및 갱신 (Verification & History Log)**:
   - 테스트 100% 통과 확인 후 `resolution-history.md`에 이슈 및 해결 내용 기록

---

## 📝 4. 주요 예외 유형 및 대응 지침

| 예외 유형 | 주요 발생 원인 | 표준 대응 절차 |
| :--- | :--- | :--- |
| **Type Check Error** | TS 타입 불일치, Null dereference | Strict Type 검사 및 Non-null 보장 처리 |
| **Theme Contrast Error** | 하드코딩 색상 주입으로 인한 가독성 저하 | `index.css` CSS 변수 기반 유틸리티로 즉시 변경 |
| **Test Assertion Error** | 컴포넌트 렌더링/JSON 데이터 미매칭 | JSON 데이터 무결성 검증 및 컴포넌트 스펙 동기화 |
| **Build Timeout/Failure** | 모듈 참조 오류 또는 구문 오류 | 구문 체크 및 `tsc -b` 타입 체크 수행 |
