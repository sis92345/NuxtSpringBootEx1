// https://nuxt.com/docs/api/configuration/nuxt-config
import { nuxtTypeScriptConfig } from "./config/nuxtTypeScriptConfig";
import { nuxtDirectoryAliasConfig } from "./config/nuxtDirectoryAliasConfig";

/**
 * Nuxt Configuration
 * 설정은 통일
 * */
export default defineNuxtConfig({

    /**
     * Server side rendering 사용 안함 asdasd
     * */
    ssr : false,

    /**
     * 특정 directory를 가르키는 alias 설정 213
     * */
    alias : nuxtDirectoryAliasConfig,

    build: {
        transpile: ['vuetify'],
    },

    css: ['vuetify/lib/styles/main.sass'],

    nitro : {

        /**
         * Static으로 Buiid
         * public/ 디렉토리를 자산으로 import
         * */
        serveStatic : true,

        rootDir : "./",
        srcDir  : "../src/main/resources/static",
        /**
         * Static 빌드 결과 폴더 설정
         * 빌드시
         * /output
         *  /public ->
         *  /server -> ssr : false시 없음
         * */
        output: {
            //dir         : "src",
            publicDir   : "./"
        }
    },

    modules : [
        "@pinia/nuxt"
    ],

    vite : {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/styles/base.scss";',
                },
            },
        },
    },

    webpack : {

    },

    /**
     * 타입스크립트 설정
     * */
    typescript : nuxtTypeScriptConfig,
})
