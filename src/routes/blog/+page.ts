import { error } from "@sveltejs/kit";

export const load = async () => {
	try {
		const allPostFiles = import.meta.glob("../../lib/blogEntries/*.md");
		console.log(allPostFiles);

		const iterablePostFiles = Object.keys(allPostFiles);

		let posts: any[] = [];

		for (const postName of iterablePostFiles) {
			// This calls import(path).
			const post: any = await allPostFiles[postName]();
			const slug = postName.split("/").pop()!.split(".").shift();
			posts.push({ ...post.metadata, slug });
		}

		posts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

		console.log("before return", posts.length, "alex");
		return { posts };
	} catch (err) {
		console.log(err);
		throw error(501, "Error getting post list");
	}
};
