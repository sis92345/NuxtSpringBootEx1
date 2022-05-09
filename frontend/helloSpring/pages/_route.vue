<_route>
</_route>
<script>
export default {
	beforeCreate() {
		const param = this.$route.params.route
    console.log( "route 왔다감" );
		if (param === null ) {
			this.$nuxt.error({ statusCode: 404, message: "Page Does Not Exist" })
		}
	}
}
</script>
<style scoped>
</style>
