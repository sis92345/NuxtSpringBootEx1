<script setup lang="ts">
	import { ref} from "#imports";
	import {Ref} from "@vue/reactivity";
	import {useUser} from "../stores/core/userStore";
	import {Manager} from "../types/types"
	
	const numberOne : Ref<number> = ref( 10 );
	const numberTwo : Ref<number> = ref( 1111 );
	const numberThree : Ref<number> = ref( 2222 );
	
	const { getUser , login } = useUser();
	
</script>

<template>
	<div>
		<v-text-field v-model="numberOne" label="Label"/>
		-
		<v-text-field v-model="numberTwo" label="Label"/>
		-
		<v-text-field v-model="numberThree" label="Label"/>
	</div>
</template>
<style scoped>
</style>