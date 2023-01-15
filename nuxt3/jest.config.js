// ./jest.config.js
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  // 테스트에 사용할 환경 정보, jest-environment-jsdom를 사용함
  testEnvironment: 'jsdom',
  
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },
  
  //모듈이 사용할 수 있는 파일 확장자 배열 : 모듈을 사용할 시 왼쪽에서 오른쪽으로 해당 모듈의 이름 + 확장자로 모듈을 찾음
  moduleFileExtensions: ["js", "jsx", "mjs", "ts", "vue"],
  /**
   * moduleNameMapper
   * 리소스나 모듈 위치 path alias와 매핑할 수 있도록 지정
   * 현재는 Nuxt의 자동 import 기능과 config를 모킹하기 위해서 사용
   * imports의 경우 반드시 한번 빌드되어야 함
   * */
  moduleNameMapper: {
    "^@/(.*)": "<rootDir>/$1",
    "#app": "<rootDir>/node_modules/nuxt/dist/index.mjs",
    "#imports": "<rootDir>/.nuxt/imports.d.ts",
  },
  // 타입스크립트, 바벨을 사용할 때 설정해야 한다. 사용할 transform 모듈을 반드시 설치되어 있어야 함
  transform: {
    '^.+\\.(js|jsx|mjs)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
    ".+\\.(css|scss|png|jpg|svg)$": "jest-transform-stub",
    ".*\\.(vue)$": "@vue/vue3-jest",
  },
  transformIgnorePatterns: [
    "node_modules/(?!(nuxt3|unenv))",
  ],
  setupFiles: [
    "./test/__mock__/mockNuxt.ts"
  ],
};