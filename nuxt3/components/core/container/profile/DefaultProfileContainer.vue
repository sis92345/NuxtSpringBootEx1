<script setup lang="ts">
	import {useUser} from "../../../../stores/core/userStore";
	import {Manager} from "../../../../types/core/user/model/userModel";
	
	const { getUser , login } = useUser();
	
	login<Manager>( {
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
	} );
	
</script>
<template>
	<CoreViewProfileUserIdProfileView
		:login-user="getUser"
	/>
</template>