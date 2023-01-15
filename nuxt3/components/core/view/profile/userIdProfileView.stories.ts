import UserIdProfileView from './UserIdProfileView.vue'

export default {
    title: 'View/프로필',
    component: UserIdProfileView,
    argTypes: {},
}

const userSample = {
    userId              : "admin",
    userName            : "관리자",
    userOid             : "sad213ddE3",
    userEmail           : "test@remarkable.com",

    userPhone           : "01012345678",
    userBirthDay        : "11",
    userType            : "12",
    orgName             : "13",
    userPropertyList    : {},

    isManager: () => true,
    loginUserSessionId: "",
    loginAuditOid: "",
    loginLastDate: "",
    dormantStartDate: "",
}

const Template = (args : any) => ({
    components: { UserIdProfileView },
    setup() {
        return {
            args,
        }
    },
    template: `
    <UserIdProfileView v-bind="args" @click="click">Sample Button</UserIdProfileView>
  `,
})

export const Manager = Template.bind({})

export const User = Template.bind({})

//@ts-ignore
Manager.args = {
    loginUser: userSample
}


const normalUser = { ...userSample }
normalUser.isManager = () => false;
normalUser.userId = "tester";
//@ts-ignore
User.args = {
    loginUser: normalUser
}
