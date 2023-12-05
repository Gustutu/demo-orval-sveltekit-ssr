import { prefetchGetPosts } from '$lib/api/api_orval.js'

export async function load({ parent, fetch }) {
    const { queryClient } = await parent()

    await prefetchGetPosts(queryClient)
}