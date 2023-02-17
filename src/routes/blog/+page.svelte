<script lang="ts">
	import root from "$lib/images/sudo.jpg";

	console.log({ root });

	export let data: { posts: Array<any> };
</script>

<h1>blog</h1>

{#each data.posts as post}
	<a href={"/blog/" + post.slug}>
		<h3>{post.title}</h3>
		<div>{post.summary}</div>
		<span>{post.date}</span>
	</a>
	<!-- <img src={root} alt="0" /> -->
{/each}

<style lang="scss">
	a {
		text-decoration: none;
		color: unset;
		padding: 1em;
		border-radius: 1em;
		display: block;
		box-shadow: 1px 1px 4px -3px var(--body);

		transition: all 0.3s ease-in-out;
		> * {
			transition: all 0.3s ease-in-out;
		}

		&:hover {
			box-shadow: 3px 3px 5px -3px var(--primary);
		}

		&:hover > h3 {
			color: var(--primary);
		}
	}
</style>
