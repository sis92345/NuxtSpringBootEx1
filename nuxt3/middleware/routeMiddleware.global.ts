import {defineNuxtRouteMiddleware} from "nuxt/app";
/**
 * routeMiddleware
 *
 * 글로벌 미들웨어는 이름을 붙일 것
 * */
export default defineNuxtRouteMiddleware((to, from) => {

    console.log( "###### Nuxt 전역 라우트 미들웨어어 ######");
})