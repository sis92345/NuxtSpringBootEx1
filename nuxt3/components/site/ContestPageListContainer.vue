<script setup lang="ts">
	
	/**
	 * 비즈니스 로직을 담은 Container
	 * */
	import {useRouteList} from "../../composables/useRouteList";
	
	const { routes } = useRouteList();
	
</script>
<template>
	<div>
		<!-- Nuxt Auto import 기능 -->
		<CoreViewIndexListDefaultView
			:page-list="routes"
		/>
	</div>
</template>
