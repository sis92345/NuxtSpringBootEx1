<script setup lang="ts">

/**
 * 페키지 단계를 한단계로 뺀다
 *
 * / user
 *      /modal
 * / manager
 * / search
 * / text
 *
 * */
	/**
	 * Profile > 기본 컨테이너
	 * */
	import {User} from "../../../../types/core/user/model/userModel";
import {computed, ComputedRef} from "@vue/reactivity";
	
	interface Props {
		loginUser : User
	}
	
	const { loginUser } = defineProps<Props>();
	
	const profileWrapper : ComputedRef<string>= computed( ()=>{
		
		return loginUser.isManager() ? "primary-border border-one" : "secondary-border border-one";
	});
	
</script>
<template>
	<div class="pd-10 mb-10" :class="profileWrapper">
		<span>접속자 정보 - </span>
		<span v-text="loginUser.userId"/>
	</div>
</template>
<style scoped>

.primary-border {
	border: #43A6C6 solid;
}

.secondary-border {
	border: #43F611 solid;
}

.border-one {
	border-width: 0px 0px 5px 4px;
}

.pd-10 {
	padding-left: 10px;
}

.mb-10 {
	margin-bottom: 10px;
}
</style>