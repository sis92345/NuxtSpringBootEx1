import {RouteRecordRaw} from "vue-router";
import {useRouter} from "#imports";

/**
 * 라우트 리스트 반환
 *
 * 1. Nuxt는 중첩 composable을 반환하지 않음
 * 2. 이 설정을 키려면 다시 올려야 함
 *
 * @see https://nuxt.com/docs/guide/directory-structure/composables
 * */
export const useRouteList = () : { routes : Readonly<RouteRecordRaw[]> } => {

    const routes : Readonly<RouteRecordRaw[]> = useRouter().options.routes;

    return {
        routes : routes
    }
}