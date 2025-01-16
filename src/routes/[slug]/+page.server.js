import { error } from '@sveltejs/kit';
import { top_10_category_posts, topics, posts } from '$lib/data';

export function load({ params }) {
    const myposts = posts;
    const related_posts = posts;
    const mytopics = topics.filter((topic) => topic.category === params.slug);
    return {
        myposts, mytopics, related_posts
    }
}