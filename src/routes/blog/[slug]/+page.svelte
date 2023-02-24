<script lang="ts">
	import CopyCodeInjector from "$lib/components/CopyCodeInjector.svelte";
	export let data;

	const { title, date = "1970-01-01", tags = [], editDate } = data.meta;

	const Content = data.PostContent;
</script>

<a class="underlined-a" href="/blog">Back to Blog</a>

<article>
	<h1>{title}</h1>

	{#each tags as tag}
		<span class="tag">{tag}</span>
	{/each}

	<CopyCodeInjector>
		<Content />
	</CopyCodeInjector>

	<p class="date">Published on {date}</p>
	{#if editDate}
		<p class="date">Edited on {editDate}</p>
	{/if}
</article>

<style lang="scss">
	.date {
		font-size: smaller;
		margin: 0;
	}

	.tag {
		padding: 0.2em 0.5em;
		margin: 0 0.2em;
		background-color: var(--secondary);
		border-radius: 4px;
	}

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
