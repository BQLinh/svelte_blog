import { error } from '@sveltejs/kit';
import { categories, topics } from '$lib/data';

export function load({ params }) {
    const category = categories.find((category) => category.category === params.slug)
    console.log(category);
    if (!category) error(404);
    const mytopics = topics.find((topic) => topic.category === category)
    return {
        category, mytopics
    }
}