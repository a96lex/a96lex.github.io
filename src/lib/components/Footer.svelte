<script lang="ts">
	import { page } from "$app/stores";

	const links: Array<{ path: string; text: string }> = [
		{ path: "/", text: "Home" },
		{ path: "/blog", text: "Blog" },
		{ path: "/about", text: "About" },
		{ path: "/contact", text: "Contact" }
	];
</script>

<footer>
	<div class="content">
		<h1>Alex</h1>
		<div>
			<nav>
				{#each links as link, idx}
					<a
						href={link.path}
						class="underlined-a"
						class:active={$page.url.pathname == link.path}>{link.text}</a
					>
				{/each}
			</nav>
		</div>
	</div>
</footer>

<style lang="scss">
	a {
		margin: 0 0.3em;
	}

	.content {
		max-width: 60rem;
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 1em;
	}
</style>
