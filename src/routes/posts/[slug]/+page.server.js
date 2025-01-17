export const load = async ({ params }) => {
    const slug = params.slug;
    const response = await fetch(
        `http://127.0.0.1:8000/posts/${slug}`
    )
    const data = await response.json()
    return data
}