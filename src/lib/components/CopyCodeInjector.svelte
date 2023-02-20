<script lang="ts">
	import { onMount } from "svelte";
	import { fly } from "svelte/transition";

	// used to display copy tooltip
	let copiedText = false;
	let copyTimeout: NodeJS.Timeout;

	onMount(() => {
		// will add a children to any <pre> element with class language-*
		let pres: HTMLCollection = document.getElementsByTagName("pre");
		for (let _ of pres) {
			const pre = _ as HTMLPreElement;
			if (![...pre.classList].some((el) => el.startsWith("language-"))) {
				continue;
			}
			const text = pre.innerText;
			let copyButton = document.createElement("button");
			copyButton.addEventListener(
				"click",
				() => (
					navigator.clipboard.writeText(text),
					(copiedText = true),
					copyTimeout && clearTimeout(copyTimeout),
					(copyTimeout = setTimeout(() => (copiedText = false), 1500))
				)
			);
			copyButton.className = "copy";
			copyButton.innerText = "Copy";
			pre.appendChild(copyButton);
		}
	});
</script>

{#if copiedText}
	<div in:fly={{ x: -100 }} out:fly={{ x: 100 }} class="copy-tooltip">
		Copied to clipboard! 📚
	</div>
{/if}
<slot />

<style>
	.copy-tooltip {
		background-color: var(--secondary);
		color: var(--body);
		position: fixed;
		top: 1em;
		right: 1em;
		padding: 0.4em 0.7em;
		border-radius: 0.4em;
		z-index: 1;
	}
</style>
