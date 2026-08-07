# 💻 Code Convention & JSON Reference Rule (코드 및 JSON 수칙)

이 문서는 프로젝트 내 TypeScript 및 React 코드의 품질, JSON 데이터 참조 규격 및 유지보수성 컨벤션을 정의합니다.

---

## 📄 1. JSON 파일 분리 및 텍스트 하드코딩 금지 규칙

1. **모든 화면 텍스트의 JSON 분리**:
   - 컴포넌트 내부에 인라인 텍스트("어쩌구 저쩌구 개발자 박인태 입니다", 링크 URL 등)를 하드코딩하는 것을 절대 금지합니다.
   - 반드시 `src/content/json/` 폴더에 위치한 5개의 JSON 파일(`header.json`, `hero.json`, `about.json`, `projects.json`, `experience.json`)에서 읽어와 렌더링해야 합니다.
2. **사용자 편집 편의성 보장**:
   - JSON 파일 구조는 키 명칭을 직관적으로 작성하여 사용자가 코드를 몰라도 JSON 파일만 수정하면 즉시 화면 반영되도록 구성합니다.

---

## 🛡️ 2. TypeScript 타입 엄격성

1. **`any` 타입 절대 금지**:
   - `any` 사용 대신 명확한 Interface, Type, 또는 `unknown`과 타입 가드를 사용합니다.
2. **JSON 데이터 타입 바인딩**:
   - `src/types/portfolio.ts`에서 JSON 데이터 구조에 맞는 인터페이스를 엄격히 정의하여 타입 안전성을 확보합니다.

---

## 🧩 3. React 컴포넌트 작성 규칙

1. **Named Export 표준**:
   - `export const ComponentName: React.FC<Props> = ...`
2. **JSON 데이터 주입 구조**:
   - 컴포넌트는 JSON 객체를 Direct import 하거나 Props로 주입받아 매핑 렌더링합니다.
   - 예시:
     ```tsx
     import heroData from '../../content/json/hero.json';
     
     export const HeroSection: React.FC = () => {
       return <h1>{heroData.title}</h1>;
     };
     ```
