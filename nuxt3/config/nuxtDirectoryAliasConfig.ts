import { NuxtDirectoryAliasConfig } from "types/types";

/**
 * Nuxt Alias 설정
 * Nuxt를 사용하면 별칭을 사용하여 JavaScript 및 CSS 내의 사용자 지정 디렉토리에 액세스할 수 있습니다
 * */
export const nuxtDirectoryAliasConfig : NuxtDirectoryAliasConfig = {
    '~~'    : `<rootDir>`,
    '@@'    : `<rootDir>`,
    '~'     : `<rootDir>`,
    '@'     : `<rootDir>`,
}