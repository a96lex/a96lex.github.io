<script>
	import Footer from "$lib/components/Footer.svelte";
	import Header from "$lib/components/Header.svelte";
	import "$lib/styles/style.scss";
	import "$lib/styles/code.scss";
</script>

<Header />

<main>
	<div class="container">
		<slot />
	</div>
</main>

<div class="footer-spacer" />

<Footer />

<style lang="scss">
	.container {
		width: 100%;
		margin: 0em auto 2rem auto;
		max-width: 60rem;
	}

	.footer-spacer {
		background-color: transparent;
		height: var(--footer-height);
		z-index: 10;
	}
</style>
