/**
 * 일반 유저
 * */
export interface User {
    //로그인 유저
    userId: string,
    userName: string,
    userOid: string,
    userEmail: string,

    userPhone: string,
    userBirthDay: string,
    userType: string,
    orgName: string,
    userPropertyList: {
        [ key : string ] : string|Object
    },

    isManager: () => boolean,
    loginUserSessionId: "",
    loginAuditOid: "",
    loginLastDate: "",
    dormantStartDate: "",
}

export type Manager = {

    isManager: () => true,
} & User;