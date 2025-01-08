import { error } from '@sveltejs/kit';
import { categories, topics } from '$lib/data';

export function load({ params }) {
    const category = categories.find((category) => category.category === params.slug)

    if (!category) error(404);
    const mytopics = topics.filter((topic) => topic.category === category.category)
    return {
        category, mytopics
    }
}