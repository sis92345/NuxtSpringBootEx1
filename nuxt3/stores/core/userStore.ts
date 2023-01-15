
import {computed, Ref} from "@vue/reactivity";
import {User} from "../../types/core/user/model/userModel";
import {ref} from "vue";
import {UserStore} from "../../types/core/user/store/userStore";
import {defineStore} from "pinia";

const defaultUser : User = {
        userId: "",
        userName: "",
        userOid: "",
        userEmail: "",

        userPhone: "",
        userBirthDay: "",
        userType: "",
        orgName: "",
        userPropertyList: {},

        isManager: () => false,
        loginUserSessionId: "",
        loginAuditOid: "",
        loginLastDate: "",
        dormantStartDate: "",
}

export const useUser = defineStore(  "user", () : UserStore => {

    /**
     * state
     * */
    const loginUser : Ref<User> = ref( defaultUser );

    /**
     * Action
     * */
    const login = <T extends User> ( user: T ) => {

        const userInfo = { ...user } as T;

        loginUser.value = userInfo;

        return userInfo;
    }

    const logout = () => {

        loginUser.value = defaultUser;

        sessionStorage.clear();

        // @TODO 쿠키 삭제

        location.href = "/";
    }

    /**
     * Getter
     * */
    const getUser = computed<Ref<User>>( () => {
        return loginUser;
    });

    return { login , logout , getUser }
});