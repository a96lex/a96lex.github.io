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
	<h1>Alex</h1>
	<div>
		<nav>
			{#each links as link, idx}
				<a href={link.path} class="underlined-a" class:active={$page.url.pathname == link.path}
					>{link.text}</a
				>
			{/each}
		</nav>
	</div>
</footer>

<style lang="scss">
	footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: absolute;
	}
</style>
