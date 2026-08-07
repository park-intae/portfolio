# 🔄 CI/CD Rule & Pipeline Standard (CI/CD 파이프라인 규칙)

이 문서는 Vite + React 기반 포트폴리오 웹 애플리케이션의 지속적 통합(CI) 및 지속적 배포(CD) 파이프라인 체계와 준수 사항을 규정합니다.

---

## 🏗️ 1. 파이프라인 구성 개요

프로젝트는 GitHub Actions를 활용한 자동화 파이프라인([`.github/workflows/deploy.yml`](file:///C:/Users/pit19/OneDrive/%EB%B0%94%ED%83%95%20%ED%99%94%EB%A9%B4/portfolio/.github/workflows/deploy.yml))을 탑재하고 있습니다.

```
[ Push / PR Event ]
        │
        ▼
 1. Lint Check (`npm run lint`)
        │
        ▼
 2. TypeScript & Vite Build (`npm run build`)
        │
        ├── (PR 이벤트): 검증 통과 후 종료
        │
        └── (Main branch Push): 
                ▼
 3. Automatic Deployment to GitHub Pages (Static Hosting)
```

---

## ⚙️ 2. 파이프라인 환경 및 설정 규칙

1. **Vite 상대 경로 기본값 (`vite.config.ts`)**:
   - 정적 에셋의 배포 서브패스 호환성을 보장하기 위해 `base: './'` 설정을 유지합니다.
2. **Node.js 버전 표준**:
   - CI 환경은 `Node.js 20.x` 및 `npm` 패키지 캐싱을 표준으로 사용합니다.
3. **의존성 설치 규칙**:
   - CI 빌드 시 `npm install` 대신 `npm ci`를 수행하여 `package-lock.json`의 일관성을 엄격히 보증합니다.

---

## 🛡️ 3. 커밋 및 배포 가이드라인

- **PR / Push 전 로컬 검증 필수**:
  - 푸시 전 반드시 로컬 터미널에서 `npm run lint`와 `npm run build`를 성공시킨 후 커밋합니다.
- **배포 트러블슈팅**:
  - GitHub Actions 파이프라인 실패 발생 시, 실패한 잡의 로그를 즉시 확인하고 타입/린트 이슈를 해결한 후 재푸시합니다.
