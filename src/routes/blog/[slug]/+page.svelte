<script lang="ts">
	export let data;
	console.log(data);

	const { title, date } = data.meta;
	const Content = data.PostContent;
</script>

<a class="underlined-a" href="/blog">Back to Blog</a>

<article>
	<h1>{title}</h1>
	<p>Published: {date}</p>
	<Content />
</article>
