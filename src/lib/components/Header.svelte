<script lang="ts">
	import { page } from "$app/stores";

	const links: Array<{ path: string; text: string }> = [
		{ path: "/", text: "Home" },
		{ path: "/blog", text: "Blog" },
		{ path: "/contact", text: "Contact" }
	];
</script>

<header>
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
</header>

<style lang="scss">
	header {
		width: 100%;
		background-color: var(--body);
		display: flex;
		justify-content: center;
	}

	.content {
		max-width: 60rem;
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 1em;
	}

	* {
		color: var(--background);
	}

	a {
		margin: 0 0.3em;
	}
</style>
