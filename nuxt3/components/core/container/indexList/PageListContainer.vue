<script setup lang="ts">
	
	/**
	 * 비즈니스 로직을 담은 Container
	 * */
	import {useRouteList} from "../../../../composables/useRouteList";
	
	const { routes } = useRouteList();
	
</script>
<template>
	<div>
		<!-- Nuxt Auto import 기능 -->
		<!-- UI Prefix-->
		<CoreViewIndexListDefaultView
			:page-list="routes"
		/>
		<!-- 아래처럼 직접 저수준 DOM을 컨테이너에서 사용하면 점점 더 늘어나면서 누더기 코드 : 괴물 컴포넌트 -->
		<!-- Core input vs el-Input -->
		<!-- el-Input이 각 페이지에 들어가면서 코드 중복 생김 -->
		<!-- input1 input2 validation -> 뭐가 안됨 -->
		<!-- 변경에 대응하기 어랴움 -->
		<!-- 노트 : 비즈니스 로직 -->
		<!-- 이제는 Doc 문서가 있어야 재사용이 가능 -->
		<!-- 처음부터 스토리 북이 들어가야 한다. -->
		<!-- 장점 : 체계 , 단점 : 2일, -->
	</div>
</template>
