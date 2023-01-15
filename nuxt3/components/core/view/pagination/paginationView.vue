<script setup lang="ts">
	
	import {usePagination} from "../../../../composables/pagination";
	
	const onChangePage = ( statIndex : number ) => {
		
		// 여기서
	}
	
	const { currentPage, pages , prev , next, last, first , clickPage , startIndex } = usePagination( { pageSize : 10 , currentPage : 1, visibleCount : 10 , totalCount : 165 , onChangePage} );

	
	
</script>
<template>
	<div>
		<v-btn
			variant="flat"
			color="secondary"
			@click="first"
		>처음</v-btn>
		<v-btn
			variant="flat"
			color="secondary"
			@click="prev"
		>이전</v-btn>
		<ul v-for="item in pages">
			<li
				v-text="item.index"
				@click="clickPage( item )"
			/>
		</ul>
		<span>현재 페이지 : {{ currentPage }}</span>
		/
		<span>startIndex : {{ startIndex }}</span>
		<br/>
		
		<v-btn
			variant="flat"
			color="normal"
			@click="next"
		>이후</v-btn>
		<v-btn
			variant="flat"
			color="normal"
			@click="last"
		>마지막</v-btn>
	</div>
</template>