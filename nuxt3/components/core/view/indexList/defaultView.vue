<script setup lang="ts">

	/**
	 * View를 담당하는 presenter
	 * */
	import {RouteRecordRaw} from "vue-router";
	
	interface Props {
		pageList : RouteRecordRaw[]
	}
	
	const { pageList } = defineProps<Props>();
	
</script>
<template>
	<ul v-for="item in pageList">
		<li>
			<NuxtLink :to="item.path">
				<span v-text="item.name" />
			</NuxtLink>
		</li>
	</ul>
</template>
