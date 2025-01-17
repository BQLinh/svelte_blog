import { error } from '@sveltejs/kit';
import { top_10_category_posts, topics, posts } from '$lib/data';

export function load({ params }) {
    const mytopic = topics.find((topic) => topic.topic === params.slug);
    const mycategory = mytopic?.category;
    const related_posts = top_10_category_posts.filter((post) => post.topic === mytopic?.topic);
    const mytopics = topics.filter((topic) => topic.category === mycategory);
    const myposts = posts.filter((post) => post.topic === mytopic?.topic);
    return {
        mycategory, mytopics, related_posts, myposts
    }
}