<script lang="ts">
</script>

<blockquote>
	<slot />
</blockquote>

<style lang="scss">
	blockquote {
		position: relative;
		&:before {
			content: "";
			position: absolute;
			display: inline-block;
			height: 100%;
			width: 5px;
			border-radius: 1px;
			margin-left: -15px;
			background-color: var(--secondary);
		}
	}
</style>
