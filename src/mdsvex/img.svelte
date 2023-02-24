<script lang="ts">
	export let alt: string;
	export let src: string;
</script>

<img {alt} {src} />

<style lang="scss">
	img {
		display: block;
		margin: 0.3em auto auto;

		max-height: 20em;
		max-width: calc(100% - 4px);

		border-radius: 0.5em;
		border: 2px solid var(--primary);
	}
</style>
