import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess'
import { mdsvex } from 'mdsvex'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	kit: {
		adapter: adapter({
			pages: "docs",
			assets: "docs"
		}),
	},

	extensions: [".svelte", ".md"],

	preprocess: [
		sveltePreprocess(),
		mdsvex({ extensions: [".md"] })
	]
};

export default config;
