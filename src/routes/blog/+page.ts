import { error } from "@sveltejs/kit";

export const load = async () => {
	try {
		const allPostFiles = import.meta.glob("../../lib/blogEntries/*.md");
		const iterablePostFiles = Object.keys(allPostFiles);

		let posts: any[] = [];

		for (const postName of iterablePostFiles) {
			const post = await import(postName);
			console.log(postName);

			const slug = postName.split("/").pop()!.split(".").shift();
			console.log(slug);

			posts.push({ ...post.metadata, slug });
			console.log("post push");
		}

		posts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

		console.log("before return", posts.length, "alex");
		return { posts };
	} catch (err) {
		console.log(err);
		throw error(501, "Error getting post list");
	}
};
