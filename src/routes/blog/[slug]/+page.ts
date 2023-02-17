import { error } from "@sveltejs/kit";

export const load = async ({ params }: { params: { slug: string } }) => {
	try {	
		const post = await import(`../../../lib/blogEntries/${params.slug}.md`);

		return {
			PostContent: post.default,
			meta: { ...post.metadata, slug: params.slug }
		};
	} catch (err) {
		console.log(err);
		throw error(404);
	}

};
