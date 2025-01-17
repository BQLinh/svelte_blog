export const load = async ({ fetch }) => {
    const response = await fetch(
        'http://127.0.0.1:8000/posts/3/'
    )
    const data = await response.json()
    return data
}