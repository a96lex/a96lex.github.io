<script>
	import Footer from "$lib/components/Footer.svelte";
	import Header from "$lib/components/Header.svelte";
	import "$lib/styles/style.scss";
	import "$lib/styles/code.scss";
</script>

<Header />

<main>
	<slot />
</main>

<Footer />
