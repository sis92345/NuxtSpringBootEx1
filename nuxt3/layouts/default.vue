<template>
	<div>
		<CoreContainerProfileDefaultProfileContainer
		/>
		<slot/>
	</div>
	<page-list-container />
</template>
<script>
import PageListContainer from "../components/core/container/indexList/PageListContainer";
export default {
	components : { PageListContainer }
}
</script>