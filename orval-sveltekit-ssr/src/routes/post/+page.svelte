<script lang="ts">
    import { createGetPosts } from "$lib/api/api_orval";

    const postQuery = createGetPosts();
</script>

{#if $postQuery.isSuccess}
    {#each $postQuery.data as post}
        <p>{post.title}</p>
    {/each}
{/if}
