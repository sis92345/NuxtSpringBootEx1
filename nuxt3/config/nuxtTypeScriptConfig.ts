import { TypescriptConfig } from "types/types";

/**
 * Nuxt에서 제공하는 기본 타입스크립트의 설정 정보를 세팅합니다.
 *
 * @author ted
 * @version 2023-01-05 ted 최초 생성
 * */
export const nuxtTypeScriptConfig : TypescriptConfig = {

    strict : true,

    includeWorkspace : false,

    /**
     * build-time type checking을 활성화합니다.
     * 성능상의 이유로 기본적으로 꺼져있으며 이 설정을 키려면 아래 모듈을 설치해야 합니다.
     * `typescript` and `vue-tsc`
     * */
    typeCheck : false,

    shim : true
}