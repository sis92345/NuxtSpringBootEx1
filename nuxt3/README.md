# Nuxt3 + Typescript 시작하는 방법
1. Typescript를 사용할 경우 Nuxt에서 사용하는 Type을 모두 Build 해야한다.
   - 아래 명령어롤 입력해서 사용한다.
   ```shell
    npm run prepare
    ```
    - `<rootDir>/.nuxt` 디렉토리 하위에 타입 설정과 `tsconfig.json`이 생성되면 준비 완료
    - 이 설정을 `<rootDir>/tsconfig.json`의 extends 옵션으로 끌어올려야 함
2. Nuxt를 실행한다
   ```shell
    npm run dev
   ```


---
# 아래는 Nuxt3  기본 README.md

# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
# nuxt3
