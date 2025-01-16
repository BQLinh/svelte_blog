import { categories, top_10_category, topics, } from '$lib/data';

export function load({ params }) {
    const mytopics = topics.filter((topic) => topic.category === params.slug);
    return {
        categories, top_10_category, mytopics
    }
}