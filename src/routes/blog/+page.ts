import { error } from "@sveltejs/kit";

export const load = async ({ url }: { url: URL }) => {
	try {
		const tag = url.searchParams.get("tag");
		const allPostFiles = import.meta.glob("../../lib/blogEntries/*.md");
		const iterablePostFiles = Object.keys(allPostFiles);

		let posts: any[] = [];

		for (const postName of iterablePostFiles) {
			// This calls import(path).
			const post: any = await allPostFiles[postName]();
			if (tag && !post.metadata.tags.includes(tag)) continue;

			const slug = postName.split("/").pop()!.split(".").shift();
			posts.push({ ...post.metadata, slug });
		}

		posts = posts
			.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
			.filter((post) => !post.draft);

		return { posts };
	} catch (err) {
		console.error(err);
		throw error(501, "Error getting post list");
	}
};
