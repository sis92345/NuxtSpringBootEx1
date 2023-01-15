import {User} from "../model/userModel";
import {ComputedRef, Ref} from "@vue/reactivity";


/**
 * UserStore 반환 값
 * */
export interface UserStore {


    /**
     * 유저 값을 반환합니다.
     *
     * @getter
     * @return {User} 현재 로그인된 유저
     * */
    getUser : ComputedRef<Ref<User>> ,

    /**
     * 유저를 로그인 합니다.
     *
     * @action
     * @param {T extends User} user - 유저
     * @return {T extends User} 로그인한 유저
     * */
    login : <T extends User>( user : T ) => User,

    /**
     * 유저를 로그아웃 합니다.
     *
     * @action
     * */
    logout : () => void
}