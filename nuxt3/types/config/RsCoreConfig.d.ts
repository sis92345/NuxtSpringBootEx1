/**
 * Nuxt에서 사용하는 타입스크립트 내부 설정 값들입니다.
 *
 * */
export type TypescriptConfig = {

    /**
     * TypeScript는 프로그램의 안전성과 분석을 강화하기 위해 특정 검사와 함께 제공됩니다. 코드베이스를 TypeScript로 변환한 후에는 이러한 검사를 활성화하여 안전성을 높일 수 있습니다.
     * [Read More](https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html#getting-stricter-checks)
     * @default true
     */
    strict: boolean,

    /**
     * Nuxt 프로젝트에 상위 작업 공간을 포함합니다. 테마 및 모듈 작성자에게 주로 유용합니다.
     * @default false
     */
    includeWorkspace: boolean,

    /**
     * build-time type checking을 활성화합니다.
     * true로 설정하면 개발 시 타입 체크를 진행합니다.
     * "build"로 설정할 경우 빌드 타입 체크로 제한할 수 있습니다.
     * typescript` and `vue-tsc`를 의존합니다.
     * @default false
     *
     * @see https://v3.nuxtjs.org/guide/concepts/typescript#type-checking
     */
    typeCheck: boolean | 'build',

    /**
     * Generate a `*.vue` shim.
     * We recommend instead either enabling [**Take Over Mode**](https://vuejs.org/guide/typescript/overview.html#volar-takeover-mode) or adding TypeScript Vue Plugin (Volar)** 👉 [[Download](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)].
     * @default true
     */
    shim: boolean,
}

/**
 * Nuxt 별칭 설정
 *
 * alias가 별칭, 값이 매핑할 디렉토리
 * */
export interface NuxtDirectoryAliasConfig {
    readonly [alias: string]: string|"<rootDir>"
}