<script lang="ts">
	import CopyCodeInjector from "$lib/components/CopyCodeInjector.svelte";
	export let data;

	const { title, date } = data.meta;
	const Content = data.PostContent;
</script>

<a class="underlined-a" href="/blog">Back to Blog</a>

<article>
	<h1>{title}</h1>
	<p>Published: {date}</p>
	<CopyCodeInjector>
		<Content />
	</CopyCodeInjector>
</article>

<style lang="scss">
	@keyframes move {
		0%,
		100% {
			transform: translateX(0px);
		}

		50% {
			transform: translateX(-5px);
		}
	}
	a {
		&:before {
			content: "<";
			display: inline-block;
			margin-right: 0.5em;
			transition: all 0.8s;
			transform: translateX(0px);
			animation: move 1s ease-in-out paused infinite normal forwards;
		}

		&:hover::before {
			animation-play-state: running;
			// transform: translateX(-10px);
		}
	}
</style>
