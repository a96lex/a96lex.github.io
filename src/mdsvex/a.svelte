<script lang="ts">
	export let href: string;
</script>

<a {href} target="_blank" rel="noreferrer" class="underlined-a">
	<slot />
</a>

<style lang="scss">
	a {
		color: var(--primary);
	}
</style>
