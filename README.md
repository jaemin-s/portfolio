# 포트폴리오

## 주요 기술

### 1. Vite

```
yarn create vite . --template react-ts
or
yarn create vite projectName --template react-ts

yarn
yarn dev
```

### 2. Yarn Berry

```
yarn set version berry
```

### 3. Tailwind CSS

1. Install Tailwind CSS

```
yarn add -D tailwindcss postcss autoprefixer
yarn tailwindcss init -p
```

2. Configure template paths

```
//tailwind.config.js
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ]
```

3. Add the Tailwind directives to CSS

```
//index.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 4. ESLint

```
yarn add -D exlint

yarn create @eslint/config
```

### 5. prettier

```
yarn add -D --exact prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react-hooks
yarn prettier . --write
```
