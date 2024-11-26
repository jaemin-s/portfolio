# jm-portfolio
프론트엔드 개발자 포트폴리오 웹사이트입니다

## 📝 개요
React와 Next.js를 활용한 개인 포트폴리오 사이트로, 프로젝트 경험과 기술 스택을 소개합니다.

## 🔗 배포 링크
웹사이트: https://jaemin-s.github.io

## 🛠 기술 스택
- Framework: React, Next.js
- Language: TypeScript
- Styling: TailwindCSS
- Package Manager: Yarn Berry
- CI/CD: GitHub Actions
- Deployment: GitHub Pages

## 📌 실행 방법
```
# Install dependencies
yarn install

# Run development server
yarn dev

# Build
yarn build
```

## 📊 프로젝트 구조
```
app/
├── presentation/           # UI 계층
│   ├── screen/               # Next.js 페이지 및 라우팅
│   ├── components/           # 재사용 가능한 React 컴포넌트
│   └── styles/               # 전역 스타일, 테마 설정
│
├── domain/                 # 비즈니스 로직 계층
│   ├── entities/             # 비즈니스 모델 (Project, Profile 등)
│   ├── repositories/         # 데이터 접근 인터페이스 정의
│   └── usecases/             # 비즈니스 유스케이스 (데이터 조회, 처리 등)
│
├── data/                   # 데이터 계층
│   ├── repositories/         # domain의 repository 인터페이스 구현체
│   └── datasources/          # 실제 데이터 (JSON, API 등)
│
└── infrastructure/         # 공통 기능 계층
    ├── assets/               # 이미지, 폰트 등의 정적 자원
    │   ├── images/
    │   └── fonts/
    ├── config/               # 환경 설정
    ├── enums/                # 상수, 열거형 정의
    │   ├── projectTypes.ts
    │   └── skillCategories.ts
    └── utils/                # 유틸리티 함수
```

## ✏️ 개선 사항
-
- 
